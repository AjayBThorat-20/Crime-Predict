from rest_framework import serializers
from .models import LinkUser

# About Dw W
class LinkUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkUser
        fields = ('LinkUserId',
                    'LinkUserName',
                    'LinkUserEmail',
                    'LinkUserMessage')
