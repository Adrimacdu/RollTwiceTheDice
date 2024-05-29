"""
URL configuration for RollTheDice project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from Posts.api.views import PostListViewSet, PostDetailSet
from PerfilUser.api.views import PerfilDetailSet, PerfilListSet
from Usuarios.api.views import MyUserListViewSet, CreateUserView
from rest_framework import routers
from Partidas.api.views import PartidaListViewSet, JugadorListViewSet

router = routers.DefaultRouter()
## RUTAS API DEL POST
router.register(r'post_list', PostListViewSet, basename='post_list')
router.register(r'post_detail', PostDetailSet, basename='post_detail')
## RUTAS API DE USUARIOS
router.register(r'user_list', MyUserListViewSet, basename='user_list')
## RUTAS PERFILES USUARIO
router.register(r'perfil_detail', PerfilDetailSet, basename='perfil_detail')
router.register(r'perfil_list', PerfilListSet, basename='perfil_list')
## RUTAS PARTIDAS
router.register(r'partida_list', PartidaListViewSet, basename='partida_list')
## RUTAS JUGADORES
router.register(r'jugador_list', JugadorListViewSet, basename='jugador_list')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/', include(router.urls), name='api'),
    path('auth/', include('djoser.urls')),
    path('auth/users/', CreateUserView.as_view(), name='create_user'),
]

