from django.db import models
from django.utils.timezone import now
from Usuarios.models import MyUser
# Create your models here.

class Post(models.Model):
    titulo = models.CharField(max_length=40, blank=False, null=False, verbose_name='Titulo')
    usuario_creador=models.ForeignKey(MyUser, on_delete=models.CASCADE, null=False, verbose_name='Usuario_creador')
    descripcion= models.TextField(max_length=400, blank=True, null=True, verbose_name='Descripcion')
    fecha=models.DateTimeField(default=now)

    def __str__(self):
        return self.titulo + " ---- " + self.usuario_creador.email + " ---- " + str(self.fecha)
    