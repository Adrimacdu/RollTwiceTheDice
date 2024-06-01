from rest_framework import serializers, response, status
from Usuarios.models import *
from Posts.models import Post
from PerfilUser.models import PerfilUser
from PerfilUser.api.serializers import PerfilUserSerializer
from django.contrib.auth.hashers import make_password

class MyUserListSerializer(serializers.ModelSerializer):

    perfiluser = PerfilUserSerializer()

    class Meta:
        model = MyUser
        fields = (
            'id',
            'email',
            'password',
            'name',
            'perfiluser',
            'create_date'

        ) 

    def create(self, validated_data):
        perfiluser_data = validated_data.pop('perfiluser')
        user = MyUser.objects.create_user(
            email=validated_data['email'],
            username=validated_data['name'],
            password=validated_data['password'],
            
        )
        PerfilUser.objects.create(user=user, **perfiluser_data)

    def update(self, instance, validated_data):
        perfiluser_data = validated_data.pop('perfiluser')
        instance.username = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.save()

        perfiluser = instance.perfiluser
        perfiluser.descripcion = perfiluser_data.get('descripcion', perfiluser.descripcion)
        perfiluser.usuario = perfiluser_data.get('usuario', perfiluser.usuario)
        perfiluser.save()

class usercredencialesserializer(serializers.ModelSerializer):

    post_por_user = serializers.SerializerMethodField()
    descripcion_perfil = serializers.SerializerMethodField()

    class Meta:
        model = MyUser
        fields = (
            'id',
            'email',
            'name',
            'post_por_user',
            'create_date',
            'descripcion_perfil',
            'is_staff'
        )
    
    def get_descripcion_perfil(self, obj):
        try:
            perfil = obj.perfiluser     # Al haber una relacion 1 a 1 con el perfil, se puede invocar directamente 
                                        # (en minusculas de la misma manera que en el signal)
            return perfil.get_descripcion()
        except PerfilUser.DoesNotExist:
            return None

    def get_post_por_user(self, obj):
        return Post.objects.filter(usuario_creador=obj).count()

class MyUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = (
            'id',
            'email',
            'password',
            'name',
            'create_date'
        ) 

    def validate_password(self, value: str):
        return make_password(value)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)