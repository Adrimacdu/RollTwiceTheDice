from Usuarios.models import MyUser
from django.db import models


class PerfilUser(models.Model):

    usuario = models.OneToOneField(MyUser, on_delete=models.CASCADE, related_name='perfiluser')
    descripcion = models.TextField(blank=True, null=True)

    def get_descripcion(self):
        return self.descripcion

    def __str__(self):
        return self.usuario.name
