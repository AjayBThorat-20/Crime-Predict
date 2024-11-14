from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from AboutApp.models import About ,AboutBg
from AboutApp.serializers import AboutSerializer , AboutBgSerializer


from django.core.files.storage import default_storage
# Create your views here.

# about Info

@csrf_exempt
def aboutApi(request,id=0):
    if request.method=='GET':
        abouts = About.objects.all()
        abouts_serializer = AboutSerializer(abouts, many=True)
        return JsonResponse(abouts_serializer.data, safe=False)

    elif request.method=='POST':
        about_data=JSONParser().parse(request)
        abouts_serializer = AboutSerializer(data=about_data)
        if abouts_serializer.is_valid():
            abouts_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        about_data = JSONParser().parse(request)
        abouts=About.objects.get(AboutId=about_data['AboutId'])
        abouts_serializer=AboutSerializer(abouts,data=about_data)
        if abouts_serializer.is_valid():
            abouts_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        abouts=About.objects.get(AboutId=id)
        abouts.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)



# About Bg


@csrf_exempt
def aboutbgApi(request,id=0):
    if request.method=='GET':
        aboutbgs = AboutBg.objects.all()
        aboutbgs_serializer = AboutBgSerializer(aboutbgs, many=True)
        return JsonResponse(aboutbgs_serializer.data, safe=False)

    elif request.method=='POST':
        aboutbgs_data=JSONParser().parse(request)
        aboutbgs_serializer = AboutBgSerializer(data=aboutbgs_data)
        if aboutbgs_serializer.is_valid():
            aboutbgs_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        aboutbgs_data = JSONParser().parse(request)
        aboutbgs=AboutBg.objects.get(AboutBgId=aboutbgs_data['AboutBgId'])
        aboutbgs_serializer=AboutBgSerializer(aboutbgs,data=aboutbgs_data)
        if aboutbgs_serializer.is_valid():
            aboutbgs_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        aboutbgs=AboutBg.objects.get(AboutBgId=id)
        aboutbgs.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def SaveAbtbgphoto(request):
    file=request.FILES['AboutBgFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)