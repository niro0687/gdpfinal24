from django.shortcuts import render, redirect, reverse
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.utils import timezone as tz
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from datetime import datetime as dt, date as _date
from django.core.mail import EmailMessage, send_mass_mail, send_mail
from django.core.files import File
from django.utils.html import strip_tags
from django.template.loader import render_to_string
from django.core.files.storage import default_storage
from django.conf import settings
from .models import *
from .utils import *
import random
import os
import hashlib


# Create your views here.

def just_sign_up(request):
    return redirect('/sign_up/null/')


def delete_project_file(request, id):
    file = ProjectFile.objects.get(pk=id)
    
    delete_pro_file(file)
    file.delete()
    
    return JsonResponse({
        'success': True,
    })


def update_token(request, key, bool):
    if key == hashlib.md5(settings.EMAIL_ADMIN_USER.encode()).hexdigest():
        user = request.GET['username']
        key_code = request.GET['key_code']
        try:
            key_code = int(key_code)
        except:
            return HttpResponse('Request rejected', status=500)
        
        if user == settings.USERNAME_ADMIN and key_code == settings.KEY_CODE:
            if bool in ['true', 'True']:
                update_ensure_token(True)
            else:
                update_ensure_token(False)
            
            return HttpResponse('Token updated successfully')
        else:
            return HttpResponse('Request rejected', status=500)
    else:
        return HttpResponse('Email hashed error', status=500)



