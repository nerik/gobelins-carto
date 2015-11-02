var proc = require('child_process');
var fs = require('fs');
var cols = '    Latitude   Longitude   Freeboard   Thickness';
console.log(process.env.PWD)
for (var i = 1; i < 144; i+=1) {
  var n = (i < 100) ? ("00"+i).slice(-3) : i;
  var filename = `raw/laser3k0${n}002.txt`;
  var tail = 25;

  proc.exec(`tail -n+${tail} ${filename} > transf/${i}.csv`);
  proc.exec(`awk 'NR % 30 == 0' transf/${i}.csv > tmp/${i}.csv && mv tmp/${i}.csv transf/${i}.csv`);
  // console.log(fs.readFileSync(filename,  'UTF-8'));
}
proc.exec(`cat transf/*.csv > tmp.csv`);
proc.exec(`echo ${cols} > cols`);
proc.exec(`cp cols ice_merged.csv`);
proc.exec(`cat tmp.csv >> ice_merged.csv`);
