let age =19;

console.log("E shenove:"+ age);

age=10;

console.log("E shenove:"+ age);

let numberOne =parseInt(prompt("Write your first number"));
let numberTwo = parseInt(prompt("Let your second number"));

console.log("Thank you for cooperating woth me");




if(numberOne < numberTwo) {
    alert("Please type a number smaller than: " + numberTwo);
    numberTwo = parseInt(prompt("Let your second number"));
}

let sum= numberOne + numberTwo;
let subtract = numberOne - numberTwo;
let multipy = numberOne * numberTwo;
let divide = numberOne / numberTwo;


console.log("sum: "        + sum);
console.log("subtract: "   + subtract);
console.log("multipy: "    + multipy);
console.log("divide : "    + divide);

