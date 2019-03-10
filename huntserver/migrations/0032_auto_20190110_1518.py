# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2019-01-10 20:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('huntserver', '0031_auto_20190110_0902'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prepuzzle',
            name='hunt',
            field=models.OneToOneField(blank=True, help_text=b'The hunt that this puzzle is a part of, leave blank for no associated hunt.', null=True, on_delete=django.db.models.deletion.CASCADE, to='huntserver.Hunt'),
        ),
    ]