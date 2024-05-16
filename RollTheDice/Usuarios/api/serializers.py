from rest_framework import serializers, response, status
from Posts.models import *

class MyUserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = (
            'id',
            '__str__',
        )

class MyUserManagerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUserManager
        fields = (
            'id',
            '__str__',
        )