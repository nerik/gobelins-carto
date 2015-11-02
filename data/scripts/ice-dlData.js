var proc = require('child_process');
for (var i = 1; i < 144; i++) {
  var n = (i < 100) ? ("00"+i).slice(-3) : i;
  var url = `ftp://sidads.colorado.edu/pub/DATASETS/NSIDC0393_GLAS_SI_Freeboard_v01/glas_seaice_vectors/laser3k/laser3k0${n}002.txt`;
  proc.exec(`wget ${url}`);
}
