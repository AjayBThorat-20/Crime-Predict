from rest_framework import serializers
from .models import AbtPKID, AnPKID

# About PKID

class AbtPKIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbtPKID
        fields = ('Abt_PKID_Id',
                  'Abt_PKID_Title',
                  'Abt_PKID_Img',
                  'Abt_PKID_Des')

# Analysis PKID

class AnPKIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnPKID
        fields = ('An_PKID_Id',
                  'An_PKID_Title',
                  'An_PKID_Img',
                  'An_PKID_Des')