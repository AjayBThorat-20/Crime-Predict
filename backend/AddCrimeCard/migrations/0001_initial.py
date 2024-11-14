# Generated by Django 3.2.4 on 2021-08-21 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AddCrimeCard',
            fields=[
                ('CrimeCardId', models.AutoField(primary_key=True, serialize=False)),
                ('CrimeCardTitle', models.CharField(max_length=100)),
                ('CrimeCardDes', models.CharField(max_length=8000)),
                ('CrimeCardUrl', models.CharField(max_length=500)),
            ],
        ),
    ]
