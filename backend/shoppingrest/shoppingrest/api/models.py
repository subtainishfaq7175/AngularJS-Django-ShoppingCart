from django.db import models

class Product(models.Model):
    price = models.CharField(max_length=100,default="0.00")
    imageUrl = models.CharField(max_length=100,default="0.00")
    title = models.CharField(max_length=100)
    description = models.TextField()


class Cart(models.Model):
    price = models.CharField(max_length=100,default="0.00")
    title = models.CharField(max_length=100)
    description = models.TextField()

