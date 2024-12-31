# Generated by Django 5.1.3 on 2024-11-21 10:21

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=100)),
                ('number', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notification_code', models.CharField(max_length=200)),
                ('time', models.DateTimeField(default=django.utils.timezone.now)),
                ('text', models.TextField()),
                ('status', models.CharField(default='delivered', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='ChargeFinance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('date', models.DateField()),
                ('title', models.CharField(max_length=200)),
                ('datetime_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_charge_finances', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('date_comment', models.DateTimeField(default=django.utils.timezone.now)),
                ('owner_comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_comments', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=20)),
                ('text', models.TextField(null=True)),
                ('video', models.FileField(null=True, upload_to='message_video/')),
                ('audio', models.FileField(null=True, upload_to='message_audio/')),
                ('another_file', models.FileField(null=True, upload_to='message_another_files/')),
                ('image', models.ImageField(null=True, upload_to='message_images/')),
                ('sent_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('status', models.CharField(max_length=20)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_messages', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ChatRoom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cripted_id', models.CharField(max_length=300)),
                ('room_type', models.CharField(max_length=20)),
                ('last_updated', models.DateTimeField(default=django.utils.timezone.now)),
                ('users', models.ManyToManyField(related_name='my_rooms', to=settings.AUTH_USER_MODEL)),
                ('messages', models.ManyToManyField(to='app.message')),
            ],
        ),
        migrations.CreateModel(
            name='PersonalNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('content', models.TextField()),
                ('last_modified', models.DateTimeField(default=django.utils.timezone.now)),
                ('owner_notes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_personal_notes', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(null=True, upload_to='project_profile/')),
                ('name', models.CharField(max_length=100)),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('datetime_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_projects', to=settings.AUTH_USER_MODEL)),
                ('chat_rooms', models.ManyToManyField(to='app.chatroom')),
                ('client', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.client')),
                ('members', models.ManyToManyField(related_name='my_related_projects', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('invoice_id', models.CharField(max_length=100)),
                ('client_name', models.CharField(max_length=100)),
                ('client_address', models.CharField(max_length=100)),
                ('client_number', models.CharField(max_length=15)),
                ('client_email', models.EmailField(max_length=100)),
                ('time', models.DateTimeField(default=django.utils.timezone.now)),
                ('paid', models.BooleanField()),
                ('amount', models.DecimalField(decimal_places=3, max_digits=4)),
                ('sent', models.BooleanField(default=False)),
                ('datetime_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_invoices', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='project_invoices', to='app.project')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectFile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('file', models.FileField(upload_to='project_file/')),
                ('datetime_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('owner_files', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_project_files', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='project',
            name='files',
            field=models.ManyToManyField(to='app.projectfile'),
        ),
        migrations.CreateModel(
            name='ProjectNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('content', models.TextField()),
                ('last_modified', models.DateTimeField()),
                ('owner_note', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_project_notes', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='project',
            name='notes',
            field=models.ManyToManyField(to='app.projectnote'),
        ),
        migrations.AddField(
            model_name='project',
            name='sections',
            field=models.ManyToManyField(to='app.section'),
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('begin_date', models.DateField()),
                ('end_date', models.DateField()),
                ('status', models.CharField(max_length=20)),
                ('datetime_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('comments', models.ManyToManyField(to='app.comment')),
                ('owner_task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_tasks', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='section',
            name='tasks',
            field=models.ManyToManyField(to='app.task'),
        ),
        migrations.CreateModel(
            name='UserSecondInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to='user_profile_picture/')),
                ('jobTitle', models.CharField(max_length=200, null=True)),
                ('description', models.TextField(null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='info', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
