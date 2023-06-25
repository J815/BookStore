from django.contrib import admin
from .models import Book_List,CartItem

# Register your models here.
admin.site.register(Book_List)
admin.site.register(CartItem)