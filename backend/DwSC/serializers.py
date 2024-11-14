from rest_framework import serializers
from .models import AbtDwSC , AnDwSC



# About Dw SC

class AbtDwSCSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbtDwSC
        fields = ('Abt_Dw_SC_Id',
                    'Abt_Dw_SC_Title',
                    'Abt_Dw_SC_Img',
                    'Abt_Dw_SC_Des')


# Analysis DW SC

class AnDwSCSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnDwSC
        fields = ('An_Dw_SC_Id',
                    'An_Dw_SC_Title',
                    'An_Dw_SC_Img',
                    'An_Dw_SC_Des')