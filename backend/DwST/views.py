from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import AbtDwST , AnDwST
from .serializers import AbtDwSTSerializer , AnDwSTSerializer

from django.core.files.storage import default_storage
# Create your views here.


 # About DW ST
@csrf_exempt
def abtDwSTApi(request,id=0):
    if request.method=='GET':
        abtDwST = AbtDwST.objects.all()
        abtDwST_serializer = AbtDwSTSerializer(abtDwST, many=True)
        return JsonResponse(abtDwST_serializer.data, safe=False)

    elif request.method=='POST':
        abtDwST_data=JSONParser().parse(request)
        abtDwST_serializer = AbtDwSTSerializer(data=abtDwST_data)
        if abtDwST_serializer.is_valid():
            abtDwST_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        abtDwST_data = JSONParser().parse(request)
        abtDwST=AbtDwST.objects.get( Abt_Dw_ST_Id = abtDwST_data['Abt_Dw_ST_Id'])
        abtDwST_serializer=AbtDwSTSerializer(abtDwST, data=abtDwST_data)
        if abtDwST_serializer.is_valid():
            abtDwST_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        abtDwST=AbtDwST.objects.get(Abt_Dw_ST_Id=id)
        abtDwST.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AbtSaveFile(request):
    file=request.FILES['aboutFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)



 # Analysis DW ST

@csrf_exempt
def anDwSTApi(request,id=0):
    if request.method=='GET':
        anDwST = AnDwST.objects.all()
        anDwST_serializer = AnDwSTSerializer(anDwST, many=True)
        return JsonResponse(anDwST_serializer.data, safe=False)

    elif request.method=='POST':
        anDwST_data=JSONParser().parse(request)
        anDwST_serializer = AnDwSTSerializer(data=anDwST_data)
        if anDwST_serializer.is_valid():
            anDwST_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        anDwST_data = JSONParser().parse(request)
        anDwST=AnDwST.objects.get( An_Dw_ST_Id = anDwST_data['An_Dw_ST_Id'])
        anDwST_serializer=AnDwSTSerializer(anDwST, data=anDwST_data)
        if anDwST_serializer.is_valid():
            anDwST_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        anDwST=AbtDwST.objects.get(An_Dw_ST_Id=id)
        anDwST.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def AnSaveFile(request):
    file=request.FILES['chartFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)