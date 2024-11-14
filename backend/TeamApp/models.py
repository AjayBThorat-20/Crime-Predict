from django.db import models

# Create your models here.
class Members(models.Model):
    MembersId = models.AutoField(primary_key=True)
    MembersName = models.CharField(max_length=100)
    MembersDescription = models.CharField(max_length=8000)
    MembersPhoto = models.CharField(max_length=100)