# Generated by Django 3.2.6 on 2021-08-19 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('AboutId', models.AutoField(primary_key=True, serialize=False)),
                ('AboutInfo', models.CharField(max_length=5000)),
            ],
        ),
    ]