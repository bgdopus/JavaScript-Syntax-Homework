var r1 = 2,
    h1 = 4;

console.log(calcCylinderVol(r1, h1));

var r2 = 5,
    h2 = 8;

console.log(calcCylinderVol(r2, h2));

var r3 = 12,
    h3 = 3;

console.log(calcCylinderVol(r3, h3));


function calcCylinderVol(r , h) {
    var vol = Math.round((Math.PI * Math.pow(r, 2) * h) * 1000) / 1000;
    return vol;
};
