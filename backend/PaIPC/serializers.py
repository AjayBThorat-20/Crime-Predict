from rest_framework import serializers
from .models import AbtPaIPC, AnPaIPC


# About PA IPC

class AbtPaIPCSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbtPaIPC
        fields = ('Abt_Pa_IPC_Id',
                  'Abt_Pa_IPC_Title',
                  'Abt_Pa_IPC_Img',
                  'Abt_Pa_IPC_Des')


# Analysis PA IPC

class AnPaIPCSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnPaIPC
        fields = ('An_Pa_IPC_Id',
                  'An_Pa_IPC_Title',
                  'An_Pa_IPC_Img',
                  'An_Pa_IPC_Des')