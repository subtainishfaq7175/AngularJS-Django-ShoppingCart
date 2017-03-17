from django.contrib.auth.models import User
from rest_framework import serializers

from .models import *

class CartSerializer(serializers.ModelSerializer):
    products =  serializers.PrimaryKeyRelatedField(many=True, read_only=True)


    class Meta:
        model = Cart
        fields = ('cart_name', 'artist', 'products')

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('price', 'image', 'title', 'description')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

