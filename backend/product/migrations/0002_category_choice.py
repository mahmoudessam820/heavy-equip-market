# Generated by Django 5.0.2 on 2024-07-04 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='choice',
            field=models.CharField(choices=[('ARTICULATED TRUCKS', 'Articulated Trucks'), ('ASPHALT TRUCKS', 'Asphalt Trucks'), ('BACKHOE LOADERS', 'Backhoe Loaders'), ('COLD PLANERS', 'Cold Planers'), ('COMPACT TRACK LOADERS', 'Compact Track Loaders'), ('COMPACTORS', 'Compactors'), ('DOZERS', 'Dozers'), ('EXCAVATORS', 'Excavators'), ('FORESTRY MACHINES', 'Forestry Machines'), ('MATERIAL HANDLERS', 'Material Handlers'), ('MOTOR TRAILERS', 'Motor Trailers'), ('OFF-HIGHWAY TRUCKS', 'Off-Highway Trucks'), ('PIPELAYERS', 'Pipelayers'), ('ROAD RECLAMERS', 'Road Reclaimers'), ('SKID STEER LOADERS', 'Skid Steer Loaders'), ('WHEEL DOZERS', 'Wheel Dozers'), ('TELEHANDLERS', 'Telehandlers'), ('TRACK LOADERS', 'Track Loaders'), ('WHEEL LOADERS', 'Wheel Loaders'), ('WHEEL TRACTOR SCRAPERS', 'Wheel Tractor Scrapers')], default='ARTICULATED TRUCKS', max_length=100),
        ),
    ]
