from django.db import models

# Create your models here.
from django.db import models

# About Dw IPC

class AbtDwIPC(models.Model):
    Abt_Dw_IPC_Id = models.AutoField(primary_key=True)
    Abt_Dw_IPC_Title = models.CharField(max_length=50000)
    Abt_Dw_IPC_Img = models.CharField(max_length=50000)
    Abt_Dw_IPC_Des = models.CharField(max_length=99999999999999999)


# Analysis DW IPC

class AnDwIPC(models.Model):
    An_Dw_IPC_Id = models.AutoField(primary_key=True)
    An_Dw_IPC_Title = models.CharField(max_length=50000)
    An_Dw_IPC_Img = models.CharField(max_length=50000)
    An_Dw_IPC_Des = models.CharField(max_length=99999999999999999)