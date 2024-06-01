from django.shortcuts import render
from Usuarios.models import MyUser
from rest_framework import viewsets, mixins, filters, views
from Usuarios.api.serializers import MyUserListSerializer, MyUserDetailSerializer
from Posts.api.serializers import PostListSerializer
from Posts.models import Post
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.


class MyUserListViewSet( mixins.ListModelMixin,
                    viewsets.GenericViewSet):
    model= MyUser
    serializer_class = MyUserListSerializer
    pagination_class = None
    ordering = 'id'
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['email', 'name']
    search_fields = ['email']
    queryset = MyUser.objects.all()

class CreateUserView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = MyUserListSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UsuarioPostsView(APIView):

    def get(self, request):
        usuario = request.user
        posts = Post.objects.filter(usuario_creador=usuario)
        serializer = PostListSerializer(posts, many=True)
        return Response(serializer.data)

class UsuariolDetailSet(mixins.CreateModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin,
                        viewsets.GenericViewSet):

    serializer_class = MyUserDetailSerializer
    queryset = MyUser.objects.all()