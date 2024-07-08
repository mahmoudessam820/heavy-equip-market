from django.contrib import admin
from product.models import Product, Category



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    search_fields = ('name',)
    list_filter = ('created_at', 'updated_at')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category',  'price', 'stock', 'created_at', 'updated_at')
    search_fields = ('name', 'category__name', 'sku')
    list_filter = ('category', 'created_at', 'updated_at')