from django.db import models



class Cart(models.Model):
    cart_name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)

class Product(models.Model):
    price = models.CharField(max_length=100,default="0.00")
    image = models.CharField(max_length=100,default="0.00")
    title = models.CharField(max_length=100)
    description = models.TextField()
    order = models.IntegerField()
    cart = models.ForeignKey(Cart, related_name='products', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('cart', 'order')
