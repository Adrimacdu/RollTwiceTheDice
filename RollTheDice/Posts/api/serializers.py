from rest_framework import serializers, response, status
from Posts.models import *

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            '__all__'
        )

class PostDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            '__all__'
        )