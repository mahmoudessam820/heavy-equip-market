# Generated by Django 5.0.2 on 2024-07-08 16:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_category_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='choice',
        ),
    ]
