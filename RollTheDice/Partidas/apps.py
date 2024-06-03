from django.apps import AppConfig


class PartidasConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Partidas'

    def ready(self):
        import Partidas.signals
