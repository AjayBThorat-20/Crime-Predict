# Generated by Django 3.2.6 on 2021-08-19 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Members',
            fields=[
                ('MembersId', models.AutoField(primary_key=True, serialize=False)),
                ('MembersName', models.CharField(max_length=100)),
                ('MembersDescription', models.CharField(max_length=8000)),
                ('MembersPhoto', models.CharField(max_length=100)),
            ],
        ),
    ]
