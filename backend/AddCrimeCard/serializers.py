from rest_framework import serializers
from .models import AddCrimeCard



class AddCrimeCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddCrimeCard
        fields = ('CrimeCardId',
                  'CrimeCardTitle',
                  'CrimeCardDes',
                  'CrimeCardUrl'
                  )
                  