from rest_framework import serializers
from .models import Vission, VissionBg

# vission Info
class VissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vission
        fields = ('VissionId',
                  'VissionInfo')


# vission Bg
class VissionBgSerializer(serializers.ModelSerializer):
    class Meta:
        model = VissionBg
        fields = ('VissionBgId',
                  'VissionBgPhoto'
                  )