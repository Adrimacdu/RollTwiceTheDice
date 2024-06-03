from django.shortcuts import render
from Posts.models import Post
from rest_framework import viewsets, mixins, filters, views
from Posts.api.serializers import PostListSerializer, PostDetailSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
# Create your views here.


class PostListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):

    model = Post
    serializer_class = PostListSerializer
    pagination_class = None
    ordering = '-id'
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['titulo', 'id']
    search_fields = ['titulo']
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated]


class PostDetailSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):

    serializer_class = PostDetailSerializer
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated]
