from rest_framework import serializers
from PerfilUser.models import PerfilUser

class PerfilUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = PerfilUser
        fields = ['usuario','descripcion']

class PerfilDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = PerfilUser
        fields = (
            '__all__'
        )