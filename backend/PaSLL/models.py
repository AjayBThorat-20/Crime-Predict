from django.db import models

# Create your models here.
from django.db import models

# About Pa SLL

class AbtPaSLL(models.Model):
    Abt_Pa_SLL_Id = models.AutoField(primary_key=True)
    Abt_Pa_SLL_Title = models.CharField(max_length=50000)
    Abt_Pa_SLL_Img = models.CharField(max_length=50000)
    Abt_Pa_SLL_Des = models.CharField(max_length=99999999999999999)


# Analysis Pa SLL

class AnPaSLL(models.Model):
    An_Pa_SLL_Id = models.AutoField(primary_key=True)
    An_Pa_SLL_Title = models.CharField(max_length=50000)
    An_Pa_SLL_Img = models.CharField(max_length=50000)
    An_Pa_SLL_Des = models.CharField(max_length=99999999999999999)