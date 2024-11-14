from django.db import models

# Create your models here.
from django.db import models

# About Dw W

class AbtDwW(models.Model):
    Abt_Dw_W_Id = models.AutoField(primary_key=True)
    Abt_Dw_W_Title = models.CharField(max_length=50000)
    Abt_Dw_W_Img = models.CharField(max_length=50000)
    Abt_Dw_W_Des = models.CharField(max_length=99999999999999999)


# Analysis DW W

class AnDwW(models.Model):
    An_Dw_W_Id = models.AutoField(primary_key=True)
    An_Dw_W_Title = models.CharField(max_length=50000)
    An_Dw_W_Img = models.CharField(max_length=50000)
    An_Dw_W_Des = models.CharField(max_length=99999999999999999)