from rest_framework import serializers
from .models import AbtDwIPC , AnDwIPC


# About Dw IPC

class AbtDwIPCSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbtDwIPC
        fields = ('Abt_Dw_IPC_Id',
                  'Abt_Dw_IPC_Title',
                  'Abt_Dw_IPC_Img',
                  'Abt_Dw_IPC_Des')


# Analysis DW IPC

class AnDwIPCSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnDwIPC
        fields = ('An_Dw_IPC_Id',
                  'An_Dw_IPC_Title',
                  'An_Dw_IPC_Img',
                  'An_Dw_IPC_Des')