# Generated by Django 3.2.6 on 2021-08-29 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vission', '0002_alter_vission_vissioninfo'),
    ]

    operations = [
        migrations.CreateModel(
            name='VissionBg',
            fields=[
                ('VissionBgId', models.AutoField(primary_key=True, serialize=False)),
                ('VissionBgPhoto', models.CharField(max_length=100)),
            ],
        ),
    ]