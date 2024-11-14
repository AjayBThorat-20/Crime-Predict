from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Vission, VissionBg
from .serializers import VissionSerializer , VissionBgSerializer


from django.core.files.storage import default_storage
# Create your views here.

# about

@csrf_exempt
def VissionApi(request,id=0):
    if request.method=='GET':
        vissions = Vission.objects.all()
        vissions_serializer = VissionSerializer(vissions, many=True)
        return JsonResponse(vissions_serializer.data, safe=False)

    elif request.method=='POST':
        vissions_data=JSONParser().parse(request)
        vissions_serializer = VissionSerializer(data=vissions_data)
        if vissions_serializer.is_valid():
            vissions_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        vissions_data = JSONParser().parse(request)
        vissions=Vission.objects.get(VissionId=vissions_data['VissionId'])
        vissions_serializer=VissionSerializer(vissions,data=vissions_data)
        if vissions_serializer.is_valid():
            vissions_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        vissions=Vission.objects.get(AboutId=id)
        vissions.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)





# About Bg


@csrf_exempt
def vissionbgApi(request,id=0):
    if request.method=='GET':
        vissionbgs = VissionBg.objects.all()
        vissionbgs_serializer = VissionBgSerializer(vissionbgs, many=True)
        return JsonResponse(vissionbgs_serializer.data, safe=False)

    elif request.method=='POST':
        vissionbgs_data=JSONParser().parse(request)
        vissionbgs_serializer = VissionBgSerializer(data=vissionbgs_data)
        if vissionbgs_serializer.is_valid():
            vissionbgs_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        vissionbgs_data = JSONParser().parse(request)
        vissionbgs=VissionBg.objects.get(VissionBgId=vissionbgs_data['VissionBgId'])
        vissionbgs_serializer=VissionBgSerializer(vissionbgs,data=vissionbgs_data)
        if vissionbgs_serializer.is_valid():
            vissionbgs_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        vissionbgs=VissionBg.objects.get(VissionBgId=id)
        vissionbgs.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def Savevissbgphoto(request):
    file=request.FILES['VissionBgFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)
