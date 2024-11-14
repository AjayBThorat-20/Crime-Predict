from django.db import models

# Create your models here.
from django.db import models

# About PKID

class AbtPKID(models.Model):
    Abt_PKID_Id = models.AutoField(primary_key=True)
    Abt_PKID_Title = models.CharField(max_length=50000)
    Abt_PKID_Img = models.CharField(max_length=50000)
    Abt_PKID_Des = models.CharField(max_length=99999999999999999)


# Analysis PKID

class AnPKID(models.Model):
    An_PKID_Id = models.AutoField(primary_key=True)
    An_PKID_Title = models.CharField(max_length=50000)
    An_PKID_Img = models.CharField(max_length=50000)
    An_PKID_Des = models.CharField(max_length=99999999999999999)