def change_recovery_password(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        code = request.POST.get('code')
        p1 = request.POST.get('p1')
        p2 = request.POST.get('p2')

        try:
            user = User.objects.get(email=email)
            if user.info.init_code == int(code):
                if p1 == p2:
                    user.set_password(p1)
                    user.save()

                    update_session_auth_hash(request, user)
                    auth_user = authenticate(request, username=user.username, password=p1)
                    if auth_user is not None:
                        login(request, auth_user)
                        return JsonResponse({
                            'success': True,
                            'auth': True,
                        })
                else:
                    return JsonResponse({
                        'success': False,
                        'password_do_not_match': True
                    })
            else:
                return JsonResponse({
                    'success': False,
                    'wrong_code': True
                })
            
        except User.DoesNotExist:
            return JsonResponse({
                'email_not_found': True
            })
    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    


def check_code(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        code = request.POST.get('code')

        try:
            user = User.objects.get(email=email)
            if user.info.init_code == int(code):
                return JsonResponse({
                    'success': True,
                    'wrong_code': False
                })
            else:
                 return JsonResponse({
                    'success': False,
                    'wrong_code': True
                })
        
        except User.DoesNotExist:
            return JsonResponse({
                'success': False,
                'email_not_found': True
            })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

def get_recovery_code(request):
    if request.method == 'POST':
        email = request.POST.get('email')

        try:
            user = User.objects.get(email=email)
            random_code = 0
            while 1:
                random_code = random.randint(100000, 999999)
                if random_code == 100000 or random_code == 999999:
                    pass
                else:
                    break

            user.info.init_code = random_code
            user.info.save()

            subject = 'Reinitialisation de mots de passe'

            # send code to email
            context = {
                'name': user.last_name,
                'code': random_code
            }

            template_name = "email/recovery.html"
            convert_to_html_content =  render_to_string(
            template_name=template_name,
            context=context
            )
            plain_message = strip_tags(convert_to_html_content)


            send_mail(
                subject=subject, 
                message=plain_message, 
                from_email=settings.EMAIL_HOST_USER, 
                recipient_list=[user.email],
                html_message=convert_to_html_content,
            )

            return JsonResponse({
                'success': True,
                'email_not_found': False,
            })

        except User.DoesNotExist:
            return JsonResponse({
                'email_not_found': True
            })
    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

def password_init(request):
    if request.user.is_authenticated:
        return redirect(reverse('app:home'))
    
    return render(request, 'password-init.html')


@login_required
def delete_conversation(request, room):
    chat_room = ChatRoom.objects.get(cripted_id=room)

    for m in chat_room.messages.all():
        if m.deleted_for.count() == 0:
            m.deleted_for.add(request.user)
        else:
            if m.deleted_for.count() == 1 and request.user not in m.deleted_for.all():
                if m.type == 'video':
                    delete_video_file(m)
                elif m.type == 'audio':
                    delete_audio_file(m)
                elif m.type == 'file':
                    delete_file_file(m)
                elif m.type == 'image':
                    delete_image_file(m)
                    
                m.delete()

    return JsonResponse({
        'success': True
    })


@login_required
def change_password(request):
    if request.method == 'POST':
        old = request.POST.get('old_pass')
        confirm = request.POST.get('confirm_pass')
        new = request.POST.get('new_pass')

        if request.user.check_password(old):
            request.user.set_password(confirm)
            request.user.save()

            update_session_auth_hash(request, request.user)
            
            return JsonResponse({
                'wrong_password': False,
                'success': True,
            })
        
        else:
            return JsonResponse({
                'wrong_password': True,
                'success': False,
            })

    else:
        return JsonResponse({
            'error': True
        }, status=405)


@login_required
def delete_project(request, id):
    project = Project.objects.get(pk=id)


    if project.admin == request.user:
        # delete chat
        for chat in project.chat_rooms.all():
            # delete message
            for mess in chat.messages.all():
                if mess.type == 'video':
                    delete_video_file(mess)
                elif mess.type == 'audio':
                    delete_audio_file(mess)
                elif mess.type == 'file':
                    delete_file_file(mess)
                elif mess.type == 'image':
                    delete_image_file(mess)
                
                mess.delete()
            chat.delete()

        # delete section
        for s in project.sections.all():
            # delete tasks
            for t in s.tasks.all():
                t.delete()
            s.delete()

        
        # delete file project
        for fi in project.files.all():
            delete_pro_file(fi)
            fi.delete()
        

        # delete note project
        for no in project.notes.all():
            no.delete()
        
    
        channel_layer = get_channel_layer()

        users = [request.user]
        for i in project.members.all():
            users.append(i)
        
        new = {
            'id': project.pk,
            'deleter_id': request.user.pk,
            'action': 'delete',
        }

        project.delete()


        for _ in users:
            # project in home
            async_to_sync(channel_layer.group_send)(
                f'project_list_update_{str(_.pk)}',
                {
                    'type': 'send_message',
                    'data': new,
                }
            )
            # project list
            async_to_sync(channel_layer.group_send)(
                f'sync_project_home_{str(_.pk)}',
                {
                    'type': 'send_message',
                    'data': new,
                }
            )


        return JsonResponse({
            'id': id,
            'deleter_id': request.user.id,
            'deleted': True
        })



def sign_up(request, key):
    if request.user.is_authenticated:
        return redirect(reverse('app:home'))
    
    if request.method == 'POST':
        email = request.POST.get('email')
        username = request.POST.get('username')
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')


        try:
            user = User.objects.get(username=username)
            return JsonResponse({
                'username_error': True,
                'message': "Cette nom d'utilisateur est déja existé.",
            })
        except:
            try:
                user_email = User.objects.get(email=email)
                return JsonResponse({
                    'email_error': True,
                    'message': "Cet adresse email est déja existé.",
                })
            
            except:
                new = User.objects.create_user(
                    first_name=firstName, 
                    last_name=lastName, 
                    username=username,
                    email=email,
                    password=password1 
                )
                second = UserSecondInfo()
                second.user = new 
                second.save()
                new.save()
                
                if key and key != 'null':
                    pro = Project.objects.get(project_key=key)
                    pro.members.add(new)
                    pro.save()
                        
                auth_user = authenticate(request, username=new.username, password=password1)

                if auth_user is not None:
                    login(request, auth_user)


                return JsonResponse({
                    'email_error': False,
                    'username_error': False,
                    'success': True,
                })

        
    else:
        return render(request, 'sign-up.html')

def init(request, key):
    if request.method == 'POST':
        email = request.POST.get('email')

        return JsonResponse({
            'success': 'tonga ilay requet',
        })
    else:
        return render(request, 'init.html')


def auth(request):
    if request.user.is_authenticated:
        return redirect(reverse('app:home'))
    else:
        if request.method == 'POST':
            response = {
                'authentified': None,
                'wrong_password': None,
                'user_does_not_exists': None
            }
            email = request.POST.get('username')
            password = request.POST.get('password')
            model_user = None
            user = None
            try:
                model_user = User.objects.get(email=email)
                user = authenticate(request, username=model_user.username, password=password)
                if user is not None:
                    login(request, user)
                    response['authentified'] = True
                    response['user_does_not_exists'] = False
                    response['wrong_password'] = False
                else:
                    response['authentified'] = False
                    response['user_does_not_exists'] = False
                    response['wrong_password'] = True

            except User.DoesNotExist:
                response['authentified'] = False
                response['user_does_not_exists'] = True
                response['wrong_password'] = False

            return JsonResponse(response)
        
        else:   
            return render(request, 'auth.html')
    

@login_required
def home(request):
    if not check_token():
        return HttpResponse('WebSiteTokenError: Contact the administrator and try to update your website token. Reload the server after.')
    
    return render(request, 'gp.html')


@login_required
def get_my_info(request):
    image = None
    try:
        image = request.user.info.photo.url
    except:
        image = None

    data = {
        'id': request.user.id,
        'photo': image,
        'email': request.user.email,
        'description': request.user.info.description if request.user.info.description is not None else '',
        'jobTitle': request.user.info.jobTitle if request.user.info.jobTitle is not None else '',
        'lastName': request.user.last_name,
        'firstName': request.user.first_name,
        'username': request.user.username
    }
    return JsonResponse(data)

@login_required
def get_my_projects(request):
    if not check_token():
        return HttpResponse('WebSiteTokenError: Contact the administrator and try to update your website token. Reload the server after.')
    
    my_projects = request.user.my_projects.all()
    my_related_project = request.user.my_related_projects.all()

    all_projects = []

    for project in my_projects:
        all_projects.append(project)
    
    for pro in my_related_project:
        if pro not in all_projects:
            all_projects.append(pro)

    data = []
    
    for p in all_projects:
        project_photo = None
        admin_photo = None

        try:
            admin_photo = p.admin.info.photo.url
        except:
            admin_photo = None

        
        try:
            project_photo = p.photo.url
        except:
            project_photo = None

        members = []

        sections = []

        for section in p.sections.all():

            sec = {
                'id': section.pk,
                'name': section.name,
                'tasks': []
            }

            for task in section.tasks.all():

                sec['tasks'].append({
                    'id': task.pk,
                    'name': task.name,
                    'status': task.status,
                    'description': task.description,
                    'endDate': task.end_date,
                    'startDate': task.begin_date,
                    'deadline': task.deadline,
                    'user': {
                        'id': task.owner_task.id,
                        'lastName': task.owner_task.last_name,
                        'firstName': task.owner_task.first_name,
                    }
                })


            sections.append(sec)
        
        for member in p.members.all():
            m_photo = None
            try:
                m_photo = member.info.photo.url
            except:
                m_photo = None
            
            members.append({
                'id': member.pk,
                'firstName': member.first_name,
                'lastName': member.last_name,
                'email': member.email,
                'photo': m_photo
            })
            
        data.append({
            'id': p.pk,
            'name': p.name,
            'photo': project_photo,
            'admin': {
                'id': p.admin.pk,
                'firstName': p.admin.first_name,
                'lastName': p.admin.last_name,
                'email': p.admin.email,
                'photo': admin_photo,
            },
            'members': members,
            'sections': sections,
        })


    return JsonResponse(data, safe=False)


@login_required
def update_profile(request):
    if request.method == 'POST':
        first_name = request.POST.get('firstName')
        last_name = request.POST.get('lastName')
        username = request.POST.get('username')
        job_title = request.POST.get('jobTitle')
        description = request.POST.get('description')
        photo = request.FILES.get("photo")
        touched = request.POST.get('photoTouched')


        request.user.first_name = first_name
        request.user.last_name = last_name
        request.user.username = username

        if touched == 'true':
            request.user.info.photo = photo

        request.user.info.description = description
        request.user.info.jobTitle = job_title

        request.user.save()
        request.user.info.save()

        return JsonResponse({'success': True})
    else:
        return JsonResponse({"error": True}, status=405)


def logout_view(request):
    if request.user.is_authenticated:
        logout(request)
        return redirect(reverse('app:auth'))
    else:
        return redirect(reverse('app:auth'))

@login_required
def create_new_project(request):
    if request.method == 'POST':
        name = request.POST.get("name")
        section = request.POST.get("section")
        first_section = Section()
        first_section.name = section
        first_section.save()


        project = Project()
        project.name = name
        project.admin = request.user
        project.date_created = tz.now()

        project.save()
        
        project.generate_key()
        project.sections.add(first_section)
        project.save()

        admin_photo = None
        try:
            admin_photo = project.admin.photo.url
        except:
            admin_photo = None

        new = {
            'id': str(project.pk),
            'name': project.name,
            'action': 'new',
            'admin': {
                'id': str(project.admin.pk),
                'firstName': project.admin.first_name,
                'lastName': project.admin.last_name,
                'photo': admin_photo,
                'email': project.admin.email,
            },
            'photo': None,
            'members': []
        }
        
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            f'project_list_update_{str(project.admin.pk)}',
            {
                'type': 'send_message',
                'data': new,
            }
        )

        return JsonResponse(new)

    else:
        return JsonResponse({'method_error': True}, status=405)
    

def get_project_data(request, pk):
    project = Project.objects.get(pk=pk)
    if not check_token():
        return HttpResponse('WebSiteTokenError: Contact the administrator and try to update your website token. Reload the server after.')
    
    sections = []   
    notes = []
    files = []


    # update task status
    today = dt.now()
    now = _date(today.year, today.month, today.day)

    for sect in project.sections.all():
        ts = sect.tasks.filter(status='En attente')

        for t in ts:
            if t.begin_date <= now <= t.end_date:
                t.status = 'En cours'
                t.save()

    client =  {
        'name': project.client.name if project.client is not None else '',
        'number': project.client.number if project.client is not None else '',
        'email': project.client.email if project.client is not None else '',
        'address': project.client.address if project.client is not None else '',
    }

    for note in project.notes.all():
        nt = {
            'id': note.pk,
            'title': note.title,
            'content': note.content,
            'date': note.last_modified,
            'user': {
                'id': note.owner_note.pk,
                'firstName': note.owner_note.first_name,
                'lastName': note.owner_note.last_name,
            }
        }

        notes.append(nt)

    for file in project.files.all():
        
        fi = {
            'id': file.pk,
            'fileURL': file.file.name.split('/')[1],
            'realFileURL': file.file.url,
            'size': file.size,
            'description': file.description,
            'date': file.datetime_created,
            'user': {
                'id': file.owner_files.pk,
                'firstName': file.owner_files.first_name,
                'lastName': file.owner_files.last_name,
                'email': file.owner_files.email,
            }
        }

        files.append(fi)

    for section in project.sections.all():

        sec = {
            'id': section.pk,
            'name': section.name,
            'tasks': [],
        }

        for task in section.tasks.all():
            user_photo = None
            try:
                user_photo = task.owner_task.info.photo.url
            except:
                user_photo = None

            comments = []

            for comment in task.comments.all():
                com_photo = None
                try:
                    com_photo = comment.owner_comment.info.photo.url
                except:
                    com_photo = None

                com = {
                    'id': comment.pk,
                    'user': {
                        'id': comment.owner_comment.pk,
                        'firstName': comment.owner_comment.first_name,
                        'lastName': comment.owner_comment.last_name,
                        'email': comment.owner_comment.email,
                        'photo': com_photo
                    },
                    'comment': comment.text,
                    'date': comment.date_comment
                }

                comments.append(com)


            task_values = {
                'id': task.pk,
                'name': task.name,
                'user': {
                    'id': str(task.owner_task.pk),
                    'firstName': task.owner_task.first_name,
                    'lastName': task.owner_task.last_name,
                    'email': task.owner_task.email,
                    'photo': user_photo
                },
                'description': task.description,
                'endDate': task.end_date,
                'startDate': task.begin_date,
                'status': task.status,
                'deadline': task.deadline,
                'comments': comments,
            }

            sec['tasks'].append(task_values)
        
        sections.append(sec)



    all_data = {
        'sections': sections,
        'notes': notes,
        'conversations': [],
        'client': client,
        'files': files,
    }

    return JsonResponse(all_data)

@login_required
def edit_project_attribute(request):
    if request.method == 'POST':
        id = request.POST.get('id')
        name = request.POST.get('name')
        file = request.FILES.get('photo')
        touched = request.POST.get("touched")

    
        project = Project.objects.get(pk=int(id))
        project.name = name
        if touched == 'true':
            project.photo = file
        project.save()

        channel_layer = get_channel_layer()

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = f"{request.user.last_name} {request.user.first_name} a mis à jour l'attribute de projet."
                new_notif.time = tz.now()
                new_notif.icon = 'fa fa-shapes'
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'text': new_notif.text,
                    'icon': new_notif.icon,
                }
                

                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )
        


        return JsonResponse({'success': True})

    else:
        return JsonResponse({'error_method': False}, status=405)



