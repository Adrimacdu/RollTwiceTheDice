from django.shortcuts import render
from Usuarios.models import MyUser
from rest_framework import viewsets, mixins, filters, views
from Usuarios.api.serializers import MyUserListSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
# Create your views here.


class MyUserListViewSet( mixins.ListModelMixin,
                    viewsets.GenericViewSet):
    model= MyUser
    serializer_class = MyUserListSerializer
    pagination_class = None
    ordering = 'id'
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['email', 'username']
    search_fields = ['email']
    queryset = MyUser.objects.all()