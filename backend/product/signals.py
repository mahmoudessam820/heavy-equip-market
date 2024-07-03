import uuid
from django.db.models.signals import pre_save
from django.dispatch import receiver
from product.models import Product



# Signal to generate a unique SKU "Stock Keeping Unit" before saving a Product instance
@receiver(pre_save, sender=Product)
def set_unique_sku(sender, instance, **kwargs):
    if not instance.sku:
        instance.sku = str(uuid.uuid4()).replace('-', '').upper()[:10]