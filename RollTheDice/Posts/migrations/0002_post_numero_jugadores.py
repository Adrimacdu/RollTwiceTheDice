# Generated by Django 4.2 on 2024-05-22 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='numero_jugadores',
            field=models.IntegerField(default=2, verbose_name='Numero de jugadores'),
        ),
    ]
