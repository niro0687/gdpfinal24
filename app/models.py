from django.db import models
from django.utils import timezone as tz
from django.contrib.auth.models import User
from decimal import Decimal
import hashlib

# Create your models here.


class PersonalNote(models.Model):
    title = models.CharField(max_length=500)
    content = models.TextField()
    last_modified = models.DateTimeField(null=False, default=tz.now)
    owner_notes = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_personal_notes')

class PersonalTask(models.Model):
    user = models.ForeignKey(User, related_name='my_personal_task', on_delete=models.SET_NULL, default=None, null=True)
    title = models.CharField(max_length=500)
    description = models.TextField()
    deadline = models.PositiveIntegerField(default=1)
    begin_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=20)


class WebSiteLifeToken(models.Model):
    allow = models.BooleanField(default=True, null=False)

class Comment(models.Model):
    text = models.TextField()
    date_comment = models.DateTimeField(default=tz.now)
    owner_comment = models.ForeignKey(User, on_delete=models.CASCADE, related_name="my_comments")


class ProjectFile(models.Model):
    size = models.CharField(max_length=100)
    description = models.TextField()
    file = models.FileField(upload_to="project_file/")
    owner_files = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_project_files')
    datetime_created = models.DateTimeField(default=tz.now)


class ProjectNote(models.Model):
    title = models.CharField(max_length=500)
    content = models.TextField()
    last_modified = models.DateTimeField(null=False)
    owner_note = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_project_notes')




class Task(models.Model):
    owner_task = models.ForeignKey(User, on_delete=models.CASCADE, related_name="my_tasks")
    name = models.CharField(max_length=100)
    comments = models.ManyToManyField(Comment)
    description = models.TextField()
    begin_date = models.DateField(null=False)
    end_date = models.DateField(null=False)
    status = models.CharField(max_length=20)
    datetime_created = models.DateTimeField(default=tz.now)
    deadline = models.IntegerField(default=1, null=False)


class Section(models.Model):
    name = models.CharField(max_length=100)
    date_created = models.DateTimeField(default=tz.now)
    tasks = models.ManyToManyField(Task, related_name='sections')



class Message(models.Model):
    type = models.CharField(max_length=20)
    timestamp = models.IntegerField(null=False, default=123456789)
    text = models.TextField(null=True)
    show_date = models.BooleanField(default=True)
    size = models.BigIntegerField(null=True, default=None)
    human_size = models.CharField(max_length=20, null=True, default=None)
    video = models.FileField(upload_to="message_video/", null=True)
    video_poster = models.ImageField(upload_to="video_posters", null=True, blank=True)
    audio = models.FileField(upload_to='message_audio/', null=True)
    another_file = models.FileField(upload_to='message_another_files/', null=True)
    image = models.ImageField(upload_to="message_images/", null=True)
    sent_date = models.DateTimeField(default=tz.now)
    status = models.CharField(max_length=20, null=False)
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_messages')
    extension = models.CharField(max_length=10, null=True, default=None)
    deleted_for = models.ManyToManyField(User, related_name='my_message_deleted')


class ChatRoom(models.Model):
    cripted_id = models.CharField(max_length=300)
    room_type = models.CharField(max_length=20)
    name = models.CharField(max_length=200, default=None, null=True)
    users = models.ManyToManyField(User, related_name='my_rooms')
    messages = models.ManyToManyField(Message)
    last_updated = models.DateTimeField(default=tz.now)

class Client(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    number = models.CharField(max_length=15)
    email = models.EmailField(max_length=100)


class Project(models.Model):
    admin = models.ForeignKey(User, on_delete=models.CASCADE, related_name="my_projects")
    photo = models.ImageField(null=True, upload_to='project_profile/')
    name = models.CharField(max_length=100)
    project_key = models.CharField(default='', null=False, max_length=200)
    members = models.ManyToManyField(User, related_name='my_related_projects')
    date_created = models.DateTimeField(default=tz.now)
    sections = models.ManyToManyField(Section, related_name='projects')
    files = models.ManyToManyField(ProjectFile)
    notes = models.ManyToManyField(ProjectNote)
    chat_rooms = models.ManyToManyField(ChatRoom, related_name='project_chat_rooms')
    client = models.ForeignKey(Client, on_delete=models.SET_NULL, null=True)
    datetime_created = models.DateTimeField(default=tz.now)

    def __str__(self):
        chaine = str(self.pk) + ': ' + self.name 
        return chaine
    
    def generate_key(self):
        code = f'project_{self.name}_{self.pk}'
        self.project_key = hashlib.md5(code.encode()).hexdigest()
        
        

class UserSecondInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='info')
    photo = models.ImageField(upload_to='user_profile_picture/', null=True)
    jobTitle = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    init_code = models.PositiveBigIntegerField(default=None, null=True)

    def __str__(self):
        chaine = str(self.user.pk) + ': ' + self.user.last_name
        return chaine


class Notification(models.Model):
    user = models.ForeignKey(User, related_name='my_notifications', on_delete=models.CASCADE, null=True)
    notification_code = models.CharField(max_length=200)
    time = models.DateTimeField(default=tz.now)
    icon = models.CharField(max_length=30, null=True, default="fa fa-rocket")
    text = models.TextField()
    status = models.CharField(max_length=100, default='sent')


class Invoice(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_invoices')
    invoice_id = models.CharField(max_length=100)
    client_name = models.CharField(max_length=100)
    client_address = models.CharField(max_length=100)
    client_number = models.CharField(max_length=15)
    client_email = models.EmailField(max_length=100)
    time = models.DateField(default=tz.now)
    paid = models.BooleanField()
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, related_name="project_invoices", null=True)
    amount = models.DecimalField(max_digits=8, decimal_places=2, default=Decimal('0.00'), null=False)
    sent = models.BooleanField(default=False)
    datetime_created = models.DateTimeField(default=tz.now)



class ChargeFinance(models.Model):
    description = models.TextField()
    date = models.DateField()
    amount = models.DecimalField(max_digits=8, decimal_places=2, default=Decimal('0.00'), null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_charge_finances')
    title = models.CharField(max_length=200)
    datetime_created = models.DateTimeField(default=tz.now)
    activity_or_project = models.CharField(max_length=300, null=False, default='')



class Portfolio(models.Model):
    user = models.ForeignKey(User, related_name='my_portfolios', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    projects = models.ManyToManyField(Project, related_name='portfolios')
    datetime = models.DateTimeField(default=tz.now)



class Rapport(models.Model):
    user = models.ForeignKey(User, related_name='my_rapports', on_delete=models.CASCADE)
    description = models.TextField()
    project = models.ForeignKey(Project, related_name='rapports', on_delete=models.CASCADE)
    datetime = models.DateTimeField(default=tz.now)
    

class Goal(models.Model):
    user = models.ForeignKey(User, related_name='my_goals', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    project = models.ForeignKey(Project, related_name='goals', on_delete=models.CASCADE)
    datetime = models.DateTimeField(default=tz.now)
    facile_vote = models.ManyToManyField(User, related_name='facile_votes')
    impossible_vote = models.ManyToManyField(User, related_name='impossible_votes')
    difficult_vote = models.ManyToManyField(User, related_name='difficult_votes')
    none_vote = models.ManyToManyField(User, related_name='none_votes')