from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import LinkUser
from .serializers import LinkUserSerializer

# Create your views here.


# About Dw W
@csrf_exempt
def linkuserApi(request,id=0):
    if request.method=='GET':
        linkusers = LinkUser.objects.all()
        linkuser_serializer = LinkUserSerializer(linkusers, many=True)
        return JsonResponse(linkuser_serializer.data, safe=False)

    elif request.method=='POST':
        linkuser_data=JSONParser().parse(request)
        linkuser_serializer = LinkUserSerializer(data=linkuser_data)
        if linkuser_serializer.is_valid():
            linkuser_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    # elif request.method=='PUT':
    #     linkuser_data = JSONParser().parse(request)
    #     linkusers=LinkUser.objects.get( LinkUserID = linkuser_data['LinkUserID'])
    #     linkuser_serializer=LinkUserSerializer(linkusers, data=linkuser_data)
    #     if linkuser_serializer.is_valid():
    #         linkuser_serializer.save()
    #         return JsonResponse("Updated Successfully!!", safe=False)
    #     return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        linkusers=LinkUser.objects.get(LinkUserId=id)
        linkusers.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

