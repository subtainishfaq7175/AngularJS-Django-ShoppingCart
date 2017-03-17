from django.conf.urls import  url
from shoppingrest.api.views import  product_list,product_detail,cart_list,cart_detail

urlpatternsinternal =[
    url(r'^products/$', product_list, name='product_list'),
     url(r'^products/(?P<pk>[0-9]+)$', product_detail, name='product_detail'),
     url(r'^carts/(?P<pk>[0-9]+)$', cart_detail, name='cart_detail'),
     url(r'^carts/$', cart_list, name='cart_list'),

]