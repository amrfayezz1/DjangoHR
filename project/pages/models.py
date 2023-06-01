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

    ID = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=15)
    Remaining_vacation_days = models.IntegerField(default=30)
    Approved_vacation_days = models.IntegerField(default=0)
    Email = models.EmailField(max_length=254)
    Address = models.CharField(max_length=100)
    Phone = models.CharField(max_length=11)
    Salary = models.CharField(max_length=20)
    Date_of_birth = models.DateField(null=True)
    Gender = models.CharField(max_length=6, choices=GENDER_CHOICES, null=True)
    Marital_status = models.CharField(
        max_length=10, choices=MARITAL_STATUS_CHOICES)

    objects = models.Manager()

    def __str__(self):
        return str(self.ID)


class Vacation(models.Model):
    Employee_ID = models.ForeignKey(Employee, on_delete=models.CASCADE)
    Name = models.CharField(max_length=15)
    From = models.DateField()
    To = models.DateField()
    Reason = models.TextField()
    Status = models.TextField(default='Submitted')

    def __str__(self):
        return self.Name


class Admin(models.Model):
    Username = models.CharField(max_length=25)
    Password = models.CharField(max_length=25)

    def __str__(self):
        return self.Username
