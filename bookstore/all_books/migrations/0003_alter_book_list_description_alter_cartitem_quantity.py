# Generated by Django 4.2.2 on 2023-06-24 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('all_books', '0002_cartitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book_list',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='cartitem',
            name='quantity',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
