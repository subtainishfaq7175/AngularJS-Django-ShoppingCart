from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User


class Cart(models.Model):
    cart_name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)


class Product(models.Model):
    price = models.CharField(max_length=100,default="0.00")
    image = models.CharField(max_length=100,default="0.00")
    title = models.CharField(max_length=100)
    description = models.TextField()



@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)