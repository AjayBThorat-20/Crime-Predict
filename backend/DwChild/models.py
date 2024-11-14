from django.db import models

 # About DW Child 

class AbtDwChild(models.Model):
    Abt_Dw_Child_Id = models.AutoField(primary_key=True)
    Abt_Dw_Child_Title = models.CharField(max_length=50000)
    Abt_Dw_Child_Img = models.CharField(max_length=50000)
    Abt_Dw_Child_Des = models.CharField(max_length=99999999999999999)


# Analysis DW Child 
class AnDwChild(models.Model):
    An_Dw_Child_Id = models.AutoField(primary_key=True)
    An_Dw_Child_Title = models.CharField(max_length=50000)
    An_Dw_Child_Img = models.CharField(max_length=50000)
    An_Dw_Child_Des = models.CharField(max_length=99999999999999999)