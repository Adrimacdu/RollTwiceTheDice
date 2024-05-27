from rest_framework import serializers, response, status
from Usuarios.models import *
from Posts.models import Post

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

class usercredencialesserializer(serializers.ModelSerializer):

    post_por_user = serializers.SerializerMethodField()

    class Meta:
        model = MyUser
        fields = (
            'id',
            'email',
            'name',
            'post_por_user',
            'create_date'
        )

    def get_post_por_user(self, obj):
        return Post.objects.filter(usuario_creador=obj).count()