from django.shortcuts import render
from .models import Employee, Vacation, Admin
from django.shortcuts import redirect
from django.utils import timezone

# Create your views here.


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
        return render(request, 'pages/add.html')
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
            print(data)
            data.save()
            return home(request)
    else:
        return redirect('login')


def vacApprove(request, id):

    if 'username' in request.session and not request.session['username'] == '':
        vac = Vacation.objects.select_related(
            'Employee_ID').get(Employee_ID=id)
        print(vac.Employee_ID.Name)
        vac.Status = "Approved"
        start_date = timezone.make_aware(vac.From)
        end_date = timezone.make_aware(vac.To)
        number_of_days = start_date - end_date
        vac.Employee_ID.Approved_vacation_days += number_of_days
        vac.delete()
        vac.save()
        return redirect('home')

    else:
        return redirect('login')
