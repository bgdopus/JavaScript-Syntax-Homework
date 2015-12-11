var a = 2,
    b = 5,
    c = -3;

var d = Math.pow(b, 2) - 4 * a * c;
//console.log(d);

if (d < 0) {
    console.log('No real roots');
} else { 
if (d === 0) {
        var x = -(b / 2 * a);
        console.log(x);
}else {
        var x1 = (-b - Math.sqrt(d)) /( 2 * a);
        var x2 = (-b + Math.sqrt(d)) /( 2 * a);
        console.log(x1);
        console.log(x2);
}


}