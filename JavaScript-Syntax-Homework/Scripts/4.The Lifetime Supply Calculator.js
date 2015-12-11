var age = 38,
    maxAge = 118,
    food = 'chocolate',
    foodPerDay = 0.5;
console.log(calcSupply(age, maxAge, food, foodPerDay));
function calcSupply(age, maxAge, food, foodPerDay) {
    var ageDef = maxAge - age,
        days = ageDef * 365,
        maxFood = days * foodPerDay;
    var sentence = maxFood + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.';
    return sentence;
};
