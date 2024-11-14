from django.db import models

# Create your models here.

class Crimes(models.Model):
    CrimesId = models.AutoField(primary_key=True)
    CrimesName = models.CharField(max_length=500)

class Posts(models.Model):
    PostsId = models.AutoField(primary_key=True)
    PostsTitle = models.CharField(max_length=100)
    PostsDescription = models.CharField(max_length=8000)
    Crime = models.CharField(max_length=500)
    CrimeDate = models.DateField()
    PhotoFileName = models.CharField(max_length=100)