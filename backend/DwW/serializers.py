from rest_framework import serializers
from .models import AbtDwW , AnDwW

# About Dw W
class AbtDwWSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbtDwW
        fields = ('Abt_Dw_W_Id',
                    'Abt_Dw_W_Title',
                    'Abt_Dw_W_Img',
                    'Abt_Dw_W_Des')


# Analysis DW W

class AnDwWSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnDwW
        fields = ('An_Dw_W_Id',
                    'An_Dw_W_Title',
                    'An_Dw_W_Img',
                    'An_Dw_W_Des')