from rest_framework import serializers
from .models import AbtPaSLL, AnPaSLL


# About Pa SLL

class AbtPaSLLSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbtPaSLL
        fields = ('Abt_Pa_SLL_Id',
                  'Abt_Pa_SLL_Title',
                  'Abt_Pa_SLL_Img',
                  'Abt_Pa_SLL_Des')

# Analysis Pa SLL

class AnPaSLLSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnPaSLL
        fields = ('An_Pa_SLL_Id',
                  'An_Pa_SLL_Title',
                  'An_Pa_SLL_Img',
                  'An_Pa_SLL_Des')