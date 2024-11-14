from django.db import models

# Create your models here.
from django.db import models

# About Dw ST

class AbtDwST(models.Model):
    Abt_Dw_ST_Id = models.AutoField(primary_key=True)
    Abt_Dw_ST_Title = models.CharField(max_length=50000)
    Abt_Dw_ST_Img = models.CharField(max_length=50000)
    Abt_Dw_ST_Des = models.CharField(max_length=99999999999999999)


# Analysis DW ST

class AnDwST(models.Model):
    An_Dw_ST_Id = models.AutoField(primary_key=True)
    An_Dw_ST_Title = models.CharField(max_length=50000)
    An_Dw_ST_Img = models.CharField(max_length=50000)
    An_Dw_ST_Des = models.CharField(max_length=99999999999999999)
