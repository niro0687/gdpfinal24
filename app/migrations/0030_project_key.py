# Generated by Django 5.1.3 on 2024-12-26 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0029_remove_project_key'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='key',
            field=models.CharField(default='', max_length=200),
        ),
    ]
