from django.db import models

# Create your models here.

# class Crimes(models.Model):
#     CrimesId = models.AutoField(primary_key=True)
#     CrimesName = models.CharField(max_length=500)

class AddCrimeCard(models.Model):
    CrimeCardId = models.AutoField(primary_key=True)
    CrimeCardTitle = models.CharField(max_length=100)
    CrimeCardDes = models.CharField(max_length=8000)
    CrimeCardUrl = models.CharField(max_length=500)
    