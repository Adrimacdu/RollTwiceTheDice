from django.db.models.signals import post_save
from django.dispatch import receiver
from Usuarios.models import MyUser
from .models import PerfilUser


@receiver(post_save, sender=MyUser)
def create_user_profile(sender, instance, created, **kwargs):

    if created:
        PerfilUser.objects.create(usuario=instance)


@receiver(post_save, sender=MyUser)
def save_user_profile(sender, instance, **kwargs):

    instance.perfiluser.save()
