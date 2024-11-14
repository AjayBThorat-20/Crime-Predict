from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import AbtPaSLL , AnPaSLL
from .serializers import AbtPaSLLSerializer, AnPaSLLSerializer

from django.core.files.storage import default_storage
# Create your views here.


 # About Pa SLL
@csrf_exempt
def abtPaSLLApi(request,id=0):
    if request.method=='GET':
        abtPaSLL = AbtPaSLL.objects.all()
        abtPaSLL_serializer = AbtPaSLLSerializer(abtPaSLL, many=True)
        return JsonResponse(abtPaSLL_serializer.data, safe=False)

    elif request.method=='POST':
        abtPaSLL_data=JSONParser().parse(request)
        abtPaSLL_serializer = AbtPaSLLSerializer(data=abtPaSLL_data)
        if abtPaSLL_serializer.is_valid():
            abtPaSLL_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        abtPaSLL_data = JSONParser().parse(request)
        abtPaSLL=AbtPaSLL.objects.get( Abt_Pa_SLL_Id = abtPaSLL_data['Abt_Pa_SLL_Id'])
        abtPaSLL_serializer=AbtPaSLLSerializer(abtPaSLL, data=abtPaSLL_data)
        if abtPaSLL_serializer.is_valid():
            abtPaSLL_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        abtPaSLL=AbtPaSLL.objects.get(Abt_Pa_SLL_Id=id)
        abtPaSLL.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AbtSaveFile(request):
    file=request.FILES['aboutFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)


 # Analysis Pa SLL
@csrf_exempt
def anPaSLLApi(request,id=0):
    if request.method=='GET':
        anPaSLL = AnPaSLL.objects.all()
        anPaSLL_serializer = AnPaSLLSerializer(anPaSLL, many=True)
        return JsonResponse(anPaSLL_serializer.data, safe=False)

    elif request.method=='POST':
        anPaSLL_data=JSONParser().parse(request)
        anPaSLL_serializer = AnPaSLLSerializer(data=anPaSLL_data)
        if anPaSLL_serializer.is_valid():
            anPaSLL_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        anPaSLL_data = JSONParser().parse(request)
        anPaSLL=AnPaSLL.objects.get( An_Pa_SLL_Id = anPaSLL_data['An_Pa_SLL_Id'])
        anPaSLL_serializer=AnPaSLLSerializer(anPaSLL, data=anPaSLL_data)
        if anPaSLL_serializer.is_valid():
            anPaSLL_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        anPaSLL=AnPaSLL.objects.get(An_Pa_SLL_Id=id)
        anPaSLL.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AnSaveFile(request):
    file=request.FILES['chartFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)