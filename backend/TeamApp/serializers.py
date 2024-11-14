from rest_framework import serializers
from TeamApp.models import Members

class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ('MembersId',
                  'MembersName',
                  'MembersDescription',
                  'MembersPhoto'
                  )
                  