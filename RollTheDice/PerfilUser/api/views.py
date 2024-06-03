from django.shortcuts import render
from rest_framework import viewsets, mixins, filters, views
from PerfilUser.models import PerfilUser
from PerfilUser.api.serializers import PerfilDetailSerializer, PerfilUserSerializer
from rest_framework.permissions import IsAuthenticated


class PerfilListSet(mixins.ListModelMixin, viewsets.GenericViewSet):

    model = PerfilUser
    serializer_class = PerfilUserSerializer
    pagination_class = None
    ordering = 'id'
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['id', 'usuario', 'descripcion']
    search_fields = ['usuario']
    queryset = PerfilUser.objects.all()
    permission_classes = [IsAuthenticated]


class PerfilDetailSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):

    serializer_class = PerfilDetailSerializer
    queryset = PerfilUser.objects.all()
    permission_classes = [IsAuthenticated]
