from rest_framework import serializers
from .models import AbtDwST , AnDwST


# About Dw ST

class AbtDwSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbtDwST
        fields = ('Abt_Dw_ST_Id',
                    'Abt_Dw_ST_Title',
                    'Abt_Dw_ST_Img',
                    'Abt_Dw_ST_Des')


# Analysis DW ST

class AnDwSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnDwST
        fields = ('An_Dw_ST_Id',
                    'An_Dw_ST_Title',
                    'An_Dw_ST_Img',
                    'An_Dw_ST_Des')