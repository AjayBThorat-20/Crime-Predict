from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import AbtDwIPC,  AnDwIPC
from .serializers import AbtDwIPCSerializer, AnDwIPCSerializer

from django.core.files.storage import default_storage
# Create your views here.


# About Dw IPC

@csrf_exempt
def abtDwIPCApi(request,id=0):
    if request.method=='GET':
        abtDwIPC = AbtDwIPC.objects.all()
        abtDwIPC_serializer = AbtDwIPCSerializer(abtDwIPC, many=True)
        return JsonResponse(abtDwIPC_serializer.data, safe=False)

    elif request.method=='POST':
        abtDwIPC_data=JSONParser().parse(request)
        abtDwIPC_serializer = AbtDwIPCSerializer(data=abtDwIPC_data)
        if abtDwIPC_serializer.is_valid():
            abtDwIPC_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        abtDwIPC_data = JSONParser().parse(request)
        abtDwIPC=AbtDwIPC.objects.get( Abt_Dw_IPC_Id = abtDwIPC_data['Abt_Dw_IPC_Id'])
        abtDwIPC_serializer=AbtDwIPCSerializer(abtDwIPC, data=abtDwIPC_data)
        if abtDwIPC_serializer.is_valid():
            abtDwIPC_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        abtDwIPC=AbtDwIPC.objects.get(Abt_Dw_IPC_Id=id)
        abtDwIPC.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AbtSaveFile(request):
    file=request.FILES['aboutFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)



# Analysis DW IPC

@csrf_exempt
def anDwIPCApi(request,id=0):
    if request.method=='GET':
        anDwIPC = AnDwIPC.objects.all()
        anDwIPC_serializer = AnDwIPCSerializer(anDwIPC, many=True)
        return JsonResponse(anDwIPC_serializer.data, safe=False)

    elif request.method=='POST':
        anDwIPC_data=JSONParser().parse(request)
        anDwIPC_serializer = AnDwIPCSerializer(data=anDwIPC_data)
        if anDwIPC_serializer.is_valid():
            anDwIPC_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        anDwIPC_data = JSONParser().parse(request)
        anDwIPC=AnDwIPC.objects.get( An_Dw_IPC_Id = anDwIPC_data['An_Dw_IPC_Id'])
        anDwIPC_serializer=AnDwIPCSerializer(anDwIPC, data=anDwIPC_data)
        if anDwIPC_serializer.is_valid():
            anDwIPC_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        anDwIPC=AnDwIPC.objects.get(An_Dw_IPC_Id=id)
        anDwIPC.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AnSaveFile(request):
    file=request.FILES['chartFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)
