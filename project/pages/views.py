from django.shortcuts import render
from django.http import JsonResponse
from .models import Employee, Vacation
# Create your views here.


def home(request):
    employees = Employee.objects.all()
    context = {'employees': employees}
    return render(request, 'pages/home.html', context)


def add(request):
    return render(request, 'pages/add.html')


def edit(request, id):
    emp = Employee.objects.get(ID=id)
    return render(request, 'pages/edit.html', {'emp': emp})


def vacForm(request, id):
    emp = Employee.objects.get(ID=id)
    return render(request, 'pages/vacForm.html', {'emp': emp})


def vacations(request):
    vacations = Vacation.objects.select_related('Employee_ID').all()
    context = {'vacations': vacations}
    return render(request, 'pages/vacations.html', context)


def index(request):
    return render(request, 'pages/index.html')


def login(request):
    return render(request, 'pages/login.html')

def addEmp(request):
    print("I Exist!")
    if request.method == 'POST':
        data = Employee(
            ID=request.POST['id'],
            Name=request.POST['name'],
            Email=request.POST['email'],
            Address=request.POST['address'],
            Phone=request.POST['phone'],
            Salary=request.POST['salary'],
            Date_of_birth=request.POST['dob'],
            Gender=request.POST['gender'],
            Marital_status=request.POST['marital'],
        )
        print(data)
        data.save()
        return home(request)