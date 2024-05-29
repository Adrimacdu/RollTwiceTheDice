from rest_framework import serializers
from Partidas.models import Partida, Jugador


class PartidaListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partida
        fields = ['id', 'post']

class PartidaDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partida
        fields = ['id', 'post']

class JugadorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = ['id', 'usuario', 'partida', 'aceptado', 'fecha_union']

class JugadorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = ['id', 'usuario', 'partida', 'aceptado', 'fecha_union']