from rest_framework import viewsets, mixins, filters, views
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from Partidas.models import Partida, Jugador
from .serializers import PartidaListSerializer, JugadorListSerializer, PartidaDetailSerializer, JugadorDetailSerializer


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
