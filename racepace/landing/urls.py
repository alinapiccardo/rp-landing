from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    path('chat/', views.chat_page, name='chat_page'),
]