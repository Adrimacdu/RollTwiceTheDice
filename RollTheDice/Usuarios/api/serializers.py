from rest_framework import serializers, response, status
from Usuarios.models import *
from Posts.models import Post
from PerfilUser.models import PerfilUser
from PerfilUser.api.serializers import PerfilUserSerializer
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

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


class AdminSetUserSerializer(serializers.Serializer):
    user_id = serializers.IntegerField()
    new_password = serializers.CharField(write_only=True)
    re_new_password = serializers.CharField(write_only=True)
    email = serializers.EmailField(max_length=255)
    name = models.CharField(max_length=30,null=True)

    def validate(self, attrs):
        if attrs['new_password'] != attrs['re_new_password']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def save(self, **kwargs):
        user_id = self.validated_data['user_id']
        new_password = self.validated_data['new_password']
        user = MyUser.objects.get(id=user_id)
        user.set_password(new_password)
        user.save()

        if 'new_password' in self.validated_data:
            user.set_password(self.validated_data['new_password'])

        if 'first_name' in self.validated_data:
            user.first_name = self.validated_data['email']

        if 'last_name' in self.validated_data:
            user.last_name = self.validated_data['name']

        user.save()

        # Invalidate old tokens and create new ones if password was changed
        if 'new_password' in self.validated_data:
            refresh = RefreshToken.for_user(user)
            return {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }

        return {}