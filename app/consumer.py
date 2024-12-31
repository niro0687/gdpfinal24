
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import *
from channels.db import database_sync_to_async



class SyncProjectHome(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_group_name = f'sync_project_home_{self.user.pk}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )


    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'data': text_data_json,
            }
        )

    async def send_message(self, event):
        data = event["data"]
        await self.send(text_data=json.dumps(data))
    

class SyncSection(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'section_sync_{self.room_name}_{self.user.pk}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )


    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'data': text_data_json,
            }
        )


    async def send_message(self, event):
        data = event["data"]
        await self.send(text_data=json.dumps(data))
    



class MyObjConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'obj_{self.room_name}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        to_return = await self.get_obj()

        await self.send(text_data=json.dumps(to_return))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'data': text_data_json,
            }
        )

    async def send_message(self, event):
        data = event["data"]
        await self.send(text_data=json.dumps(data))


    @database_sync_to_async
    def get_obj(self):

        all_projects = []
        all_id = []


        to_return = []

        for my_project in self.user.my_projects.all():
            if my_project.pk not in all_id:
                all_projects.append(my_project)
                all_id.append(my_project.pk)


        for re_project in self.user.my_related_projects.all():
             if re_project.pk not in all_id:
                all_projects.append(re_project)
                all_id.append(re_project.pk)

        all_objs = []

        for pro in all_projects:
            for obj in pro.goals.all():
                all_objs.append(obj)




        for o in all_objs:
            pro_photo = None
            try:
                pro_photo = o.project.photo.url
            except:
                pro_photo = None

            done = True
            progression = None

            for sec in o.project.sections.all():
                for ta in sec.tasks.all():
                    if ta.status == 'En cours' or ta.status == 'En attente' or ta.status == 'Arret':
                        done = False
                        break
            

            if done:
                progression = 100
            else:
                total = 0
                total_done = 0
                for sec in o.project.sections.all():
                    for ta in sec.tasks.all():
                        total += 1

                    total_done += len(sec.tasks.filter(status__icontains='Terminé'))

                progression = (total_done / total) * 100

            total_effect = 1 + o.project.members.count()

            easy_total = o.facile_vote.count()
            easy_progression = 0 if easy_total == 0 else (easy_total / total_effect ) * 100

            diffucult_total = o.difficult_vote.count()
            diffucult_progression = 0 if diffucult_total == 0 else (diffucult_total / total_effect ) * 100

            not_vote_total = o.none_vote.count()
            not_vote_progression = 0 if not_vote_total == 0 else (not_vote_total / total_effect ) * 100

            impossible_total = o.impossible_vote.count()
            impossible_progression = 0 if impossible_total == 0 else (impossible_total / total_effect ) * 100

            to_return.append({
                'id': o.pk,
                'action': "none",
                'title': o.title,
                'description': o.description,
                'date': str(o.date),
                'progression': progression,
                'status': 'Terminé' if done else 'En cours',
                'project': {
                    'id': o.project.pk,
                    'name': o.project.name,
                    'photo': pro_photo,
                },
                'total': total_effect,
                'easy_total': easy_total,
                'easy_progression': easy_progression,
                'difficult_total': diffucult_total,
                'difficult_progression': diffucult_progression,
                'impossible_total': impossible_total,
                'impossible_progression': impossible_progression,
                'not_vote_total': not_vote_total,
                'not_vote_progression': not_vote_progression,
            })

        return to_return
        

class MyPortfolioConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'portfolio_{self.room_name}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        to_return = await self.get_portfolio()

        await self.send(text_data=json.dumps(to_return))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'data': text_data_json,
            }
        )

    async def send_message(self, event):
        data = event["data"]
        await self.send(text_data=json.dumps(data))
        
    @database_sync_to_async
    def get_portfolio(self):
        to_send = []

        for port in self.user.my_portfolios.all():
            
            projects = []

            for pro in port.projects.all():
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
                
                
                projects.append({
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

            to_send.append({
                'id': port.pk,
                'title': port.title,
                'description': port.description,
                'datetime': str(port.datetime),
                'projects': projects,
            })
        return to_send



class MyRapportConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'rapport_{self.room_name}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        to_return = await self.get_repports()

        await self.send(text_data=json.dumps(to_return))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'data': text_data_json,
            }
        )

    async def send_message(self, event):
        data = event["data"]
        await self.send(text_data=json.dumps(data))
        
    @database_sync_to_async
    def get_repports(self):
        to_send = []

        for repport in self.user.my_rapports.all():
            tasks = []
            for section in repport.project.sections.all():
                for task in section.tasks.all():
                    user_photo = None
                    try:
                        user_photo = task.owner_task.info.photo.url
                    except:
                        user_photo = None
                    t = {
                        'id': task.pk,
                        'name': task.name,
                        'deadline': task.deadline,
                        'endDate': str(task.end_date),
                        'startDate': str(task.begin_date),
                        'status': task.status,
                        'user': {
                            'id': task.owner_task.pk,
                            'lastName': task.owner_task.last_name,
                            'firstName': task.owner_task.first_name,
                            'photo': user_photo,
                        }
                    }
                    tasks.append(t)

            to_send.append({
                'id': repport.pk,
                'description': repport.description,
                'datetime': str(repport.datetime),
                'project': {
                    'id': repport.project.pk,
                    'name': repport.project.name,
                    'tasks': tasks,
                }
            })
        return to_send

class MyPersonalTaskConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.user = self.scope['user']
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'personal_task_{self.room_name}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        to_return = await self.get_tasks()

        await self.send(text_data=json.dumps(to_return))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'data': text_data_json,
            }
        )

    async def send_message(self, event):
        data = event["data"]
        await self.send(text_data=json.dumps(data))

    @database_sync_to_async
    def get_tasks(self):
        all_tasks = []
        
        for t in self.user.my_personal_task.all():
            ta = {
                'id': t.pk,
                'title': t.title,
                'startDate': str(t.begin_date),
                'endDate': str(t.end_date),
                'description': t.description,
                'deadline': t.deadline,
                'status': t.status,
            }
            all_tasks.append(ta)

        return all_tasks



class ProjectListConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = f'project_list_update_{str(self.user.pk)}'

        await self.channel_layer.group_add(
            self.room_name,
            self.channel_name,
        )
        await self.accept()

        p_list = await self.get_project_list(self.user)
        
        to_return = []

        for l in p_list:
            project_photo = None
            admin_photo = None
            admin = None
            info = None

            try:
                project_photo = l.photo.url
            except:
                project_photo = None

            try:
                admin = await self.get_admin(l)
                info = await self.get_user_info(admin)

                admin_photo = info.photo.url
            except:
                admin_photo = None

            members = []

            mems = await self.get_member(l)

            for member in mems:
                m_photo = None
                member_info = None
                try:
                    member_info = await self.get_user_info(member)
                    m_photo = member_info.photo.url
                except:
                    m_photo = None

                m = {
                    'id': member.pk,
                    'lastName': member.last_name,
                    'firstName': member.first_name,
                    'email': member.email,
                    'photo': m_photo
                }

                members.append(m)

            to_return.append({
                'id': str(l.pk),
                'name': l.name,
                'photo': project_photo,
                'action': 'sync',
                'admin': {
                    'firstName': admin.first_name,
                    'lastName': admin.last_name,
                    'email': admin.email,
                    'id': str(admin.pk),
                    'photo': admin_photo,
                },
                'members': members,
            })

        await self.send(text_data=json.dumps(to_return))


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_name,
            self.channel_name
        )

    @database_sync_to_async
    def get_user_info(self, a):
        return a.info
    
    @database_sync_to_async
    def get_admin(self, l):
        return l.admin

    @database_sync_to_async
    def get_member(self, project):
        return [member for member in project.members.all()]
    

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_name,
            {
                'type': 'send_message',
                'data': text_data_json,
            }
        )

    async def send_message(self, event):
        data = event["data"]
        
        await self.send(text_data=json.dumps(data))


    @database_sync_to_async
    def get_project_list(self, user):
        project_assigned = None
        my_projects = None
        
        all_project = []
        my_projects = user.my_projects.all()
        project_assigned = user.my_related_projects.all()
        
        for p in my_projects:
            all_project.append(p)

        for r in project_assigned:
            if r not in all_project:
                all_project.append(r)

        return all_project


