from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import AddCrimeCard
from .serializers import AddCrimeCardSerializer

from django.core.files.storage import default_storage
# Create your views here.

# Posts
@csrf_exempt
def AddCrimeCardApi(request,id=0):
    if request.method=='GET':
        crimecard = AddCrimeCard.objects.all()
        crimecard_serializer = AddCrimeCardSerializer(crimecard, many=True)
        return JsonResponse(crimecard_serializer.data, safe=False)

    elif request.method=='POST':
        crimecard_data=JSONParser().parse(request)
        crimecard_serializer = AddCrimeCardSerializer(data=crimecard_data)
        if crimecard_serializer.is_valid():
            crimecard_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        crimecard_data = JSONParser().parse(request)
        crimecard=AddCrimeCard.objects.get(CrimeCardId=crimecard_data['CrimeCardId'])
        crimecard_serializer=AddCrimeCardSerializer(crimecard,data=crimecard_data)
        if crimecard_serializer.is_valid():
            crimecard_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        crimecard=AddCrimeCard.objects.get(CrimeCardId=id)
        crimecard.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
