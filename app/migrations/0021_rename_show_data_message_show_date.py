# Generated by Django 5.1.3 on 2024-12-17 10:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0020_message_show_data'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='show_data',
            new_name='show_date',
        ),
    ]
