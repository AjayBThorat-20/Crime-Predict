
from django.db import models

# About Dw W

class LinkUser(models.Model):
    LinkUserId = models.AutoField(primary_key=True)
    LinkUserName = models.CharField(max_length=50000)
    LinkUserEmail = models.CharField(max_length=50000)
    LinkUserMessage = models.CharField(max_length=99999999999999999)