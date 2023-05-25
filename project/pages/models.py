from django.db import models

class Employee(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]

    MARITAL_STATUS_CHOICES = [
        ('single', 'Single'),
        ('taken', 'Taken'),
        ('married', 'Married'),
        ('divorced', 'Divorced'),
        ('widowed', 'Widowed'),
    ]

    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=15)
    Email = models.EmailField(max_length=254)
    Address = models.CharField(max_length=100)
    Phone = models.CharField(max_length=11)
    Salary = models.CharField(max_length=20)
    Date_of_birth = models.DateField()
    Gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    Marital_status = models.CharField(max_length=10, choices=MARITAL_STATUS_CHOICES)

class Vacation(models.Model):
    Employee_ID = models.ForeignKey(Employee, null=True, on_delete=models.CASCADE)
    Name = models.CharField(max_length=15)
    From = models.DateField()
    To = models.DateField()
    Reason = models.TextField()