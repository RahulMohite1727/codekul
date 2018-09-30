var num1 = 0;
var num2 = 1;
var num3;
var fibonacciLimit = 10;
console.log(num1);
console.log(num2);
for (var i = 1; i <= fibonacciLimit; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(num3);
}
