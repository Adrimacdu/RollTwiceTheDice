from django.shortcuts import render
from Posts.models import Post
from rest_framework import viewsets, mixins, filters, views
from Posts.api.serializers import PostListSerializer, PostDetailSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
# Create your views here.


class PostListViewSet( mixins.ListModelMixin,
                    viewsets.GenericViewSet):
    model= Post
    serializer_class = PostListSerializer
    pagination_class = None
    ordering = 'id'
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['titulo', 'id']
    search_fields = ['titulo']
    queryset = Post.objects.all()


class PostDetailSet(  mixins.CreateModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin,
                        viewsets.GenericViewSet):
    """
    Si tiene id en la url permite modificar y borrar un resultado de aprendizaje, si no la tiene permite crearlo
    """    
    serializer_class = PostDetailSerializer
    queryset = Post.objects.all()

   

    
