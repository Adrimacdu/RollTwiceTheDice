from rest_framework import serializers
from Partidas.models import Partida, Jugador


class PartidaListSerializer(serializers.ModelSerializer):

    lista_jugadores = serializers.SerializerMethodField()

    class Meta:
        model = Partida
        fields = (
                'id',
                'post',
                'lista_jugadores'
             )

    def get_lista_jugadores(self, obj):
        jugadores = Jugador.objects.filter(partida=obj)
        return JugadorListSerializer(jugadores, many=True).data

class PartidaDetailSerializer(serializers.ModelSerializer):

    lista_jugadores = serializers.SerializerMethodField()

    class Meta:
        model = Partida
        fields = (
                'id',
                'post',
                'lista_jugadores'
             )

    def get_lista_jugadores(self, obj):
        jugadores = Jugador.objects.filter(partida=obj)
        return JugadorListSerializer(jugadores, many=True).data
    

class JugadorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = (
                'id', 
                'usuario',
                'partida', 
                'aceptado',
                'fecha_union'
              )

class JugadorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = (
                'id', 
                'usuario',
                'partida', 
                'aceptado',
                'fecha_union'
              )