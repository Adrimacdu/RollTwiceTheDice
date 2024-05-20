from rest_framework import serializers, response, status
from Usuarios.models import *

class MyUserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = (
            'email',
            'password',
        )

class MyUserManagerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUserManager
        fields = (
            'email',
            'password',
        )