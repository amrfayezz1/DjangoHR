# Generated by Django 4.2.1 on 2023-05-24 21:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('ID', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=15)),
                ('Email', models.EmailField(max_length=254)),
                ('Address', models.CharField(max_length=100)),
                ('Phone', models.CharField(max_length=11)),
                ('Salary', models.CharField(max_length=20)),
                ('Date_of_birth', models.DateField()),
                ('Gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female')], max_length=6)),
                ('Marital_status', models.CharField(choices=[('single', 'Single'), ('taken', 'Taken'), ('married', 'Married'), ('divorced', 'Divorced'), ('widowed', 'Widowed')], max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Vacations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=15)),
                ('From', models.DateField()),
                ('To', models.DateField()),
                ('Reason', models.TextField()),
                ('Employee_ID', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pages.employee')),
            ],
        ),
    ]
