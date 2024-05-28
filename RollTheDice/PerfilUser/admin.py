from django.contrib import admin
from .models import PerfilUser
# Register your models here.

class PerfilUserAdmin(admin.ModelAdmin):

    list_display= ['id', 'usuario', 'descripcion']
    list_display_links= ['id', 'usuario', 'descripcion']
    search_fields= ['usuario', 'descripcion']
    ordering= ['id']

admin.site.register(PerfilUser, PerfilUserAdmin)