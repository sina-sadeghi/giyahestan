import datetime
from django.core.mail.backends import smtp
from django.shortcuts import render, redirect, HttpResponse
from rest_framework import status, permissions, authentication, exceptions, views
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import UserSerializer
from .models import Account
from rest_framework import serializers
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.authtoken.models import Token
from django.core.mail import send_mail
from django.conf import settings
import smtplib, ssl
import pywhatkit
from rest_framework_expiring_authtoken import views as v2



def home_accounts(request):
    return JsonResponse({"name": "ali", "age": "21"})


@api_view(["POST","GET"])
def signup_login(request):
    if request.method == 'POST':
        if "password" not in request.data:

                if request.data["email"] in [i["username"] for i in list(User.objects.values("username"))]:
                    return Response({"Membership":bool(True)})
                else:
                    return Response({"Membership":bool(False)})
        else:
            try:
                u=User.objects.get(username=request.data["email"])
                if u.check_password(request.data["password"]):
                    tok=Token.objects.get_or_create(user=u)
                    toke=v2.ExpiringToken.objects.get_or_create(user=u)
                    EXPIRING_TOKEN_LIFESPAN = datetime.timedelta(days=2)

                    return JsonResponse({"token":str(tok[0]),"token2":str(tok[0]),"email":u.email,"user_id":u.id,"is_staff":u.is_staff,"message":"شما وارد شدید"})
                else:
                    return Response({"message":"رمز عبور اشتباه است"},status=status.HTTP_400_BAD_REQUEST)
            except User.DoesNotExist:
            # send_mail(
            #     "confirm code",
            #     'your code is 4786',
            #     settings.EMAIL_HOST_USER,
            #     ["lmsy032@gmail.com"],
            #     fail_silently=False,
            #           )
                s=UserSerializer(data=request.data)
                s.create(request.data)
            return Response({"message":"شما ثبت نام شدید"},status=status.HTTP_201_CREATED)





@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout_views(request):
    request.user.auth_token.delete()
    return redirect(reverse('home'))




class MyView(GenericAPIView):
    permission_classes = [IsAuthenticated,]

    def get(self, request):
        return HttpResponse("user is login")


@api_view(["POST","GET"])
def tel(request):

    if request.method == 'GET':

        if not request.user.email('@gmail.com'):
            return HttpResponse("gmaile")

        try:
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.ehlo()
            server.starttls()

            return HttpResponse("ok!")
        except:
            return HttpResponse("bad")