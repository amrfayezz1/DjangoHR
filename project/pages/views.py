from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'pages/home.html')


def add(request):
    return render(request, 'pages/add.html')


def edit(request):
    return render(request, 'pages/edit.html')


def vacForm(request):
    return render(request, 'pages/vacForm.html')


def vacations(request):
    return render(request, 'pages/vacations.html')


def index(request):
    return render(request, 'pages/index.html')


def login(request):
    return render(request, 'pages/login.html')
