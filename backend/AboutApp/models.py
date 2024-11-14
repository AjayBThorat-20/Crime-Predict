from django.db import models

# Create your models here.

# About Info

class About(models.Model):
    AboutId = models.AutoField(primary_key=True)
    AboutInfo = models.CharField(max_length=999999999999999)


# About Bg
class AboutBg(models.Model):
    AboutBgId = models.AutoField(primary_key=True)
    AboutBgPhoto = models.CharField(max_length=100)