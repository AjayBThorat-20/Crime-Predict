from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Crimes,Posts
from .serializers import CrimesSerializer, PostsSerializer


from django.core.files.storage import default_storage
# Create your views here.

# Crimes

@csrf_exempt
def crimesApi(request,id=0):
    if request.method=='GET':
        crimes = Crimes.objects.all()
        crimes_serializer = CrimesSerializer(crimes, many=True)
        return JsonResponse(crimes_serializer.data, safe=False)

    elif request.method=='POST':
        crimes_data=JSONParser().parse(request)
        crimes_serializer = CrimesSerializer(data=crimes_data)
        if crimes_serializer.is_valid():
            crimes_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        crimes_data = JSONParser().parse(request)
        crimes=Crimes.objects.get(CrimesId=crimes_data['CrimesId'])
        crimes_serializer=CrimesSerializer(crimes,data=crimes_data)
        if crimes_serializer.is_valid():
            crimes_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        crimes=Crimes.objects.get(CrimesId=id)
        crimes.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)



# Posts
@csrf_exempt
def postsApi(request,id=0):
    if request.method=='GET':
        posts = Posts.objects.all()
        posts_serializer = PostsSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False)

    elif request.method=='POST':
        posts_data=JSONParser().parse(request)
        posts_serializer = PostsSerializer(data=posts_data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        posts_data = JSONParser().parse(request)
        posts=Posts.objects.get(PostsId=posts_data['PostsId'])
        posts_serializer=PostsSerializer(posts,data=posts_data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        posts=Posts.objects.get(PostsId=id)
        posts.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['myFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)