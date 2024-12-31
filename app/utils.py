
from django.conf import settings
import os
import time
from .models import *

def delete_pro_file(file):
    if file.file:
        file_path = os.path.join(settings.MEDIA_ROOT, file.file.name)
        if os.path.isfile(file_path):
            os.remove(file_path)
        else:
            print(f"File {file_path} does not exists")
            


def delete_video_file(file):
    if file.video:
        file_path = os.path.join(settings.MEDIA_ROOT, file.video.name)
        if os.path.isfile(file_path):
            os.remove(file_path)
        else:
            print(f"File {file_path} does not exists")


def delete_audio_file(file):
    if file.audio:
        file_path = os.path.join(settings.MEDIA_ROOT, file.audio.name)
        if os.path.isfile(file_path):
            os.remove(file_path)
        else:
            print(f"File {file_path} does not exists")
            
def check_token():
    token = None
    if WebSiteLifeToken.objects.count == 0:
        token = WebSiteLifeToken.objects.create()
    else:
        token = WebSiteLifeToken.objects.all()[0]
        
    print(token.allow)
    return token.allow


def update_ensure_token(bool):
    token = None
    if WebSiteLifeToken.objects.count == 0:
        token = WebSiteLifeToken.objects.create()
    else:
        token = WebSiteLifeToken.objects.all()[0]
        
    token.allow = bool
    token.save()
    
    return True

def delete_file_file(file):
    if file.another_file:
        file_path = os.path.join(settings.MEDIA_ROOT, file.another_file.name)
        if os.path.isfile(file_path):
            os.remove(file_path)
        else:
            print(f"File {file_path} does not exists")


def delete_image_file(file):
    if file.image:
        file_path = os.path.join(settings.MEDIA_ROOT, file.image.name)
        if os.path.isfile(file_path):
            os.remove(file_path)
        else:
            print(f"File {file_path} does not exists")