class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = f'notification_for_{str(self.user.pk)}'

        await self.channel_layer.group_add(
            self.room_name,
            self.channel_name
        )

        await self.accept()

        notifs = await self.get_all_notif(self.user)

        to_return = []

        for no in notifs:
            n = {
                'id': no.pk,
                'text': no.text,
                'icon': no.icon,
                'datetime': str(no.time)
            }
            to_return.append(n)

        await self.send(text_data=json.dumps(to_return))


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.load(text_data)
        data = text_data_json['data']

        await self.channel_layer.group_send(
            self.room_name,
            {
                'type': 'send_message',
                'data': data
            }
        )

    async def send_message(self, event):
        notification = event["data"]

        await self.send(text_data=json.dumps(notification))


    @database_sync_to_async
    def get_all_notif(self, user):
        return [notif for notif in user.my_notifications.all().order_by('-pk')]
    


class SyncConversationListConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'conversation_list_for_{str(self.user.pk)}_{self.room_name}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        room_list = await self.getRoomList(self.user, self.room_name)

        to_send = []

        for room in room_list:
            chat_with = await self.get_user(room, self.user)
            info = await self.get_user_info(chat_with)
            
            photo = None

            try:
                photo = info.photo.url

            except:
                photo = None


            last_message2 = None
            last_message = await self.getLastMessage(room)
            
            if last_message is not None:
                if last_message.type == 'text':
                    get_message_owner = await self.get_message_owner(last_message)
                    
                    last_message2 = {
                        'id': last_message.pk,
                        'text': last_message.text,
                        'status': last_message.status,
                        'isMyMessage': get_message_owner,
                        'datetime': str(last_message.sent_date),
                    }

                elif last_message.type == 'image':
                    get_message_owner = await self.get_message_owner(last_message)
                    
                    last_message2 = {
                        'id': last_message.pk,
                        'image': last_message.image.url,
                        'status': last_message.status,
                        'isMyMessage': get_message_owner,
                        'datetime': str(last_message.sent_date),
                    }

                elif last_message.type == 'audio':
                    get_message_owner = await self.get_message_owner(last_message)
                    
                    last_message2 = {
                        'id': last_message.pk,
                        'audio': last_message.audio.url,
                        'status': last_message.status,
                        'isMyMessage': get_message_owner,
                        'datetime': str(last_message.sent_date),
                    }

                elif last_message.type == 'file':
                    get_message_owner = await self.get_message_owner(last_message)
                    
                    last_message2 = {
                        'id': last_message.pk,
                        'file': str(last_message.another_file.name).split('/')[1],
                        'status': last_message.status,
                        'isMyMessage': get_message_owner,
                        'datetime': str(last_message.sent_date),
                    }
                
                elif last_message.type == 'video':
                    get_message_owner = await self.get_message_owner(last_message)
                    
                    last_message2 = {
                        'id': last_message.pk,
                        'video': last_message.video.url,
                        'status': last_message.status,
                        'isMyMessage': get_message_owner,
                        'datetime': str(last_message.sent_date),
                    }
            else:
                last_message2 = None    

            if room.room_type == 'private':
                to_send.append({
                    'id': room.pk,
                    'crypted_id': room.cripted_id,
                    'type': room.room_type,
                    'user': {
                        'id': chat_with.pk,
                        'lastName': chat_with.last_name,
                        'firstName': chat_with.first_name,
                        'photo': photo
                    },
                    'lastMessage': last_message2,
                })
            else:
                to_send.append({
                    'id': room.pk,
                    'crypted_id': room.cripted_id,
                    'name': room.name,
                    'type': room.room_type,
                    'photo': None,
                    'empty': True if last_message2 is None else False,
                    'lastMessage': last_message2,
                })
        
        
        await self.send(text_data=json.dumps(to_send))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data=None):
        text_data_json = json.load(text_data)
        data = text_data_json['data']

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'data': data
            }
        )

    async def send_message(self, event):
        message = event['data']
        await self.send(text_data=json.dumps(message))
        

    @database_sync_to_async
    def getRoomList(self, user, project_id):
        all_room = [room for room in user.my_rooms.all()]
        project = Project.objects.get(pk=int(project_id))

        to_return = []

        for r in all_room:
            if project in r.project_chat_rooms.all():
                messages = r.messages.exclude(deleted_for=self.user)
                if len(messages) != 0:
                    to_return.append(r)

        return to_return



    
    @database_sync_to_async
    def get_user(self, room, auth_user):
        
        user = None

        for u in room.users.all():
            if u.pk != auth_user.pk:
                user = u
                break

        return user

    @database_sync_to_async
    def get_user_info(self, user):
        return user.info
    
    @database_sync_to_async
    def getLastMessage(self, room):
        last = room.messages.all().order_by('-sent_date')[:1]
        if len(last) == 0:
            return None
        return last[0]
    

    @database_sync_to_async
    def get_message_owner(self, message):
        if (message.sender.pk == self.user.pk):
            return True
        else:
            return False
        

    
class GetConversationMessagesConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        
        self.room_group_name = f'chat_{self.room_name}_{str(self.user.pk)}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

        messages = await self.getMessages(self.room_name)
        
        await self.send(text_data=json.dumps(messages))


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.load(text_data)
        data = text_data_json['data']

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'data': data
            }
        )


    async def send_message(self, event):
        message = event['data']
        await self.send(text_data=json.dumps(message))


    @database_sync_to_async
    def getMessages(self, room):
        messages = []
        room = ChatRoom.objects.get(cripted_id=room)

        all_messages = []

        my_objs = room.messages.exclude(deleted_for=self.user)

        for m in my_objs.order_by('-pk')[:50]:
            all_messages.insert(0, m)


        for message in all_messages:
            if message.type == 'text':
                mine = True if message.sender.pk == self.user.pk else False
                if message.sender.pk == self.user.pk:
                    messages.append({
                        'id': message.pk,
                        'type': 'text',
                        'text': message.text,
                        'showDate': message.show_date,
                        'isMyMessage': mine,
                        'status': message.status,
                        'timestamp': message.timestamp,
                        'datetime': str(message.sent_date),
                    })
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None

                    messages.append({
                        'id': message.pk,
                        'type': 'text',
                        'text': message.text,
                        'showDate': message.show_date,
                        'isMyMessage': mine,
                        'timestamp': message.timestamp,
                        'status': message.status,
                        'datetime': str(message.sent_date),
                        'user': {
                            'id': message.sender.pk,
                            'firstName': message.sender.first_name,
                            'lastName': message.sender.last_name,
                            'photo': photo
                        }
                    })

            elif message.type == 'image':
                mine = True if message.sender.pk == self.user.pk else False
                if message.sender.pk == self.user.pk:
                    messages.append({
                        'id': message.pk,
                        'type': 'image',
                        'image': message.image.url,
                        'showDate': message.show_date,
                        'isMyMessage': mine,
                        'status': message.status,
                        'timestamp': message.timestamp,
                        'datetime': str(message.sent_date),
                    })
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None

                    messages.append({
                        'id': message.pk,
                        'type': 'image',
                        'image': message.image.url,
                        'showDate': message.show_date,
                        'isMyMessage': mine,
                        'timestamp': message.timestamp,
                        'status': message.status,
                        'datetime': str(message.sent_date),
                        'user': {
                            'id': message.sender.pk,
                            'firstName': message.sender.first_name,
                            'lastName': message.sender.last_name,
                            'photo': photo
                        }
                    })


            elif message.type == 'audio':
                mine = True if message.sender.pk == self.user.pk else False
                if message.sender.pk == self.user.pk:
                    messages.append({
                        'id': message.pk,
                        'type': 'audio',
                        'audio': message.audio.url,
                        'showDate': message.show_date,
                        'isMyMessage': mine,
                        'status': message.status,
                        'timestamp': message.timestamp,
                        'datetime': str(message.sent_date),
                    })
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None

                    messages.append({
                        'id': message.pk,
                        'type': 'audio',
                        'audio': message.audio.url,
                        'isMyMessage': mine,
                        'timestamp': message.timestamp,
                        'showDate': message.show_date,
                        'status': message.status,
                        'datetime': str(message.sent_date),
                        'user': {
                            'id': message.sender.pk,
                            'firstName': message.sender.first_name,
                            'lastName': message.sender.last_name,
                            'photo': photo
                        }
                    })
                
            elif message.type == 'video':
                mine = True if message.sender.pk == self.user.pk else False
                if message.sender.pk == self.user.pk:
                    messages.append({
                        'id': message.pk,
                        'type': 'video',
                        'video': message.video.url,
                        'isMyMessage': mine,
                        'poster': '',
                        'showDate': message.show_date,
                        'status': message.status,
                        'timestamp': message.timestamp,
                        'datetime': str(message.sent_date),
                    })
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None

                    messages.append({
                        'id': message.pk,
                        'type': 'video',
                        'video': message.video.url,
                        'isMyMessage': mine,
                        'poster': '',
                        'showDate': message.show_date,
                        'timestamp': message.timestamp,
                        'status': message.status,
                        'datetime': str(message.sent_date),
                        'user': {
                            'id': message.sender.pk,
                            'firstName': message.sender.first_name,
                            'lastName': message.sender.last_name,
                            'photo': photo
                        }
                    })

            elif message.type == 'file':
                mine = True if message.sender.pk == self.user.pk else False
                if message.sender.pk == self.user.pk:
                    messages.append({
                        'id': message.pk,
                        'type': 'file',
                        'file': message.another_file.name.split('/')[1],
                        'realFileURL': message.another_file.url,
                        'isMyMessage': mine,
                        'showDate': message.show_date,
                        'status': message.status,
                        'timestamp': message.timestamp,
                        'datetime': str(message.sent_date),
                    })
                else:
                    photo = None
                    try:
                        photo = message.sender.info.photo.url
                    except:
                        photo = None

                    messages.append({
                        'id': message.pk,
                        'type': 'file',
                        'file': message.another_file.name.split('/')[1],
                        'realFileURL': message.another_file.url,
                        'isMyMessage': mine,
                        'showDate': message.show_date,
                        'timestamp': message.timestamp,
                        'status': message.status,
                        'datetime': str(message.sent_date),
                        'user': {
                            'id': message.sender.pk,
                            'firstName': message.sender.first_name,
                            'lastName': message.sender.last_name,
                            'photo': photo
                        }
                    })

        return messages


class FinanceConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        self.room_name = self.user.pk
        self.room_group_name = f'finance_{self.room_name}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        messages = await self.get_finance()
        
        await self.send(text_data=json.dumps(messages))


    
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    
    async def send_message(self, event):
        message = event['data']
        await self.send(text_data=json.dumps(message))

    
    @database_sync_to_async
    def get_finance(self):

        to_send = []
        all_facture = []
        all_charge = []


        for facture in self.user.my_invoices.all():
            project_photo = None
            try:
                project_photo = facture.project.photo.url
            except:
                project_photo = None
            f = {
                'id': facture.invoice_id,
                'client': {
                    'name': facture.client_name,
                    'email': facture.client_email,
                    'number': facture.client_number,
                },
                'project': {
                    'id': facture.project.pk,
                    'name': facture.project.name,
                    'photo': project_photo,
                },
                'amount': int(facture.amount),
                'paid': facture.paid,
                'date': str(facture.time),
            }
            all_facture.append(f)

        for cha in self.user.my_charge_finances.all():
            c = {
                'id': cha.pk,
                'titre': cha.title,
                'description': cha.description,
                'montant': int(cha.amount),
                'date': str(cha.date),
                'projetLie': cha.activity_or_project
            }
            all_charge.append(c)


        to_send.append(all_facture)
        to_send.append(all_charge)


        return to_send

            