@login_required
def invite_user_to_join_project(request):
    if request.method == 'POST':
        project_id = int(request.POST.get('id'))
        emails = request.POST.get('emails')
        emails = emails.split(" ")

        user_email_found = []
        user_found = []
        user_not_found = []


        for email in emails:
            try:
                user = User.objects.get(email=email)
                user_found.append(user)
                user_email_found.append(email)

            except User.DoesNotExist:
                user_not_found.append(email)


        project = Project.objects.get(pk=project_id)
        

        already_added = []
        added = []
        user_added = []
        user_to_notif = []

        # send email for the user not found in the platform
        
        subject = f'Invitation pour un projet'
        context = {
            'name': request.user.last_name,
            'project': project.name,
            'link': f'http://gpd.com/sign_up/{project.project_key}/'
        }

        template_name = "email/invitation.html"
        convert_to_html_content =  render_to_string(
        template_name=template_name,
        context=context
        )
        plain_message = strip_tags(convert_to_html_content)


        send_mail(
            subject=subject, 
            message=plain_message, 
            from_email=settings.EMAIL_HOST_USER, 
            recipient_list=user_not_found,
            html_message=convert_to_html_content,
        )
        # end send

        for u in user_found:
            if u not in project.members.all():
                project.members.add(u)
                added.append(u.email)
                user_to_notif.append(u)
                photo = None
                try:
                    photo = u.info.photo.url
                except:
                    photo = None

                user_added.append({
                    'id': u.pk,
                    'email': u.email,
                    'lastName': u.last_name,
                    'firstName': u.first_name,
                    'photo': photo
                })

            else:
                already_added.append(u.email)

        project.save()

        channel_layer = get_channel_layer()

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = "Nouvelle(s) équipe(s) qui vient d'ajouter dans le groupe."
                new_notif.icon = 'far fa-user'
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'text': new_notif.text,
                    'icon': new_notif.icon,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )
        
        admin_photo = None
        try:
            admin_photo = project.admin.photo.url
        except:
            admin_photo = None


        project_photo = None
        try:
            project_photo = project.photo.url
        except:
            project_photo = None

        get_members = []

        for m in project.members.all():
            m_photo = None
            try:
                m_photo = m.info.photo.url
            except:
                m_photo = None

            get_members.append({
                'id': m.pk,
                'email': m.email,
                'lastName': m.last_name,
                'firstName': m.first_name,
                'photo': m_photo
            })


        new = {
            'id': str(project.pk),
            'name': project.name,
            'action': 'new',
            'admin': {
                'id': str(project.admin.pk),
                'firstName': project.admin.first_name,
                'lastName': project.admin.last_name,
                'photo': admin_photo,
                'email': project.admin.email,
            },
            'photo': project_photo,
            'members': get_members,
        }

        for _ in user_to_notif:
            async_to_sync(channel_layer.group_send)(
                f'project_list_update_{str(_.pk)}',
                {
                    'type': 'send_message',
                    'data': new,
                }
            )


        response = {
            'emails': emails,
            'found': user_email_found,
            'not_found': user_not_found,
            'already_in': already_added,
            'added': added,
            'users': user_added
        }

        return JsonResponse(response)
    else:
        return JsonResponse({'error': True}, status=405)

@login_required
def add_section(request):
    if request.method == "POST":
        project_id = request.POST.get("id")
        name = request.POST.get("name")

        project = Project.objects.get(pk=int(project_id))

        new_section = Section.objects.create(name=name, date_created=tz.now())
        project.sections.add(new_section)
        project.save()

        channel_layer = get_channel_layer()

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a ajouté une nouvel section ({new_section.name}) dans le projet {project.name}."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = message
                new_notif.icon = 'fa fa-plus-circle'
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'icon': new_notif.icon,
                    'text': new_notif.text,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )

        new_section_data = {
            'id': new_section.pk,
            'name': new_section.name,
            'tasks': [],
        }

        for _ in user_to_send_notifications:
            if _ != request.user:
                async_to_sync(channel_layer.group_send)(
                f'section_sync_{project.pk}_{str(_.pk)}',
                    {
                        'type': 'send_message',
                        'data': new_section_data,
                    }
                )


        return JsonResponse({
            'id': new_section.pk,
            'name': new_section.name,
            'tasks': [],
        })
    else:
        return JsonResponse({'error': True}, status=405)
    
@login_required
def add_task(request):
    if request.method == "POST":
        section_id = request.POST.get("id")
        name = request.POST.get("name")
        description = request.POST.get("description")
        end_date = request.POST.get("endDate")
        begin_date = request.POST.get("startDate")
        deadline = int(request.POST.get('deadline'))
        status = request.POST.get('status')

        date_end_list = end_date.split("-")
        date_begin_list = begin_date.split("-")

        new_task = Task()
        new_task.name = name
        new_task.description = description
        new_task.begin_date = dt(int(date_begin_list[0]), int(date_begin_list[1]), int(date_begin_list[2]))
        new_task.end_date = dt(int(date_end_list[0]), int(date_end_list[1]), int(date_end_list[2]))
        new_task.owner_task = request.user
        new_task.datetime_created = tz.now()
        new_task.deadline = deadline
        new_task.status = status
        new_task.save()

        creator_photo = None
        

        section = Section.objects.get(pk=int(section_id))
        section.tasks.add(new_task)
        section.save()
        
        channel_layer = get_channel_layer()
        project = section.projects.all()[0]

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a ajouté une nouvelle le tâches ({new_task.name}) dans le projet {project.name}."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = message
                new_notif.icon = 'far fa-check-circle'
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'text': new_notif.text,
                    'icon': new_notif.icon,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )

        try:
            creator_photo = request.user.info.photo.url
        except:
            creator_photo = None



        return JsonResponse({
            'id': new_task.pk,
            'name': new_task.name,
            'description': new_task.description,
            'user': {
                'id': request.user.pk,
                'firstName': request.user.first_name,
                'lastName': request.user.last_name,
                'username': request.user.username,
                'email': request.user.email,
                'photo': creator_photo,
            },
            'startDate': str(new_task.begin_date),
            'endDate': str(new_task.end_date),
            'comments': [],
            'deadline': new_task.deadline,
            'status': new_task.status,
        })
    else:
        return JsonResponse({'error': True}, status=405)


@login_required
def upload_project_file(request):
    if request.method == 'POST':
        file = request.FILES.get('file')
        size = request.POST.get('size')
        file_type = request.POST.get('fileType')
        description = request.POST.get('description')
        id = request.POST.get('project_id')


        new_file = ProjectFile()
        new_file.file = file
        new_file.description = description
        new_file.size = size
        new_file.datetime_created = tz.now()
        new_file.owner_files = request.user

        new_file.save()

        project = Project.objects.get(pk=int(id))
        project.files.add(new_file)
        project.save()

        user_to_send_notifications = []

        channel_layer = get_channel_layer()
        
        if project.admin != request.user:
            user_to_send_notifications.append(project.admin)

        for us in project.members.all():
            if us != request.user:
                user_to_send_notifications.append(us)

        for u in user_to_send_notifications:
            message = f"{request.user.last_name} {request.user.first_name} a ajouté un fichier dans le projet {project.name}"
            
            new_notif = Notification()
            new_notif.text = message
            new_notif.user = u
            new_notif.icon = 'fa fa-file'
            new_notif.time = tz.now()
            new_notif.save()

            message_data = {
                'id': new_notif.pk,
                'text': new_notif.text,
                'datetime': str(new_notif.time),
                'icon': new_notif.icon,
            }

            async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(u.pk)}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )

        return JsonResponse({
            'id': new_file.pk,
            'size': new_file.size,
            'description': new_file.description,
            'realFileURL': new_file.file.url,
            'fileURL': new_file.file.name.split("/")[1],
            'user': {
                'id': request.user.pk,
                'lastName': request.user.last_name,
                'firstName': request.user.first_name,
            },
            'date': str(new_file.datetime_created)
        })
    
    else:
        return JsonResponse({
            'error': True
        }, status=405)
    
def add_project_note(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        project_id = request.POST.get('project_id')
        content = request.POST.get('content')
        

        note = ProjectNote()
        note.owner_note = request.user
        note.title = title.strip()
        note.content = content.strip()
        note.last_modified = tz.now()

        note.save()

        project = Project.objects.get(pk=int(project_id))
        project.notes.add(note)
        project.save()


        channel_layer = get_channel_layer()
        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a ajouté une note dans le projet."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = message
                new_notif.icon = 'fa fa-font'
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'text': new_notif.text,
                    'icon': new_notif.icon,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )

        return JsonResponse({
            'id': note.pk,
            'title': note.title,
            'content': note.title,
            'user': {
                'id': request.user.pk,
                'lastName': request.user.last_name,
                'firstName': request.user.first_name,
            },
            'date': str(note.last_modified),
        })

    else:
        return JsonResponse({
            "error": True,
        }, status=405)
    

@login_required
def get_my_notes(request):
    notes = request.user.my_personal_notes.all()

    to_return = []

    for note in notes:
        to_return.append({
            'id': note.id,
            'user': {
                'id': request.user.pk,
                'lastName': request.user.last_name,
                'firstName': request.user.first_name,
            },
            'title': note.title,
            'content': note.content,
            'date': str(note.last_modified),
        })

    return JsonResponse(to_return, safe=False)

