//Operators are the special symbols which are used to perform some operations on values called operands.

//i) Arithmetic operator:

var a = 10;
var b = 5;

console.log(a + b);  //addition
console.log(a - b);  //substraction
console.log(a * b);  //multiplication
console.log(a / b);  //division
console.log(a % b);  //modulo
console.log(a ** b); //exponent

console.log("--------------------------");
//ii) Assignment operator:

let x = 10; //Simple assignment operator
//Compound assignment operators.
console.log(x += 5);     //addition assignment operator. x = x+5; x = 10+5 = 15
console.log(x -= 5);     //substraction assignment operator. x = x-5; x = 15-5 = 10
console.log(x *= 5);     //multiplication assignment operator. x = x*5; x = 10*5 = 50
console.log(x /= 5);     //division assignment operator. x = x/5; x = 50/5 = 10
console.log(x %= 5);     //modulo assignment operator. x = x%5; x = 10%5 = 0
console.log(x **= 5);    //exponent assignment operator. x = x^5 = 0^5 = 0

console.log("--------------------------");

// iii) Relational operators: These are use to compare two values. Also called as comparison operators. Provides a boolean output.
console.log(5>4); //greater than operator.
console.log(5<4); //lesser than operator.
console.log(5 >= 2); //greater than or equal to operator. 
console.log(4 <= 2); //lesser than or equal to operator.

console.log("--------------------------");