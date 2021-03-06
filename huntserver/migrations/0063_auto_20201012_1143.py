# Generated by Django 2.2.11 on 2020-10-12 15:43

from django.db import migrations
from django.conf import settings
from os import path


def set_file(apps, schema_editor):
    puzzle_folder = "puzzles/"

    Puzzle = apps.get_model('huntserver', 'Puzzle')
    for puzzle in Puzzle.objects.all().iterator():
        puzzle_path = puzzle_folder + puzzle.puzzle_id + ".pdf"
        if(puzzle.link and path.exists(settings.MEDIA_ROOT + puzzle_path)):
            puzzle.puzzle_file = puzzle_path
            puzzle.save()


def reverse_func(apps, schema_editor):
    pass  # code for reverting migration, if any


class Migration(migrations.Migration):

    dependencies = [
        ('huntserver', '0062_auto_20201012_1018'),
    ]

    operations = [
        migrations.RunPython(set_file, reverse_func)
    ]
