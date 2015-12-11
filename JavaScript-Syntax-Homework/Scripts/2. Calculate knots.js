
var kmh = 112,
    speedKnots = calculateKnots(kmh);
console.log(speedKnots);

function calculateKnots(kmh) {
    var knots = Math.round((kmh * 0.539956803) * 100) / 100;
    return knots;
}