from rest_framework import serializers, response, status
from Posts.models import Post
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

    def get_usuario_creador_name(self, obj):
        return obj.usuario_creador.name


class PostDetailSerializer(serializers.ModelSerializer):

    usuario_creador_name = serializers.SerializerMethodField()

    partida_del_post = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = (
            'id',
            'usuario_creador_name',
            'usuario_creador',
            'titulo',
            'descripcion',
            'numero_jugadores',
            'fecha',
            'partida_del_post'
        )

    def get_usuario_creador_name(self, obj):
        return obj.usuario_creador.name

    def get_partida_del_post(self, obj):
        partida = Partida.objects.filter(post=obj).first()
        return partida.id if partida else None
