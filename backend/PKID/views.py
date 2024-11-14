from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import AbtPKID , AnPKID
from .serializers import AbtPKIDSerializer, AnPKIDSerializer

from django.core.files.storage import default_storage
# Create your views here.


# About PKID
@csrf_exempt
def abtPKIDApi(request,id=0):
    if request.method=='GET':
        abtPKID = AbtPKID.objects.all()
        abtPKID_serializer = AbtPKIDSerializer(abtPKID, many=True)
        return JsonResponse(abtPKID_serializer.data, safe=False)

    elif request.method=='POST':
        abtPKID_data=JSONParser().parse(request)
        abtPKID_serializer = AbtPKIDSerializer(data=abtPKID_data)
        if abtPKID_serializer.is_valid():
            abtPKID_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        abtPKID_data = JSONParser().parse(request)
        abtPKID=AbtPKID.objects.get( Abt_PKID_Id = abtPKID_data['Abt_PKID_Id'])
        abtPKID_serializer=AbtPKIDSerializer(abtPKID, data=abtPKID_data)
        if abtPKID_serializer.is_valid():
            abtPKID_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        abtPKID=AbtPKID.objects.get(Abt_PKID_Id=id)
        abtPKID.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AbtSaveFile(request):
    file=request.FILES['aboutFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)



   # Analysis PKID
@csrf_exempt
def anPKIDApi(request,id=0):
    if request.method=='GET':
        anPKID = AnPKID.objects.all()
        anPKID_serializer = AnPKIDSerializer(anPKID, many=True)
        return JsonResponse(anPKID_serializer.data, safe=False)

    elif request.method=='POST':
        anPKID_data=JSONParser().parse(request)
        anPKID_serializer = AnPKIDSerializer(data=anPKID_data)
        if anPKID_serializer.is_valid():
            anPKID_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        anPKID_data = JSONParser().parse(request)
        anPKID=AnPKID.objects.get( An_PKID_Id = anPKID_data['An_PKID_Id'])
        anPKID_serializer=AnPKIDSerializer(anPKID, data=anPKID_data)
        if anPKID_serializer.is_valid():
            anPKID_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        anPKID=AnPKID.objects.get(An_PKID_Id=id)
        anPKID.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AnSaveFile(request):
    file=request.FILES['chartFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)