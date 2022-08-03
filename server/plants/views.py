import random
from django.contrib.auth.models import User

from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from . import models
from .serializers import PlantsSerializer
from .models import Plant
from django.shortcuts import render, redirect, HttpResponse
from rest_framework import serializers
import re
import unidecode
import requests


class CreatePlant(GenericAPIView):
    permission_classes = [IsAuthenticated, ]

    def post(self, request):
        tokenToUserId = Token.objects.values().get(key=str(request.headers["Authorization"]).split(" ")[1])["user_id"]
        findUser= User.objects.get(id=tokenToUserId)
        if not findUser.is_staff:
            return Response({"username":findUser.username,"error":"user is not staff","message":"شما جزو کارکنان سایت نیستید"})

        try:
            Plant.objects.get(title=request.data['title'])
            return HttpResponse(serializers.ValidationError({"title": "this title exist."}))
        except Plant.DoesNotExist:
            s = PlantsSerializer(data=request.data)
            s.is_valid()
            slug = unidecode.unidecode(request.data['title']).lower()
            slug = re.sub(r'[\W_]+', '-',slug)
            try:
                if "https://" in request.data['image']:
                    img_data = requests.get(request.data['image']).content
                    name='mediafiles/downloaded'+str(request.user.id)+str(random.randint(0,9999))+'.jpg'
                    with open(name, 'wb') as handler:
                        handler.write(img_data)
                        img=name[11:]
                else:
                    img=request.data["image"]
            except:
                img="default.png"
            Plant.objects.create(
                title=request.data["title"],
                des=request.data["des"],
                image=img,
                slug=slug,
                author_id=Token.objects.get(key=request.auth.key).user_id,
            )

        return Response({"message": "گیاه با موفقیت ایجاد شد"})


class plants_list(GenericAPIView):
    queryset = Plant.objects.all()
    def get(self, request):
        date = Plant.objects.values("title","slug").order_by("id")
        return Response(date)




@api_view(["POST","GET"])
@permission_classes([AllowAny])
def seetextofurl(request):
    if request.method=="POST":
        return Response({"message":"درخواست نامعتبر است"},status=status.HTTP_400_BAD_REQUEST)
    try:
        a = models.Plant.objects.get(id=request.data["id"])
        return JsonResponse({
            "name": a.title,
            "image":a.image.path,
            "des": a.des,
            "author": a.author.username,
            "last_update": a.last_update.astimezone().timetuple()
        })

    except Plant.DoesNotExist:
        return Response({"message":"این گیاه حذف شده است","status":101},status=status.HTTP_400_BAD_REQUEST)
