from django.db.models.signals import post_save
from django.dispatch import receiver
from Posts.models import Post
from .models import Partida


@receiver(post_save, sender=Post)
def save_partida(sender, instance, created, **kwargs):

    if created:
        Partida.objects.create(post=instance)
        