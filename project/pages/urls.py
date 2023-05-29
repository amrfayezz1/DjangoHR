from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('add/', views.add, name='add'),
    path('edit/<int:id>/', views.edit, name='edit'),
    path('vacForm/<int:id>/', views.vacForm, name='vacForm'),
    path('vacations/', views.vacations, name='vacations'),
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),

    path('addEmp/', views.addEmp, name='addEmp'),
    path('approveVac/<int:id>/', views.approveVac, name='approveVac'),
    path('declineVac/<int:id>/', views.declineVac, name='declineVac'),
]
