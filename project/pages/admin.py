from django.contrib import admin
from .models import Vacation, Employee, Admin
admin.site.register(Employee)
admin.site.register(Vacation)
admin.site.register(Admin)

