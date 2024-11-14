from rest_framework import serializers
from DwChild.models import AbtDwChild , AnDwChild

# About DW Child 

class AbtDWChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbtDwChild
        fields = ('Abt_Dw_Child_Id',
                  'Abt_Dw_Child_Title',
                  'Abt_Dw_Child_Img',
                  'Abt_Dw_Child_Des')


# Analysis DW Child 

class AnDWChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnDwChild
        fields = ('An_Dw_Child_Id',
                  'An_Dw_Child_Title',
                  'An_Dw_Child_Img',
                  'An_Dw_Child_Des')