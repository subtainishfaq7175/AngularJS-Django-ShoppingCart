from django.contrib.auth.models import User
from rest_framework import serializers

from .models import *


class CartSerializer(serializers.ModelSerializer):
    products =  serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ('cart_name', 'artist')


class ProductSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ('price', 'image', 'title', 'description', 'id')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


