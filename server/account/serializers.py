from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Account



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ("id",'email','password')


    def create(self, validated_data):
        Account.objects.create(
            email=validated_data['email'],
            password=validated_data['password']
        ).save()

        user = User.objects.create(
            username=validated_data['email'],
            email=validated_data['email'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
