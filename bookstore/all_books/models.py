from django.db import models

# Create your models here.
class Book_List(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(null=True,blank=True)
    image = models.FileField(blank=True,null=True)

    def __str__(self):
        return self.title



class CartItem(models.Model):
    book = models.ForeignKey(Book_List, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(null=True,blank=True)

    def __str__(self):
        return f"{self.book.title} ({self.quantity})"
