# Generated by Django 3.2.8 on 2021-10-09 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moments', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='moments',
            name='title',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
