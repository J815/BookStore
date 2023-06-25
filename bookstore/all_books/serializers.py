from rest_framework import serializers
from .models import Book_List, CartItem

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book_List
        fields = '__all__'


class CartItemSerializer(serializers.ModelSerializer):
    book= BookSerializer()
    class Meta:
        model = CartItem
        fields = '__all__'