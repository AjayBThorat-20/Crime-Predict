# Generated by Django 3.2.6 on 2021-08-26 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AbtDwST',
            fields=[
                ('Abt_Dw_ST_Id', models.AutoField(primary_key=True, serialize=False)),
                ('Abt_Dw_ST_Title', models.CharField(max_length=50000)),
                ('Abt_Dw_ST_Img', models.CharField(max_length=50000)),
                ('Abt_Dw_ST_Des', models.CharField(max_length=99999999999999999)),
            ],
        ),
    ]
