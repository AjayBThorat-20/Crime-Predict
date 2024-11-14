from django.db import models

# Create your models here.
from django.db import models

# About PA IPC

class AbtPaIPC(models.Model):
    Abt_Pa_IPC_Id = models.AutoField(primary_key=True)
    Abt_Pa_IPC_Title = models.CharField(max_length=50000)
    Abt_Pa_IPC_Img = models.CharField(max_length=50000)
    Abt_Pa_IPC_Des = models.CharField(max_length=99999999999999999)

# Analysis PA IPC

class AnPaIPC(models.Model):
    An_Pa_IPC_Id = models.AutoField(primary_key=True)
    An_Pa_IPC_Title = models.CharField(max_length=50000)
    An_Pa_IPC_Img = models.CharField(max_length=50000)
    An_Pa_IPC_Des = models.CharField(max_length=99999999999999999)
