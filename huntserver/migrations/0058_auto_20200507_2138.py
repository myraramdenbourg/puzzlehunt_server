# Generated by Django 2.2.11 on 2020-05-08 01:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('huntserver', '0057_auto_20200424_1159'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='puzzle',
            options={'ordering': ['-hunt', 'puzzle_number']},
        ),
    ]
