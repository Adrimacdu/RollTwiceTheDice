from django.db import models
from Posts.models import Post
from Usuarios.models import MyUser
from django.db import models

class Partida(models.Model):
    post = models.OneToOneField(Post, on_delete=models.CASCADE, related_name='post')

## AUN POR COMPROBAR
    def obtener_jugadores(self):
            return self.jugadores.all()

class Jugador(models.Model):
    usuario = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    partida = models.ForeignKey(Partida, on_delete=models.CASCADE)
    aceptado = models.BooleanField(default=False)
    fecha_union = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'partida')
