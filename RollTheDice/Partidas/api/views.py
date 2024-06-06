from rest_framework import viewsets, mixins, filters, views
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.core.mail import send_mail
from rest_framework.permissions import IsAuthenticated
from Partidas.models import Partida, Jugador
from .serializers import PartidaListSerializer, JugadorListSerializer, PartidaDetailSerializer, JugadorDetailSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.http import HttpResponse


class PartidaListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):

    model = Partida
    serializer_class = PartidaListSerializer
    pagination_class = None
    ordering = 'id'
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['id']
    search_fields = ['id']
    queryset = Partida.objects.all()
    permission_classes = [IsAuthenticated]


class PartidalDetailSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):

    serializer_class = PartidaDetailSerializer
    queryset = Partida.objects.all()
    permission_classes = [IsAuthenticated]


class JugadorListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):

    model = Jugador
    serializer_class = JugadorListSerializer
    pagination_class = None
    ordering = 'id'
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['id', 'usuario', 'partida', 'aceptado', 'fecha_union']
    search_fields = ['id', 'usuario', 'partida', 'aceptado', 'fecha_union']
    queryset = Jugador.objects.all()
    permission_classes = [IsAuthenticated]


class JugadorDetailViewSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):

    serializer_class = JugadorDetailSerializer
    queryset = Jugador.objects.all()
    permission_classes = [IsAuthenticated]


class ActualizarJugadorView(APIView):
    def post(self, request, jugador_id, format=None):
        jugador = get_object_or_404(Jugador, pk=jugador_id)
        jugador.aceptado = True
        jugador.save()

        # Obtener el email del usuario que creó el post
        partida = jugador.partida
        post = partida.post
        usuario_creador = post.usuario_creador
        email = usuario_creador.email

        # Enviar correo al jugador
        send_mail(
            f'¡Has sido aceptado en la partida!',
            f'Hola, Has sido aceptado en la partida: {post.titulo}, ponte en contacto con {email} para poder comenzar tu aventura',
            'adrianmaciad123@gmail.com',
            [jugador.usuario.email],
            fail_silently=False,
        ) 

        response = HttpResponse()

        # Configurar el encabezado Access-Control-Allow-Origin
        response['Access-Control-Allow-Origin'] = 'https://rolltwicethedice.es'

        # Devolver la respuesta
        return response
