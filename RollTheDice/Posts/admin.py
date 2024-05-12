from django.contrib import admin
from .models import Post
# Register your models here.

class PostAdmin(admin.ModelAdmin):

    list_display= ['id', 'titulo', 'usuario_creador']
    list_display_links= ['id', 'titulo', 'usuario_creador']
    search_fields= ['titulo', 'usuario_creador']
    ordering= ['id']

admin.site.register(Post, PostAdmin)