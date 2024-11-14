from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from TeamApp.models import Members
from TeamApp.serializers import MembersSerializer


from django.core.files.storage import default_storage
# Create your views here.

# memebers
@csrf_exempt
def teamApi(request,id=0):
    if request.method=='GET':
        members = Members.objects.all()
        members_serializer = MembersSerializer(members, many=True)
        return JsonResponse(members_serializer.data, safe=False)

    elif request.method=='POST':
        members_data=JSONParser().parse(request)
        members_serializer = MembersSerializer(data=members_data)
        if members_serializer.is_valid():
            members_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        members_data = JSONParser().parse(request)
        members=Members.objects.get(MembersId=members_data['MembersId'])
        memebers_serializer=MembersSerializer(members,data=members_data)
        if memebers_serializer.is_valid():
            memebers_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        members=Members.objects.get(MembersId=id)
        members.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def Saveteamphoto(request):
    file=request.FILES['teamFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)