from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import AbtDwW, AnDwW
from .serializers import AbtDwWSerializer , AnDwWSerializer

from django.core.files.storage import default_storage
# Create your views here.


# About Dw W
@csrf_exempt
def abtDwWApi(request,id=0):
    if request.method=='GET':
        abtDwW = AbtDwW.objects.all()
        abtDwW_serializer = AbtDwWSerializer(abtDwW, many=True)
        return JsonResponse(abtDwW_serializer.data, safe=False)

    elif request.method=='POST':
        abtDwW_data=JSONParser().parse(request)
        abtDwW_serializer = AbtDwWSerializer(data=abtDwW_data)
        if abtDwW_serializer.is_valid():
            abtDwW_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        abtDwW_data = JSONParser().parse(request)
        abtDwW=AbtDwW.objects.get( Abt_Dw_W_Id = abtDwW_data['Abt_Dw_W_Id'])
        abtDwW_serializer=AbtDwWSerializer(abtDwW, data=abtDwW_data)
        if abtDwW_serializer.is_valid():
            abtDwW_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        abtDwW=AbtDwW.objects.get(Abt_Dw_W_Id=id)
        abtDwW.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AbtSaveFile(request):
    file=request.FILES['aboutFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)


# Analysis DW W

@csrf_exempt
def anDwWApi(request,id=0):
    if request.method=='GET':
        anDwW = AnDwW.objects.all()
        anDwW_serializer = AnDwWSerializer(anDwW, many=True)
        return JsonResponse(anDwW_serializer.data, safe=False)

    elif request.method=='POST':
        anDwW_data=JSONParser().parse(request)
        anDwW_serializer = AnDwWSerializer(data=anDwW_data)
        if anDwW_serializer.is_valid():
            anDwW_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        anDwW_data = JSONParser().parse(request)
        anDwW=AnDwW.objects.get( An_Dw_W_Id = anDwW_data['An_Dw_W_Id'])
        anDwW_serializer=AnDwWSerializer(anDwW, data=anDwW_data)
        if anDwW_serializer.is_valid():
            anDwW_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        anDwW=AnDwW.objects.get(An_Dw_W_Id=id)
        anDwW.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AnSaveFile(request):
    file=request.FILES['chartFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)