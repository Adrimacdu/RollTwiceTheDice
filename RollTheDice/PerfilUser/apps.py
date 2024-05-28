from django.apps import AppConfig


class PerfiluserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'PerfilUser'

    def ready(self):
        import PerfilUser.signals