from django.db import models
from Posts.models import Post
from Usuarios.models import MyUser
from django.db import models

class Partida(models.Model):
    post = models.OneToOneField(Post, on_delete=models.CASCADE, related_name='post')
    usuario_jugador = models.ForeignKey(MyUser, on_delete=models.CASCADE, null=False, verbose_name='usuario_jugador')
    aceptado = models.BooleanField(default=False)

    def __str__(self):
        return self.post + ' ----- ' + self.usuario_jugador.name + ' ----- ' + self.aceptado