@login_required
def personal_note(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
    
        note = PersonalNote()
        note.owner_notes = request.user
        note.title = title.strip()
        note.content = content.strip()
        note.last_modified = tz.now()

        note.save()

        return JsonResponse({
            'id': note.pk,
            'title': note.title,
            'content': note.title,
            'user': {
                'id': request.user.pk,
                'lastName': request.user.last_name,
                'firstName': request.user.first_name,
            },
            'date': str(note.last_modified),
        })

    else:
        return JsonResponse({
            "error": True,
        }, status=405)
    

@login_required
def update_task_name(request):
    if request.method == 'POST':
        task_id = request.POST.get("id")
        title = request.POST.get("title")

        task = Task.objects.get(pk=int(task_id))

        task.name = title

        task.save()

        return JsonResponse({
            'success': True,
        })
    else:
        return JsonResponse({
            'error': False,
        }, status=405)

    

@login_required
def update_task_des(request):
    if request.method == 'POST':
        task_id = request.POST.get("id")
        title = request.POST.get("des")

        task = Task.objects.get(pk=int(task_id))

        task.description = title

        task.save()

        return JsonResponse({
            'success': True,
        })
    else:
        return JsonResponse({
            'error': False,
        }, status=405)



@login_required
def update_task_status(request):
    if request.method == 'POST':
        task_id = request.POST.get("id")
        status = request.POST.get("status")

        task = Task.objects.get(pk=int(task_id))

        task.status = status

        if status.lower().strip() == 'terminé':
            channel_layer = get_channel_layer()
            
            section = task.sections.all()[0]
            project = section.projects.all()[0]

            user_to_send_notifications = [project.admin]
            for u in project.members.all():
                user_to_send_notifications.append(u)

            for us in user_to_send_notifications:
                if us != request.user:
                    message = f"{request.user.last_name} {request.user.first_name} a terminé son tâches ({task.name}) dans le projet {project.name}."
                    new_notif = Notification()
                    new_notif.user = us
                    new_notif.notification_code = '000'
                    new_notif.text = message
                    new_notif.time = tz.now()
                    new_notif.save()

                    new = {
                        'id': new_notif.pk,
                        'datetime': str(new_notif.time),
                        'text': new_notif.text,
                    }
                    
                    async_to_sync(channel_layer.group_send)(
                    f'notification_for_{str(us.pk)}',
                        {
                            'type': 'send_message',
                            'data': new,
                        }
                    )

        task.save()

        return JsonResponse({
            'success': True,
        })
    else:
        return JsonResponse({
            'error': False,
        }, status=405)


@login_required
def post_comment(request):
    if request.method == 'POST':
        task_id = request.POST.get('id')
        value = request.POST.get('value')

        task = Task.objects.get(pk=int(task_id))

        new_comment = Comment()
        new_comment.date_comment = tz.now()
        new_comment.owner_comment = request.user
        new_comment.text = value.strip()
        new_comment.save()

        task.comments.add(new_comment)

        user_photo = None

        try:
            user_photo = request.user.info.photo.url
        except:
            user_photo = None


        return JsonResponse({
            'id': new_comment.pk,
            'date': str(new_comment.date_comment),
            'comment': new_comment.text,
            'user': {
                'id': new_comment.owner_comment.pk,
                'lastName': new_comment.owner_comment.last_name,
                'firstName': new_comment.owner_comment.first_name,
                'photo': user_photo,
            }
        })
    
    else:
        return JsonResponse({
            'error': False,
        }, status=405)

@login_required
def delete_section(request):
    if request.method == 'POST':
        section_id = request.POST.get("sectionID")
        project_id = request.POST.get('projectID')

        section = Section.objects.get(pk=int(section_id))
        project = Project.objects.get(pk=int(project_id))

        channel_layer = get_channel_layer()

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a supprimé le section ({section.name}) dans le projet {project.name}."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.icon = 'fa trash-alt'
                new_notif.text = message
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'text': new_notif.text,
                    'icon': new_notif.icon,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )

        project.sections.remove(section)
        project.save()
        section.delete()

        return JsonResponse({
            "section_id": section_id,
            'project_id': project_id,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)  
    
@login_required
def mark_all_task_done(request):
    if request.method == 'POST':
        section_id = request.POST.get("sectionID")
        section = Section.objects.get(pk=int(section_id))

        for task in section.tasks.all():
            task.status = "Terminé"
            task.save()
        
        return JsonResponse({
            'success': True,
        })
    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    


@login_required
def edit_client_info(request):
    if request.method == 'POST':
        project_id = request.POST.get("id")
        name = request.POST.get("name")
        email = request.POST.get("email")
        number = request.POST.get("number")
        address = request.POST.get("address")

        project = Project.objects.get(pk=int(project_id))

    
        if project.client is None:
            client = Client()
            client.name = name
            client.email = email
            client.number = number
            client.address = address
            client.save()
            project.client = client
        else:
            project.client.name = name
            project.client.email = email
            project.client.number = number
            project.client.address = address
            project.client.save()

        project.save()


        return JsonResponse({
            'success': True,
        })
    else:
        return JsonResponse({
            'error': True,
        }, status=405)


@login_required
def mark_one_task_as_done(request):
    if request.method == 'POST':
        task_id = request.POST.get("id")

        task = Task.objects.get(pk=int(task_id))

        task.status = 'Terminé'
        task.save()

        channel_layer = get_channel_layer()
            
        section = task.sections.all()[0]
        project = section.projects.all()[0]

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a terminé son tâches ({task.name}) dans le projet {project.name}."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = message
                new_notif.time = tz.now()
                new_notif.icon = 'fa fa-check-double'
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'text': new_notif.text,
                    'icon': new_notif.icon,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )

        return JsonResponse({
            'success': True
        })


    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def duplicate_task(request):
    if request.method == 'POST':
        task_id = request.POST.get("id")
        section_id = request.POST.get("sectionID")

        task = Task.objects.get(pk=int(task_id))

        duplicated = task
        duplicated.pk = None
        duplicated.owner_task = request.user
        duplicated.save()

        user_photo = None

        try:
            user_photo = request.user.info.photo.url
        except:
            user_photo = None


        for comment in task.comments.all():
            duplicated.comments.remove(comment)
        
        duplicated.save()
        section = Section.objects.get(pk=int(section_id))

        section.tasks.add(duplicated)
        section.save()

        return JsonResponse({
            'id': duplicated.pk,
            'name': duplicated.name,
            'endDate': str(duplicated.end_date),
            'description': duplicated.description,
            'startDate': str(duplicated.begin_date),
            'deadline': duplicated.deadline,
            'status': duplicated.status,
            'user': {
                'id': duplicated.owner_task.pk,
                'lastName': duplicated.owner_task.last_name,
                'firstName': duplicated.owner_task.first_name,
                'photo': user_photo,
            },
            'comments': [],
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def delete_task(request):
    if request.method == 'POST':
        task_id = request.POST.get("id")
        section_id = request.POST.get("sectionID")

        task = Task.objects.get(pk=int(task_id))

        section = Section.objects.get(pk=int(section_id))
        

        channel_layer = get_channel_layer()
        project = section.projects.all()[0]

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a supprimé le tâches ({task.name}) dans le projet {project.name}."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.icon = 'fa trash-alt'
                new_notif.text = message
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'text': new_notif.text,
                    'icon': new_notif.icon,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )

        section.tasks.remove(task)
        section.save()
        task.delete()

        return JsonResponse({
            'success': True
        })


    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def invite_user_into(request):
    if request.method == 'POST':
        project_id = request.POST.get('id')
        values = request.POST.get("values")
        emails = values.split(' ')

        
        user_email_found = []
        user_found = []
        user_not_found = []


        for email in emails:
            try:
                user = User.objects.get(email=email)
                user_found.append(user)
                user_email_found.append(email)

            except User.DoesNotExist:
                user_not_found.append(email)


        project = Project.objects.get(pk=int(project_id))
        

        already_added = []
        added = []
        user_added = []
        
        
        subject = f'Invitation pour un projet'
        context = {
            'name': request.user.last_name,
            'project': project.name
        }

        template_name = "email/invitation.html"
        convert_to_html_content =  render_to_string(
        template_name=template_name,
        context=context
        )
        plain_message = strip_tags(convert_to_html_content)


        send_mail(
            subject=subject, 
            message=plain_message, 
            from_email=settings.EMAIL_HOST_USER, 
            recipient_list=user_not_found,
            html_message=convert_to_html_content,
        )


        for u in user_found:
            if u not in project.members.all():
                project.members.add(u)
                added.append(u.email)
                photo = None
                try:
                    photo = u.info.photo.url
                except:
                    photo = None

                user_added.append({
                    'id': u.pk,
                    'email': u.email,
                    'lastName': u.last_name,
                    'firstName': u.first_name,
                    'photo': photo
                })

            else:
                already_added.append(u.email)

        project.save()

        channel_layer = get_channel_layer()

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = "Nouvelle(s) équipe(s) qui vient d'ajouter dans le groupe."
                new_notif.icon = 'far fa-user'
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'icon': new_notif.icon,
                    'text': new_notif.text,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )


        admin_photo = None
        try:
            admin_photo = project.admin.photo.url
        except:
            admin_photo = None


        project_photo = None
        try:
            project_photo = project.photo.url
        except:
            project_photo = None

        get_members = []

        for m in project.members.all():
            m_photo = None
            try:
                m_photo = m.info.photo.url
            except:
                m_photo = None

            get_members.append({
                'id': m.pk,
                'email': m.email,
                'lastName': m.last_name,
                'firstName': m.first_name,
                'photo': m_photo
            })


        new = {
            'id': str(project.pk),
            'name': project.name,
            'action': 'new',
            'admin': {
                'id': str(project.admin.pk),
                'firstName': project.admin.first_name,
                'lastName': project.admin.last_name,
                'photo': admin_photo,
                'email': project.admin.email,
            },
            'photo': project_photo,
            'members': get_members,
        }

        for _ in user_added:
            async_to_sync(channel_layer.group_send)(
                f'project_list_update_{str(_.pk)}',
                {
                    'type': 'send_message',
                    'data': new,
                }
            )


        response = {
            'emails': emails,
            'found': user_email_found,
            'not_found': user_not_found,
            'already_in': already_added,
            'added': added,
            'users': user_added
        }

        return JsonResponse(response)

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def edit_note(request):
    if request.method == 'POST':
        note_id = request.POST.get("id")
        title = request.POST.get("title")
        content = request.POST.get('content')
        personal = request.POST.get('personal')

        

        note = None

        if personal == 'true':
            note = PersonalNote.objects.get(pk=int(note_id))
        else:
            note = ProjectNote.objects.get(pk=int(note_id))
        note.title = title.strip()
        note.content = content

        note.save()

        return JsonResponse({
            'success': True,
        })
    

    else:
        return JsonResponse({
            'error': True,
        }, status=405)


