#!/usr/bin/env node
var fs = require("fs")
var files = fs.readdirSync('.');
var lines = [
  [
    't',
    'id',
    'lat',
    'lng',
    'available_bike_stands',
    'available_bikes',
    'delta'
  ]
]

var lineByIds = {};

files.slice(0,200).forEach(function (filename) {
  if (filename === '.DS_Store') return;
  var file = fs.readFileSync(filename).toString();
  var stations = JSON.parse(file);
  var date = filename.slice(6) + 'T' + filename.slice(0,2) + ':' + filename.slice(3,5) + ':00';

  stations.forEach(function (station) {
    var delta = 0;
    if (lineByIds[station.number]) {
      delta = station.available_bikes - lineByIds[station.number][5];
    }
    // console.log(line)
    var line = [
      date,
      station.number,
      station.position.lat,
      station.position.lng,
      station.available_bike_stands,
      station.available_bikes,
      delta
    ]

    lineByIds[station.number] = line;

    lines.push(line);
  })
})

lines.forEach(function (line) {
  console.log(line.join(','))
})
