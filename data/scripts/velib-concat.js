#!/usr/bin/env node
var fs = require("fs")
var files = fs.readdirSync('.');
var lines = [
  [
    'timestamp',
    'id',
    'lat',
    'lng',
    'available_bike_stands',
    'available_bikes'
  ]
]

files.forEach(function (filename) {
  if (filename === '.DS_Store') return;
  var file = fs.readFileSync(filename).toString();
  var stations = JSON.parse(file);
  var date = filename;
  stations.forEach(function (station) {
    var line = [
      filename,
      station.number,
      station.position.lat,
      station.position.lng,
      station.available_bike_stands,
      station.available_bikes
    ]
    lines.push(line);
  })
})

lines.forEach(function (line) {
  console.log(line.join(','))
})
