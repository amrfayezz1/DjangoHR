from os import name
from django.shortcuts import render
from .models import Employee, Vacation, Admin
from django.shortcuts import redirect
from datetime import datetime
from django.http import JsonResponse

# Create your views here.
def check_id(request, id):
    # Check if the ID exists in the employees registered
    exists = Employee.objects.filter(ID=id).exists()
    return JsonResponse({'exists': exists})

def home(request):
    if 'username' in request.session and not request.session['username'] == '':
        print(request.session['username']+" logged in")
        employees = Employee.objects.all()
        context = {'employees': employees}
        return render(request, 'pages/home.html', context)
    else:
        print("no username")
        return redirect('login')


def add(request):
    if 'username' in request.session and not request.session['username'] == '':
        employees = Employee.objects.all()
        return render(request, 'pages/add.html', {'emps': employees})
    else:
        return redirect('login')


def edit(request, id):
    if 'username' in request.session and not request.session['username'] == '':
        emp = Employee.objects.get(ID=id)
        return render(request, 'pages/edit.html', {'emp': emp})
    else:
        return redirect('login')


def vacForm(request, id):
    if 'username' in request.session and not request.session['username'] == '':
        emp = Employee.objects.get(ID=id)
        return render(request, 'pages/vacForm.html', {'emp': emp})
    else:
        return redirect('login')


def vacations(request):
    if 'username' in request.session and not request.session['username'] == '':
        vacations = Vacation.objects.select_related('Employee_ID').all()
        context = {'vacations': vacations}
        return render(request, 'pages/vacations.html', context)
    else:
        return redirect('login')
    
def addvac(request,id,name):
     if 'username' in request.session and not request.session['username'] == '':
        if request.method == 'POST':
            from_date_str = request.POST['from']
            to_date_str = request.POST['to']
            from_date = datetime.strptime(from_date_str, '%Y-%m-%d').date()
            to_date = datetime.strptime(to_date_str, '%Y-%m-%d').date()
            num_of_days = (to_date - from_date).days
            employee_id = id
            employee = Employee.objects.get(ID=employee_id)
            remaining_vacation_days = employee.Remaining_vacation_days
            if from_date >= to_date:
                error_message = "Choose a valid date range."
                return render(request, 'pages/vacForm.html', {'emp': employee, 'error_message': error_message})
            elif num_of_days > remaining_vacation_days:
                error_message = "Not enough remaining vacation days."
                return render(request, 'pages/vacForm.html', {'emp': employee, 'error_message': error_message})
            else:
                data = Vacation(
                From =from_date,
                To =to_date,
                Reason=request.POST['reason'],
                Employee_ID=employee,
                Name=name
                )
                data.save()
                return redirect('home')
     else:
          return redirect('login')

def index(request):
    return render(request, 'pages/index.html')


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        try:
            Admin.objects.get(Username=username, Password=password)
            request.session['username'] = username
            return redirect('home')
        except:
            error_message = "Invalid username or password!"
            return render(request, 'pages/login.html', {'error_message': error_message})
    else:
        request.session['username'] = ""
        return render(request, 'pages/login.html')


def addEmp(request):
    if 'username' in request.session and not request.session['username'] == '':
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
            data.save()
            return home(request)
    else:
        return redirect('login')


def approveVac(request, id):
    if 'username' in request.session and not request.session['username'] == '':
        vac = Vacation.objects.select_related('Employee_ID').get(Employee_ID=id)
        vac.Status = "Approved"
        number_of_days = vac.To - vac.From
        vac.Employee_ID.Approved_vacation_days += number_of_days.days
        vac.Employee_ID.Remaining_vacation_days -= number_of_days.days
        vac.Employee_ID.save()
        vac.delete()
        return redirect('home')
    else:
        return redirect('login')
    
def declineVac(request, id):
    if 'username' in request.session and not request.session['username'] == '':
        vac = Vacation.objects.select_related('Employee_ID').get(Employee_ID=id)
        vac.delete()
        return redirect('home')
    else:
        return redirect('login')
    
def updateEmp(request, id):
    if 'username' in request.session and not request.session['username'] == '':
        if request.method == 'POST':
            emp = Employee.objects.get(ID = id)
            emp.Name = request.POST['name']
            emp.Email = request.POST['email']
            emp.Address = request.POST['address']
            emp.Phone = request.POST['phone']
            emp.Gender = request.POST['gender']
            emp.Marital_status = request.POST['marital_status']
            emp.Remaining_vacation_days = request.POST['vacation_left']
            emp.Approved_vacation_days = request.POST['vacation_approved']
            emp.Salary = request.POST['salary']
            emp.Date_of_birth = request.POST['birth']
            emp.save()
        return redirect('home')
    else:
       return redirect('login')

def deleteEmp(request, id):
    if 'username' in request.session and not request.session['username'] == '':
        emp = Employee.objects.get(ID = id)
        emp.delete()
        return redirect('home')
    else:
       return redirect('login')


