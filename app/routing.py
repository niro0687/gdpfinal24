
from django.urls import path
from . import consumer

websocket_urlpatterns = [
    path("ws/notification/", consumer.NotificationConsumer.as_asgi()),
    path("ws/project_list/", consumer.ProjectListConsumer.as_asgi()),
    path("ws/sync_conversation/<str:room_name>/", consumer.SyncConversationListConsumer.as_asgi()),
    path('ws/chat/<str:room_name>/', consumer.GetConversationMessagesConsumer.as_asgi()),
    path("ws/my_personal_task/<str:room_name>/", consumer.MyPersonalTaskConsumer.as_asgi()),
    path('ws/finance/', consumer.FinanceConsumer.as_asgi()),
    path('ws/rapport/<str:room_name>/', consumer.MyRapportConsumer.as_asgi()),
    path('ws/portfolio/<str:room_name>/', consumer.MyPortfolioConsumer.as_asgi()),
    path('ws/obj/<str:room_name>/', consumer.MyObjConsumer.as_asgi()),
    path('ws/section_sync/<str:room_name>/', consumer.SyncSection.as_asgi()),
    path('ws/sync_project_home/', consumer.SyncProjectHome.as_asgi()),
]