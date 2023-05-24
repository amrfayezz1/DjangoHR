from django.db import models

# Create your models here.
class Vacations(models.Model):
    ID = models.ForeignKey(Employee , null = True , on_delete= models.CASCADE)
    Name = models.CharField(max_length=15)
    From = models.DateField()
    To = models.DateField()

    Reason = models.TextField()
