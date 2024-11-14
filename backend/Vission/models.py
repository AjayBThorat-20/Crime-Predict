from django.db import models

# Create your models here.

# Vission Info
class Vission(models.Model):
    VissionId = models.AutoField(primary_key=True)
    VissionInfo = models.CharField(max_length=999999999999999)


# Vission Bg
class VissionBg(models.Model):
    VissionBgId = models.AutoField(primary_key=True)
    VissionBgPhoto = models.CharField(max_length=100)