from django.db import models

# Create your models here.
from django.db import models

# About Dw SC

class AbtDwSC(models.Model):
    Abt_Dw_SC_Id = models.AutoField(primary_key=True)
    Abt_Dw_SC_Title = models.CharField(max_length=50000)
    Abt_Dw_SC_Img = models.CharField(max_length=50000)
    Abt_Dw_SC_Des = models.CharField(max_length=99999999999999999)


# Analysis DW SC

class AnDwSC(models.Model):
    An_Dw_SC_Id = models.AutoField(primary_key=True)
    An_Dw_SC_Title = models.CharField(max_length=50000)
    An_Dw_SC_Img = models.CharField(max_length=50000)
    An_Dw_SC_Des = models.CharField(max_length=99999999999999999)