from django.conf.urls import  url
from shoppingrest.api.views import  product_list,product_detail

urlpatternsinternal =[
    url(r'^products/$', product_list, name='product_list'),
     url(r'^products/(?P<pk>[0-9]+)$', product_detail, name='product_detail'),
]