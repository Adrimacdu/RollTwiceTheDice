from rest_framework import serializers, response, status
from Usuarios.models import *

class MyUserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = (
            'email',
            'password',
            'name'
        )

    def create(self, validated_data):
        user = MyUser.objects.create_user(
            email=validated_data['email'],
            username=validated_data['name'],
            password=validated_data['password']
        )

