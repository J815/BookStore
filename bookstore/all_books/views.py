from django.shortcuts import render
from rest_framework import viewsets
from .models import Book_List, CartItem
from .serializers import BookSerializer,CartItemSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book_List.objects.all()
    serializer_class = BookSerializer

@api_view(['DELETE'])
def clear_cart(request):
    CartItem.objects.all().delete()
    return Response(status=204)

@api_view(['PUT'])
def update_cart_item(request, item_id):
    quantity = request.data.get('quantity')

    try:
        cart_item = CartItem.objects.get(id=item_id)
        cart_item.quantity = quantity
        cart_item.save()
    except CartItem.DoesNotExist:
        return Response(status=404)

    cart_items = CartItem.objects.all()
    serializer = CartItemSerializer(cart_items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_to_cart(request):
    book_id = request.data.get('book_id')
    quantity = request.data.get('quantity')
    author = request.data.get('author')
    price = request.data.get('price')

    try:
        book = Book_List.objects.get(pk=book_id)
        cart_item, created = CartItem.objects.get_or_create(book=book)
        cart_item.quantity = int(quantity)
        cart_item.author = author
        cart_item.price = price
        cart_item.save()
        return Response({'message': 'Item added to cart successfully'})
    except Book_List.DoesNotExist:
        return Response({'error': 'Book not found'}, status=400)

@api_view(['DELETE'])
def remove_from_cart(request,item_id):

    try:
        cart_item = CartItem.objects.get(id=item_id)
        cart_item.delete()
        return Response({'message': 'Item removed from cart successfully'})
    except CartItem.DoesNotExist:
        return Response({'error': 'Book not found'}, status=400)

@api_view(['GET'])
def get_cart_items(request):
    cart_items = CartItem.objects.all()
    serializer = CartItemSerializer(cart_items, many=True)
    return Response(serializer.data)