@login_required
def send_message(request):
    if request.method == 'POST':
        message_type = request.POST.get('type')
        room_id = request.POST.get('crypted_id')
        timestamp = request.POST.get('timestamp')
        project_id = request.POST.get('projectID')

        room = ChatRoom.objects.get(cripted_id=room_id)
        
        show_date = False

        last_message = room.messages.exclude(deleted_for=request.user).order_by('pk')[:1]

        if len(last_message) == 0:
            show_date = True
        else:
            last_message = last_message[0]
            
            last_message_date = dt(last_message.sent_date.year, last_message.sent_date.month, last_message.sent_date.day)
            now = dt(dt.now().year, dt.now().month, dt.now().day)
            decal = now - last_message_date
            if decal.days == 0:
                show_date = False
            else:
                show_date = True
            

        message = Message()
        message.sender = request.user
        message.status = 'sent'
        message.show_date = show_date
        message.sent_date = tz.now()
        message.timestamp = timestamp
        
        chat_with = None

        for uss in room.users.all():
            if uss != request.user:
                chat_with = uss
                break

        if message_type == 'text':
            message.type = 'text'
            text = request.POST.get('text')
            message.text = text

        elif message_type == 'image':
            message.type = 'image'
            image = request.FILES.get('image')
            message.image = image
            size = request.POST.get("size")
            human_size = request.POST.get("humanSize")
        
        elif message_type == 'audio':
            message.type = 'audio'
            audio = request.FILES.get('audio')
            size = request.POST.get("size")
            human_size = request.POST.get("humanSize")

            message.audio = audio
            message.size = int(size)
            message.human_size = human_size
        
        elif message_type == 'file':
            message.type = 'file'
            file = request.FILES.get('file')
            size = request.POST.get("size")
            extension = request.POST.get('extension')
            human_size = request.POST.get("humanSize")

            message.another_file = file
            message.size = int(size)
            message.extension = extension
            message.human_size = human_size


        elif message_type == 'video':
            video_file = request.FILES.get('video')

            video_path = default_storage.save(f"message_video/{video_file.name}", video_file)

            message.type = 'video'
            message.video = video_path
            size = request.POST.get("size")
            human_size = request.POST.get("humanSize")


            

        message.save()

        room.messages.add(message)
        room.save()

        channel_layer = get_channel_layer()

        for us in room.users.all():
            message_data = None

            chat_user = chat_with if us == request.user else request.user

            photo = None
            try:
                photo = chat_user.info.photo.url
            except:
                photo = None

            if room.room_type == 'private':
                message_data2 = {
                    'crypted_id': room_id,
                    'type': room.room_type,
                    'user': {
                        'id': chat_user.pk,
                        'lastName': chat_user.last_name,
                        'firstName': chat_user.first_name,
                        'photo': photo
                    },
                    'lastMessage': None
                }
            else:
                message_data2 = {
                    'crypted_id': room_id,
                    'type': room.room_type,
                    'name': room.name,
                    'photo': None,
                    'empty': False,
                    'lastMessage': None
                }

            mine = True if us.pk == request.user.pk else False
            
            if message.type == 'text':
                if us.pk == request.user.pk:
                    message_data = {
                        'action': 'new',
                        'id': message.pk,
                        'showDate': message.show_date,
                        'type': 'text',
                        'text': message.text,
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'status': message.status
                    }


                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None
                    message_data = {
                        'id': message.pk,
                        'type': 'text',
                        'action': 'new',
                        'showDate': message.show_date,
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'text': message.text,
                        'status': message.status,
                        'user': {
                            'id': message.sender.pk,
                            'lastName': message.sender.last_name,
                            'firstName': message.sender.first_name,
                            'photo': photo,
                        }
                    }

            elif message.type == 'image':
                if us.pk == request.user.pk:
                    message_data = {
                        'id': message.pk,
                        'type': 'image',
                        'action': 'new',
                        'showDate': message.show_date,
                        'image': message.image.url,
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'status': message.status
                    }
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None
                    message_data = {
                        'id': message.pk,
                        'type': 'image',
                        'action': 'new',
                        'showDate': message.show_date,
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'image': message.image.url,
                        'status': message.status,
                        'user': {
                            'id': message.sender.pk,
                            'lastName': message.sender.last_name,
                            'firstName': message.sender.first_name,
                            'photo': photo,
                        }
                    }

            elif message.type == 'audio':
                if us.pk == request.user.pk:
                    message_data = {
                        'id': message.pk,
                        'type': 'audio',
                        'action': 'new',
                        'showDate': message.show_date,
                        'audio': message.audio.url,
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'status': message.status
                    }
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None
                    message_data = {
                        'id': message.pk,
                        'type': 'audio',
                        'action': 'new',
                        'showDate': message.show_date,
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'audio': message.audio.url,
                        'status': message.status,
                        'user': {
                            'id': message.sender.pk,
                            'lastName': message.sender.last_name,
                            'firstName': message.sender.first_name,
                            'photo': photo,
                        }
                    }

            elif message.type == 'video':
                if us.pk == request.user.pk:
                    message_data = {
                        'id': message.pk,
                        'type': 'video',
                        'action': 'new',
                        'showDate': message.show_date,
                        'video': message.video.url,
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'status': message.status
                    }
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None
                    message_data = {
                        'id': message.pk,
                        'type': 'video',
                        'showDate': message.show_date,
                        'action': 'new',
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'video': message.video.url,
                        'status': message.status,
                        'user': {
                            'id': message.sender.pk,
                            'lastName': message.sender.last_name,
                            'firstName': message.sender.first_name,
                            'photo': photo,
                        }
                    }

            elif message.type == 'file':
                if us.pk == request.user.pk:
                    message_data = {
                        'id': message.pk,
                        'type': 'file',
                        'action': 'new',
                        'showDate': message.show_date,
                        'realFileURL': message.another_file.url,
                        'file': message.another_file.name.split('/')[1],
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'status': message.status
                    }
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None
                    message_data = {
                        'id': message.pk,
                        'type': 'file',
                        'action': 'new',
                        'showDate': message.show_date,
                        'realFileURL': message.another_file.url,
                        'datetime': str(message.sent_date),
                        'isMyMessage': mine,
                        'file': message.another_file.name.split('/')[1],
                        'status': message.status,
                        'user': {
                            'id': message.sender.pk,
                            'lastName': message.sender.last_name,
                            'firstName': message.sender.first_name,
                            'photo': photo,
                        }
                    }

            async_to_sync(channel_layer.group_send)(
                f'chat_{room_id}_{str(us.pk)}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )

            message_data2['lastMessage'] = message_data
            async_to_sync(channel_layer.group_send)(
                f'conversation_list_for_{str(us.pk)}_{project_id}',
                {
                    'type': 'send_message',
                    'data': message_data2,
                }
            )


        if message.type == 'text':
            return JsonResponse({
                'id': message.pk,
                'type': 'text',
                'action': 'new',
                'isMyMessage': True,
                'showDate': message.show_date,
                'status': message.status,
                'datetime': str(message.sent_date)
            })
        
        elif message.type == 'image':
            return JsonResponse({
                'id': message.pk,
                'type': 'image',
                'showDate': message.show_date,
                'action': 'new',
                'image': message.image.url,
                'datetime': str(message.sent_date),
                'isMyMessage': mine,
                'status': message.status
            })
        
        elif message.type == 'audio':
            return JsonResponse({
                'id': message.pk,
                'type': 'audio',
                'action': 'new',
                'showDate': message.show_date,
                'audio': message.audio.url,
                'datetime': str(message.sent_date),
                'isMyMessage': mine,
                'status': message.status
            })
        
        elif message.type == 'file':
            return JsonResponse({
                'id': message.pk,
                'type': 'file',
                'action': 'new',
                'showDate': message.show_date,
                'file': message.another_file.name.split('/')[1],
                'datetime': str(message.sent_date),
                'isMyMessage': mine,
                'status': message.status
            })
        
        elif message.type == 'video':
            return JsonResponse({
                'id': message.pk,
                'type': 'video',
                'action': 'new',
                'video': message.video.url,
                'showDate': message.show_date,
                'datetime': str(message.sent_date),
                'isMyMessage': mine,
                'status': message.status
            })
    else:
        return JsonResponse({
            'error': True,
        }, status=405)


@login_required
def create_group_chat(request):
    if request.method == 'POST':
        project_id = request.POST.get('project_id')
        users = request.POST.getlist('users')
        name = request.POST.get("name")
        
        id_list = []

        for us in list(users)[0].split(','):
            id_list.append(int(us))

        id_list.sort()
        

        room_id_brute = str(project_id) + '_'

        for i in id_list:
            room_id_brute += str(i)
        
        room = ChatRoom()
        room.room_type = 'group'
        room.cripted_id = "default_chat_room_id"
        room.name = name
        room.last_updated = tz.now()
        room.save() 

        room_id_brute = room_id_brute +  '_' + str(room.pk)
        room_id_brute = room_id_brute.encode()

        crypted_id = hashlib.md5(room_id_brute).hexdigest()
        room.cripted_id = crypted_id
        room.save()
        
        for u in id_list:
            user = User.objects.get(pk=int(u))
            room.users.add(user)

        room.users.add(request.user)

        room.save()
        project = Project.objects.get(pk=int(project_id))
        project.chat_rooms.add(room)
        project.save()



        channel_layer = get_channel_layer()


        for us in room.users.all():
            if us.pk != request.user.pk:
                message_data = {
                    'id': room.pk,
                    'crypted_id': room.cripted_id,
                    'type': 'group',
                    'lastMessage': None,
                    'name': room.name,
                    'photo': None,
                    'empty': True,
                    'date': str(room.last_updated),
                }

                async_to_sync(channel_layer.group_send)(
                    f'conversation_list_for_{str(us.pk)}_{project_id}',
                    {
                        'type': 'send_message',
                        'data': message_data,
                    }
                )

        return JsonResponse({
            'id': room.pk,
            'crypted_id': room.cripted_id,
            'empty': True,
            'photo': None,
            'name': room.name,
            'date': str(room.last_updated),
            'lastMessage': None,
            'type': 'group',
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def create_conversation(request):
    if request.method == 'POST':
        user_id = request.POST.get("user_id")
        message = request.POST.get("message")
        timestamp = request.POST.get("timestamp")
        project_id = request.POST.get('project_id')


        new_message = Message()
        new_message.text = message.strip()
        new_message.sender = request.user
        new_message.type = 'text'
        new_message.sent_date = tz.now()
        new_message.status = 'sent'
        new_message.timestamp = timestamp
        new_message.save()

        id_list = []
    
        
        chat_with = User.objects.get(pk=int(user_id))

        id_list.append(request.user.pk)
        id_list.append(chat_with.pk)

        

        id_list.sort()

        room_id_brute = str(project_id)
       
        for id in id_list:
            id = str(id)
            room_id_brute += '_' + id
            
        room_id_brute = room_id_brute.encode()

        crypted_id = hashlib.md5(room_id_brute).hexdigest()

        room = None

        project = Project.objects.get(pk=int(project_id))

        try:
            room = ChatRoom.objects.get(cripted_id=crypted_id)
            room.messages.add(new_message)
            room.last_updated = tz.now()
            room.save()

        except ChatRoom.DoesNotExist:
            room = ChatRoom()
            room.cripted_id = crypted_id
            room.room_type = 'private'
            room.last_updated = tz.now()
            room.save()

            room.users.add(request.user)
            room.users.add(chat_with)
            room.messages.add(new_message)
            room.last_updated = tz.now()
            room.save()
            project.chat_rooms.add(room)
            project.save()

        
        channel_layer = get_channel_layer()


        
        for us in room.users.all():
            user_chat = chat_with if us == request.user else request.user
            mine = True if new_message.sender == us else False
            photo = None
            try:
                photo = user_chat.info.photo.url
            except:
                photo = None

            message_data = {
                'id': room.pk,
                'crypted_id': room.cripted_id,
                'type': 'private',
                'lastMessage': {
                    'id': new_message.pk,
                    'text': new_message.text,
                    'status': 'sent',
                    'type': 'text',
                    'isMyMessage': mine,
                    'datetime': str(new_message.sent_date)
                },
                'user': {
                    'id': user_chat.pk,
                    'lastName': user_chat.last_name,
                    'firstName': user_chat.first_name,
                    'photo': photo,
                }
            }

            async_to_sync(channel_layer.group_send)(
                f'conversation_list_for_{str(us.pk)}_{project_id}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )


        return JsonResponse({
            'success': True
        })


    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def add_invoice(request):
    if request.method == 'POST':
        project_id = request.POST.get("project_id")
        client_name = request.POST.get('client_name')
        client_address = request.POST.get('client_address')
        client_email = request.POST.get('client_email')
        client_number = request.POST.get('client_number')
        amount = request.POST.get('amount')
        date = request.POST.get('date')
        paid = request.POST.get('paid')
        timestamp = request.POST.get('timestamp')

        invoice = Invoice()
        project = Project.objects.get(pk=int(project_id))


        invoice.user = request.user
        invoice.datetime_created = tz.now()
        invoice.time = date
        invoice.project = project
        invoice.amount = Decimal(amount)
        invoice.paid = True if paid == 'true' else False
        invoice.client_name = client_name
        invoice.client_address = client_address
        invoice.client_email = client_email
        invoice.invoice_id = timestamp
        invoice.client_number = client_number
        invoice.client_address = project.client.address if project.client else ''

        invoice.save()

        return JsonResponse({
            'id': invoice.pk,
            'invoice_id': invoice.invoice_id,
        })


    else:
        return JsonResponse({
            'error': True,
        }, status=405)


@login_required
def change_invoice_status(request):
    if request.method == 'POST':
        paid = request.POST.get('paid')
        invoice_id = request.POST.get('id')

        invoice = Invoice.objects.get(invoice_id=invoice_id)

        invoice.paid = True if paid == 'true' else False
        invoice.save()

        return JsonResponse({
            'paid': invoice.paid
        })
        
    else:
        return JsonResponse({
            'error': True,
        }, status=405)



@login_required
def delete_invoice(request):
    if request.method == 'POST':
        invoice_id = request.POST.get('id')

        invoice = Invoice.objects.get(invoice_id=invoice_id)
        invoice.delete()

        return JsonResponse({
            'success': True
        })
        
    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def add_charge_finance(request):
    if request.method == 'POST':
        title = request.POST.get("titre")
        date = request.POST.get("date")
        description = request.POST.get("description")
        amount = request.POST.get("montant")
        project = request.POST.get('projetLie')
        
        charge = ChargeFinance()
        charge.title = title.strip()
        charge.user = request.user
        charge.amount = Decimal(amount)
        charge.date = date
        charge.description = description
        charge.activity_or_project = project
        charge.datetime_created = tz.now()
        charge.save()


        return JsonResponse({
            'id': charge.pk,
            'title': charge.title,
            'amount': charge.amount,
            'description': charge.description,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)

@login_required
def search(request):
    if request.method == 'POST':
        key = request.POST.get('key')

        to_return  = []
        all_project = []
        all_project_id = []
        all_user_id = []
        all_user = []

        for project in Project.objects.filter(name__icontains=key.strip()):
            photo = None
            try:
                photo = project.photo.url
            except:
                photo = None
            all_project.append({
                'id': project.pk,
                'name': project.name,
                'photo': photo,
            })

        for user in User.objects.filter(last_name__icontains=key.strip()):
            if user.pk not in all_user_id:
                user_photo = None 
                try:
                    user_photo = user.info.photo.url
                except:
                    user_photo = None
                all_user_id.append(user.pk)
                all_user.append({
                    'id': user.pk,
                    'lastName': user.last_name,
                    'firstName': user.first_name,
                    'email': user.email,
                    'photo': user_photo
                })

        for user_first_name in User.objects.filter(first_name__icontains=key.strip()):
            if user_first_name.pk not in all_user_id:
                user_photo = None 
                try:
                    user_photo = user_first_name.info.photo.url
                except:
                    user_photo = None
                all_user_id.append(user_first_name.pk)
                all_user.append({
                    'id': user_first_name.pk,
                    'lastName': user_first_name.last_name,
                    'firstName': user_first_name.first_name,
                    'email': user_first_name.email,
                    'photo': user_photo
                })


        for user_email in User.objects.filter(email__icontains=key.strip()):
            if user_email.pk not in all_user_id:
                user_photo = None 
                try:
                    user_photo = user_email.info.photo.url
                except:
                    user_photo = None
                all_user_id.append(user_email.pk)
                all_user.append({
                    'id': user_email.pk,
                    'lastName': user_email.last_name,
                    'firstName': user_email.first_name,
                    'email': user_email.email,
                    'photo': user_photo
                })

        to_return.append(all_project)
        to_return.append(all_user)

        return JsonResponse(to_return, safe=False)
        

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    


@login_required
def delete_message_for_me(request):
    if request.method == 'POST':
        message_id = request.POST.get('id')
        room_id = request.POST.get('room_id')

        message = Message.objects.get(pk=int(message_id))
        room = ChatRoom.objects.get(cripted_id=room_id)

        channel_layer = get_channel_layer()

        message_data = None
        
        if message.deleted_for.count() == 0:
            message.deleted_for.add(request.user)
            message.save()

            message_data = {
                'id': message.pk,
                'action': 'delete',
            }

            async_to_sync(channel_layer.group_send)(
                f'chat_{room_id}_{str(request.user.pk)}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )

            return JsonResponse({
                'action': 'delete',
                'id': int(message.pk)
            })

        else:
            if message.type == 'video':
                delete_video_file(message)
            elif message.type == 'audio':
                delete_audio_file(message)
            elif message.type == 'file':
                delete_file_file(message)
            elif message.type == 'image':
                delete_image_file(message)
            
            message.delete()
            message_data = {
                'id': int(message_id),
                'action': 'delete',
            }

            for us in room.users.all():
                async_to_sync(channel_layer.group_send)(
                    f'chat_{room_id}_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': message_data,
                    }
                )
            
            return JsonResponse({
                'action': 'delete',
                'id': int(message_id)
            })
        
    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def delete_for_everyone(request):
    if request.method == 'POST':
        message_id = request.POST.get('id')
        room_id = request.POST.get('room_id')

        message = Message.objects.get(pk=int(message_id))
        
        
        if message.type == 'video':
            delete_video_file(message)
        elif message.type == 'audio':
            delete_audio_file(message)
        elif message.type == 'file':
            delete_file_file(message)
        elif message.type == 'image':
            delete_image_file(message)
            
        message.delete()

        room = ChatRoom.objects.get(cripted_id=room_id)
        
        channel_layer = get_channel_layer()

        message_data = {
            'id': int(message_id),
            'action': 'delete',
        }

        for us in room.users.all():
            async_to_sync(channel_layer.group_send)(
                f'chat_{room_id}_{str(us.pk)}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )

        return JsonResponse({
            'action': 'delete',
            'id': int(message_id)
        })


    else:
        return JsonResponse({
            'error': True,
        }, status=405)


@login_required
def add_personal_task(request):
    if request.method == 'POST':
        title = request.POST.get("title")
        description = request.POST.get("title")
        end_date = request.POST.get('endDate')
        begin_date = request.POST.get('startDate')
        status = request.POST.get('status')
        deadline = request.POST.get('number_deadline')


        end_date = end_date.split('/')
        begin_date = begin_date.split('/')


        task = PersonalTask()
        task.user = request.user
        task.title = title.strip()
        task.description = description.strip()
        task.begin_date = dt(int(begin_date[2]), int(begin_date[1]), int(begin_date[0]))
        task.end_date = dt(int(end_date[2]), int(end_date[1]), int(end_date[0]))
        task.status = status
        task.deadline = deadline

        task.save()

        return JsonResponse({
            'id': task.pk,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    


@login_required
def create_repport(request):
    if request.method == 'POST':
        project_id = request.POST.get('id')
        description = request.POST.get("description")
        project = Project.objects.get(pk=int(project_id))


        rapport = Rapport()
        rapport.description = description.strip()
        rapport.user = request.user
        rapport.project = project
        rapport.datetime = tz.now()

        rapport.save()

        tasks = []
        project_photo = None
        try:
            project_photo = project.photo.url
        except:
            project_photo = None

        for section in project.sections.all():
            for task in section.tasks.all():
                user_photo = None
                try:
                    user_photo = task.owner_task.info.photo.url
                except:
                    user_photo = None

                t = {
                    "id": task.pk,
                    "name": task.name,
                    'endDate': str(task.end_date),
                    'startDate': str(task.begin_date),
                    'deadline': task.deadline,
                    'status': task.status,
                    'user': {
                        'id': task.owner_task.pk,
                        'firstName': task.owner_task.first_name,
                        'lastName': task.owner_task.last_name,
                        'photo': user_photo
                    }
                }
                tasks.append(t)

        return JsonResponse({
            'id': rapport.pk,
            'description': rapport.description,
            'datetime': str(rapport.datetime),
            'project': {
                "id": project.pk,
                'name': project.name,
                'tasks': tasks,
                'photo': project_photo,
            }
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def create_new_portfolio(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        projects_ids = request.POST.getlist('projects_ids')

            
        port = Portfolio()
        port.title = title
        port.description = description
        port.user = request.user
        port.datetime = tz.now()
        port.save()

        project_return = []

        for id in list(projects_ids)[0].split(','):
            id = int(id)
            pro = Project.objects.get(pk=id)
            port.projects.add(pro)

            admin_photo = None
            try:
                admin_photo = pro.admin.info.photo.url
            except:
                admin_photo = None

            pro_photo = None
            try:
                pro_photo = pro.photo.url
            except:
                pro_photo = None

            done = True
            progression = None

            for sec in pro.sections.all():
                for ta in sec.tasks.all():
                    if ta.status == 'En cours' or ta.status == 'En attente' or ta.status == 'Arret':
                        done = False
                        break
            

            if done:
                progression = 100
            else:
                total = 0
                total_done = 0
                for sec in pro.sections.all():
                    for ta in sec.tasks.all():
                        total += 1

                    total_done += len(sec.tasks.filter(status__icontains='Terminé'))

                progression = (total_done / total) * 100
            
            project_return.append({
                'id': pro.pk,
                'name': pro.name,
                'photo': pro_photo,
                'status': 'Terminé' if done else 'En cours',
                'progression': progression,
                'admin': {
                    'id':  pro.admin.pk,
                    'lastName': pro.admin.last_name,
                    'firstName': pro.admin.first_name,
                    'photo': admin_photo,
                }
            })
        
        port.save()

        return JsonResponse({
            'id': port.pk,
            'title': port.title,
            'description': port.description,
            'projects': project_return,
            'datetime': str(port.datetime)
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    


@login_required
def create_goal(request): 
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        date_fin = request.POST.get('date')
        project_id = request.POST.get('project_id')
        date_fin = date_fin.split('-')


        goal = Goal()
        project = Project.objects.get(pk=int(project_id))
        goal.title = title
        goal.project = project
        goal.user = request.user
        goal.description = description
        goal.date = dt(int(date_fin[0]), int(date_fin[1]), int(date_fin[2]))
        goal.save()


        goal.none_vote.add(project.admin)
        for u in project.members.all():
            goal.none_vote.add(u)

        goal.save()

        channel_layer = get_channel_layer()

        user_to_send_notifications = [project.admin]
        for u in project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a ajouté un nouvel objectif ({goal.title}) lié au projet {project.name}."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = message
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'text': new_notif.text,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )





        message_data = None

        all_user = [goal.project.admin]

        for u in project.members.all():
            all_user.append(u)

        for user in all_user:
            pro_photo = None
            try:
                pro_photo = project.photo.url
            except:
                pro_photo = None

            done = True
            progression = None

            for sec in goal.project.sections.all():
                for ta in sec.tasks.all():
                    if ta.status == 'En cours' or ta.status == 'En attente' or ta.status == 'Arret':
                        done = False
                        break
        
            if done:
                progression = 100
            else:
                total = 0
                total_done = 0
                for sec in goal.project.sections.all():
                    for ta in sec.tasks.all():
                        total += 1

                    total_done += len(sec.tasks.filter(status__icontains='Terminé'))

                progression = (total_done / total) * 100

            total_effect = 1 + goal.project.members.count()

            not_vote_total = goal.none_vote.count()
            not_vote_progression = 0 if not_vote_total == 0 else (not_vote_total / total_effect ) * 100

            message_data = {
                'id': goal.pk,
                'action': 'add',
                'title': goal.title,
                'description': goal.description,
                'date': str(goal.date),
                'progression': progression,
                'status': 'Terminé' if done else 'En cours',
                'project': {
                    'id': goal.project.pk,
                    'name': goal.project.name,
                    'photo': pro_photo,
                },
                'total': total_effect,
                'easy_total': 0,
                'easy_progression': 0,
                'difficult_total': 0,
                'diffucult_progression': 0,
                'impossible_total': 0,
                'impossible_progression': 0,
                'not_vote_total': not_vote_total,
                'not_vote_progression': not_vote_progression,
            }


            async_to_sync(channel_layer.group_send)(
                f'obj_{str(user.pk)}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )


        return JsonResponse({
            'success': True,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    


@login_required
def vote_easy(request):
    if request.method == 'POST':
        id = request.POST.get('id')

        goal = Goal.objects.get(pk=int(id))  
        objs = [
            goal.facile_vote, 
            goal.difficult_vote, 
            goal.impossible_vote,
            goal.none_vote,
        ]

        for method in objs:
            if request.user in method.all():
                method.remove(request.user)
                
        goal.facile_vote.add(request.user)
        goal.save()


        channel_layer = get_channel_layer()

        user_to_send_notifications = [goal.project.admin]
        for u in goal.project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a voté qu'on pourra bien atteindre l'objectif '{goal.title}'."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = message
                new_notif.time = tz.now()
                new_notif.icon = 'far fa-heart'
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'icon': new_notif.icon,
                    'text': new_notif.text,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )

        all_user = [goal.project.admin]

        for u in goal.project.members.all():
            all_user.append(u)

        

        for user in all_user:
            total_effect = 1 + goal.project.members.count()

            easy_total = goal.facile_vote.count()
            easy_progression = 0 if easy_total == 0 else (easy_total / total_effect ) * 100

            diffucult_total = goal.difficult_vote.count()
            diffucult_progression = 0 if diffucult_total == 0 else (diffucult_total / total_effect ) * 100

            not_vote_total = goal.none_vote.count()
            not_vote_progression = 0 if not_vote_total == 0 else (not_vote_total / total_effect ) * 100

            impossible_total = goal.impossible_vote.count()
            impossible_progression = 0 if impossible_total == 0 else (impossible_total / total_effect ) * 100


            message_data = {
                'id': goal.pk,
                'action': 'vote_updated',
                'total': total_effect,
                'easy_total': easy_total,
                'easy_progression': easy_progression,
                'difficult_total': diffucult_total,
                'difficult_progression': diffucult_progression,
                'impossible_total': impossible_total,
                'impossible_progression': impossible_progression,
                'not_vote_total': not_vote_total,
                'not_vote_progression': not_vote_progression,
            }


            async_to_sync(channel_layer.group_send)(
                f'obj_{str(user.pk)}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )

        return JsonResponse({
            'success': True,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)

  
@login_required
def vote_diff(request):
    if request.method == 'POST':
        id = request.POST.get('id')

        goal = Goal.objects.get(pk=int(id))  
        objs = [
            goal.facile_vote, 
            goal.difficult_vote, 
            goal.impossible_vote,
            goal.none_vote,
        ]

        for method in objs:
            if request.user in method.all():
                method.remove(request.user)
                
        goal.difficult_vote.add(request.user)
        goal.save()

        channel_layer = get_channel_layer()

        user_to_send_notifications = [goal.project.admin]
        for u in goal.project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a voté qu'il est un peu difficile d'atteindre l'objectif '{goal.title}'."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = message
                new_notif.time = tz.now()
                new_notif.icon = 'fa fa-thumbs-up'
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'icon': new_notif.icon,
                    'text': new_notif.text,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )


        all_user = [goal.project.admin]

        for u in goal.project.members.all():
            all_user.append(u)

        for user in all_user:
            total_effect = 1 + goal.project.members.count()

            easy_total = goal.facile_vote.count()
            easy_progression = 0 if easy_total == 0 else (easy_total / total_effect ) * 100

            diffucult_total = goal.difficult_vote.count()
            diffucult_progression = 0 if diffucult_total == 0 else (diffucult_total / total_effect ) * 100

            not_vote_total = goal.none_vote.count()
            not_vote_progression = 0 if not_vote_total == 0 else (not_vote_total / total_effect ) * 100

            impossible_total = goal.impossible_vote.count()
            impossible_progression = 0 if impossible_total == 0 else (impossible_total / total_effect ) * 100


            message_data = {
                'id': goal.pk,
                'action': 'vote_updated',
                'total': total_effect,
                'easy_total': easy_total,
                'easy_progression': easy_progression,
                'difficult_total': diffucult_total,
                'difficult_progression': diffucult_progression,
                'impossible_total': impossible_total,
                'impossible_progression': impossible_progression,
                'not_vote_total': not_vote_total,
                'not_vote_progression': not_vote_progression,
            }


            async_to_sync(channel_layer.group_send)(
                f'obj_{str(user.pk)}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )

        return JsonResponse({
            'success': True,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def vote_impossible(request):
    if request.method == 'POST':
        id = request.POST.get('id')

        goal = Goal.objects.get(pk=int(id))  
        objs = [
            goal.facile_vote, 
            goal.difficult_vote, 
            goal.impossible_vote,
            goal.none_vote,
        ]

        for method in objs:
            if request.user in method.all():
                method.remove(request.user)
                
        goal.impossible_vote.add(request.user)
        goal.save()


        channel_layer = get_channel_layer()

        user_to_send_notifications = [goal.project.admin]
        for u in goal.project.members.all():
            user_to_send_notifications.append(u)

        for us in user_to_send_notifications:
            if us != request.user:
                message = f"{request.user.last_name} {request.user.first_name} a voté qu'il est impossible d'atteindre l'objectif '{goal.title}'."
                new_notif = Notification()
                new_notif.user = us
                new_notif.notification_code = '000'
                new_notif.text = message
                new_notif.icon = 'fa fa-thumbs-down'
                new_notif.time = tz.now()
                new_notif.save()

                new = {
                    'id': new_notif.pk,
                    'datetime': str(new_notif.time),
                    'icon': new_notif.icon,
                    'text': new_notif.text,
                }
                
                async_to_sync(channel_layer.group_send)(
                f'notification_for_{str(us.pk)}',
                    {
                        'type': 'send_message',
                        'data': new,
                    }
                )

        all_user = [goal.project.admin]

        for u in goal.project.members.all():
            all_user.append(u)

        for user in all_user:
            total_effect = 1 + goal.project.members.count()

            easy_total = goal.facile_vote.count()
            easy_progression = 0 if easy_total == 0 else (easy_total / total_effect ) * 100

            diffucult_total = goal.difficult_vote.count()
            diffucult_progression = 0 if diffucult_total == 0 else (diffucult_total / total_effect ) * 100

            not_vote_total = goal.none_vote.count()
            not_vote_progression = 0 if not_vote_total == 0 else (not_vote_total / total_effect ) * 100

            impossible_total = goal.impossible_vote.count()
            impossible_progression = 0 if impossible_total == 0 else (impossible_total / total_effect ) * 100


            message_data = {
                'id': goal.pk,
                'action': 'vote_updated',
                'total': total_effect,
                'easy_total': easy_total,
                'easy_progression': easy_progression,
                'difficult_total': diffucult_total,
                'difficult_progression': diffucult_progression,
                'impossible_total': impossible_total,
                'impossible_progression': impossible_progression,
                'not_vote_total': not_vote_total,
                'not_vote_progression': not_vote_progression,
            }


            async_to_sync(channel_layer.group_send)(
                f'obj_{str(user.pk)}',
                {
                    'type': 'send_message',
                    'data': message_data,
                }
            )

        return JsonResponse({
            'success': True,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def delete_perso_task(request):
    if request.method == 'POST':
        id = request.POST.get('id')
        perso = PersonalTask.objects.get(pk=int(id))

        perso.delete()

        return JsonResponse({
            'success': True,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)
    

@login_required
def done_perso_task(request):
    if request.method == 'POST':
        id = request.POST.get('id')
        perso = PersonalTask.objects.get(pk=int(id))

        perso.status = 'Terminé'
        perso.save()

        return JsonResponse({
            'success': True,
        })

    else:
        return JsonResponse({
            'error': True,
        }, status=405)



@login_required
def send_invoice_email(request):
    if request.method == 'POST':
        id = request.POST.get('id')
        file = request.FILES.get("pdf")

        invoice = Invoice.objects.get(invoice_id=id)

        file_path = f'temp/{file.name}'
        os.makedirs('temp/', exist_ok=True)

        with open(file_path, 'wb') as f:
            for chunk in file.chunks():
                f.write(chunk)

        
        email = EmailMessage(
            subject=f'Facture de votre projet {invoice.project.name}',
            body=f"Bonjour,\nPour la réalisation de votre projet sur Gestion de projet, veuillez trouver ci-dessous votre facture en pièce jointe.\nMerci beaucoup pour vous confiance!\nCordialement,\n\n\nL'équipe de Gestion de projet.",
            from_email=settings.EMAIL_HOST_USER,
            to=[invoice.client_email]
        )

        email.attach_file(file_path)
        
        try:
            email.send()
            os.remove(file_path)
            return JsonResponse({
                'success': True,
            })
        
        except Exception as e:
            return JsonResponse({
                'error': str(e),
            }, status=500)
        
    else:
        return JsonResponse({
            'error': True,
        }, status=405)


