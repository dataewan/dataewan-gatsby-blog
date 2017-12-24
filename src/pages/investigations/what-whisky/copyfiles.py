#!/usr/local/bin/python3

from shutil import copyfile
import os

WHISKY_DIR='/Users/ewannicolson/dev/whisky-vis/'

jsfilestocopy = [
    'ClusterSummary.js',
    'InformationTable.js',
    'Map.js',
    'Overview.js',
    'Radial.js',
    'VariableProjection.js',
]

for jsfile in jsfilestocopy:
    origin = os.path.join(
        WHISKY_DIR,
        'whisky-vis/src',
        jsfile
    )
    destination = "_" + jsfile
    copyfile(origin, destination)

# now copy over the json files

jsonfilestocopy = [
    'geo.json',
    'whisky.json',
    'rivers.json'
]

for jsonfile in jsonfilestocopy:
    origin = os.path.join(
        WHISKY_DIR,
        'whisky-vis/src',
        jsonfile
    )
    copyfile(origin, jsonfile)
