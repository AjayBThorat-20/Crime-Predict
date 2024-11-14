from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import AbtDwSC , AnDwSC
from .serializers import AbtDwSCSerializer , AnDwSCSerializer

from django.core.files.storage import default_storage
# Create your views here.


# About Dw SC
@csrf_exempt
def abtDwSCApi(request,id=0):
    if request.method=='GET':
        abtDwSC = AbtDwSC.objects.all()
        abtDwSC_serializer = AbtDwSCSerializer(abtDwSC, many=True)
        return JsonResponse(abtDwSC_serializer.data, safe=False)

    elif request.method=='POST':
        abtDwSC_data=JSONParser().parse(request)
        abtDwSC_serializer = AbtDwSCSerializer(data=abtDwSC_data)
        if abtDwSC_serializer.is_valid():
            abtDwSC_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        abtDwSC_data = JSONParser().parse(request)
        abtDwSC=AbtDwSC.objects.get( Abt_Dw_SC_Id = abtDwSC_data['Abt_Dw_SC_Id'])
        abtDwSC_serializer=AbtDwSCSerializer(abtDwSC, data=abtDwSC_data)
        if abtDwSC_serializer.is_valid():
            abtDwSC_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        abtDwSC=AbtDwSC.objects.get(Abt_Dw_SC_Id=id)
        abtDwSC.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AbtSaveFile(request):
    file=request.FILES['aboutFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)



# Analysis DW SC

@csrf_exempt
def anDwSCApi(request,id=0):
    if request.method=='GET':
        anDwSC = AnDwSC.objects.all()
        anDwSC_serializer = AnDwSCSerializer(anDwSC, many=True)
        return JsonResponse(anDwSC_serializer.data, safe=False)

    elif request.method=='POST':
        anDwSC_data=JSONParser().parse(request)
        anDwSC_serializer = AnDwSCSerializer(data=anDwSC_data)
        if anDwSC_serializer.is_valid():
            anDwSC_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        anDwSC_data = JSONParser().parse(request)
        anDwSC=AnDwSC.objects.get( An_Dw_SC_Id = anDwSC_data['An_Dw_SC_Id'])
        anDwSC_serializer=AnDwSCSerializer(anDwSC, data=anDwSC_data)
        if anDwSC_serializer.is_valid():
            anDwSC_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        anDwSC=AnDwSC.objects.get(An_Dw_SC_Id=id)
        anDwSC.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AnSaveFile(request):
    file=request.FILES['chartFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)