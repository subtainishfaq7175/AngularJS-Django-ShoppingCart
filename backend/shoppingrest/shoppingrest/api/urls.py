from django.conf.urls import  url
from shoppingrest.api.views import  product_list,product_detail,cart_list

urlpatternsinternal =[
    url(r'^products/$', product_list, name='product_list'),
     url(r'^products/(?P<pk>[0-9]+)$', product_detail, name='product_detail'),
     url(r'^carts/$', cart_list, name='cart_list'),

]