from rest_framework import serializers
from AboutApp.models import About, AboutBg

# about Info
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ('AboutId',
                  'AboutInfo')

# about Bg
class AboutBgSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutBg
        fields = ('AboutBgId',
                  'AboutBgPhoto'
                  )