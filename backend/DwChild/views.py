from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from DwChild.models import AbtDwChild , AnDwChild
from DwChild.serializers import AbtDWChildSerializer , AnDWChildSerializer

from django.core.files.storage import default_storage
# Create your views here.


# About Dw Child
@csrf_exempt
def abtDwChildsApi(request,id=0):
    if request.method=='GET':
        abtDwChilds = AbtDwChild.objects.all()
        abtDwChilds_serializer = AbtDWChildSerializer(abtDwChilds, many=True)
        return JsonResponse(abtDwChilds_serializer.data, safe=False)

    elif request.method=='POST':
        abtDwChilds_data=JSONParser().parse(request)
        abtDwChilds_serializer = AbtDWChildSerializer(data=abtDwChilds_data)
        if abtDwChilds_serializer.is_valid():
            abtDwChilds_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    


    elif request.method=='PUT':
        abtDwChilds_data = JSONParser().parse(request)
        abtDwChilds=AbtDwChild.objects.get(Abt_Dw_Child_Id=abtDwChilds_data['Abt_Dw_Child_Id'])
        abtDwChilds_serializer=AbtDWChildSerializer(abtDwChilds,data=abtDwChilds_data)
        if abtDwChilds_serializer.is_valid():
            abtDwChilds_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)


    elif request.method=='DELETE':
        abtDwChilds=AbtDwChild.objects.get(Abt_Dw_Child_Id=id)
        abtDwChilds.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def SaveAbtFile(request):
    file=request.FILES['aboutFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)






# Analysis DW Child
@csrf_exempt
def anDwChildsApi(request,id=0):
    if request.method=='GET':
        anDwChilds = AnDwChild.objects.all()
        anDwChilds_serializer = AnDWChildSerializer(anDwChilds, many=True)
        return JsonResponse(anDwChilds_serializer.data, safe=False)

    elif request.method=='POST':
        anDwChilds_data=JSONParser().parse(request)
        anDwChilds_serializer = AnDWChildSerializer(data=anDwChilds_data)
        if anDwChilds_serializer.is_valid():
            anDwChilds_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        anDwChilds_data = JSONParser().parse(request)
        anDwChilds=AnDwChild.objects.get( An_Dw_Child_Id=anDwChilds_data['An_Dw_Child_Id'])
        anDwChilds_serializer=AnDWChildSerializer(anDwChilds, data=anDwChilds_data)
        if anDwChilds_serializer.is_valid():
            anDwChilds_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        anDwChilds=AnDwChild.objects.get(An_Dw_Child_Id=id)
        anDwChilds.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def SaveAnFile(request):
    file=request.FILES['chartFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)
