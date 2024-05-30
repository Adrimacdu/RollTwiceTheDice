# Generated by Django 4.2 on 2024-05-30 18:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=40, verbose_name='Titulo')),
                ('descripcion', models.TextField(blank=True, max_length=400, null=True, verbose_name='Descripcion')),
                ('numero_jugadores', models.IntegerField(default=2, verbose_name='Numero de jugadores')),
                ('fecha', models.DateTimeField(default=django.utils.timezone.now)),
                ('usuario_creador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Usuario_creador')),
            ],
        ),
    ]
