from rest_framework import serializers
from .models import Crimes, Posts

class CrimesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crimes
        fields = ('CrimesId',
                  'CrimesName')

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('PostsId',
                  'PostsTitle',
                  'PostsDescription',
                  'Crime',
                  'CrimeDate',
                  'PhotoFileName')
                  