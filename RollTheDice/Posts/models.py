from django.db import models
from django.utils.timezone import now
from Usuarios.models import MyUser


class Post(models.Model):

    usuario_creador = models.ForeignKey(MyUser, on_delete=models.CASCADE, null=False, verbose_name='Usuario_creador')
    titulo = models.CharField(max_length=40, blank=False, null=False, verbose_name='Titulo')
    descripcion = models.TextField(max_length=400, blank=True, null=True, verbose_name='Descripcion')
    numero_jugadores = models.IntegerField(default=2, blank=False, null=False, verbose_name='Numero de jugadores')
    fecha = models.DateTimeField(default=now)

    def __str__(self):
        return self.titulo + " ---- " + self.usuario_creador.email
