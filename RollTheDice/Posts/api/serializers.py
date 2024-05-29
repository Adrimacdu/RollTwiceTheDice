from rest_framework import serializers, response, status
from Posts.models import *
from Partidas.api.serializers import PartidaListSerializer
from Partidas.models import Partida

class PostListSerializer(serializers.ModelSerializer):
    usuario_creador_name = serializers.SerializerMethodField()


    class Meta:
        model = Post
        fields = (
            'id',
            'usuario_creador_name',
            'titulo',
            'descripcion',
            'numero_jugadores',
            'fecha'
        )
# PARA QUE DEVUELVA EL NOMBRE DEL USUARIO Y NO EL ID AL IMPRIMIR LOS POST
    def get_usuario_creador_name(self, obj):
        return obj.usuario_creador.name



class PostDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            '__all__'
        )