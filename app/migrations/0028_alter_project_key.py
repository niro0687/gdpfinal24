# Generated by Django 5.1.3 on 2024-12-26 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0027_project_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='key',
            field=models.CharField(default='', max_length=200),
        ),
    ]
