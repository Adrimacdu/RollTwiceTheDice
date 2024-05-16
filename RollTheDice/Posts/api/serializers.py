from rest_framework import serializers, response, status
from Posts.models import *

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'id',
            '__str__',
        )