from django.urls import path
from . import views

urlpatterns = [
    path('login/home.html/', views.home, name='home'),
    path('add/', views.add, name='add'),
    path('edit/', views.edit, name='edit'),
    path('vacForm/', views.vacForm, name='vacForm'),
    path('vacations/', views.vacations, name='vacations'),

    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
]
