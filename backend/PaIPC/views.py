from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import AbtPaIPC , AnPaIPC
from .serializers import AbtPaIPCSerializer, AnPaIPCSerializer

from django.core.files.storage import default_storage
# Create your views here.


# About PA IPC

@csrf_exempt
def abtPaIPCApi(request,id=0):
    if request.method=='GET':
        abtPaIPC = AbtPaIPC.objects.all()
        abtPaIPC_serializer = AbtPaIPCSerializer(abtPaIPC, many=True)
        return JsonResponse(abtPaIPC_serializer.data, safe=False)

    elif request.method=='POST':
        abtPaIPC_data=JSONParser().parse(request)
        abtPaIPC_serializer = AbtPaIPCSerializer(data=abtPaIPC_data)
        if abtPaIPC_serializer.is_valid():
            abtPaIPC_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        abtPaIPC_data = JSONParser().parse(request)
        abtPaIPC=AbtPaIPC.objects.get( Abt_Pa_IPC_Id = abtPaIPC_data['Abt_Pa_IPC_Id'])
        abtPaIPC_serializer=AbtPaIPCSerializer(abtPaIPC, data=abtPaIPC_data)
        if abtPaIPC_serializer.is_valid():
            abtPaIPC_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        abtPaIPC=AbtPaIPC.objects.get(Abt_Pa_IPC_Id=id)
        abtPaIPC.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AbtSaveFile(request):
    file=request.FILES['aboutFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)


# Analysis PA IPC

@csrf_exempt
def anPaIPCApi(request,id=0):
    if request.method=='GET':
        anPaIPC = AnPaIPC.objects.all()
        anPaIPC_serializer = AnPaIPCSerializer(anPaIPC, many=True)
        return JsonResponse(anPaIPC_serializer.data, safe=False)

    elif request.method=='POST':
        anPaIPC_data=JSONParser().parse(request)
        anPaIPC_serializer = AnPaIPCSerializer(data=anPaIPC_data)
        if anPaIPC_serializer.is_valid():
            anPaIPC_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        anPaIPC_data = JSONParser().parse(request)
        anPaIPC=AnPaIPC.objects.get( An_Pa_IPC_Id = anPaIPC_data['An_Pa_IPC_Id'])
        anPaIPC_serializer=AnPaIPCSerializer(anPaIPC, data=anPaIPC_data)
        if anPaIPC_serializer.is_valid():
            anPaIPC_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        anPaIPC=AnPaIPC.objects.get(An_Pa_IPC_Id=id)
        anPaIPC.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AnSaveFile(request):
    file=request.FILES['chartFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)