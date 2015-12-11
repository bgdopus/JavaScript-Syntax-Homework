var math = require('./math.js')
function calcExpression() {
    var exp = document.getElementById("expression").value;
    var res = math.eval(exp);
    document.getElementById("display").innerHTML = res;
};
