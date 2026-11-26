//if both arguments are numbers perform the arithmetic operation normally.
console.log(4-2);  // 2

//if one or both operands are string and the operation is substraction, then the strings will be converted to numbers using ToNumber() and then operation is performed.
console.log(4-"2"); // 4-2 = 2
console.log(1-"1");   // 1-1 = 0
console.log("5" - "2"); //5-2 =3

//if the arguments are boolean, return 1 for true and 0 for false.
console.log(5-true);  // 5-1 = 4
console.log(true - false); // 1-0 = 1

//for null arguments, return 0
console.log(5-null);  // 5-0 = 5

//for undefined argument, return NaN.
console.log(5-undefined);  // 5-NaN = NaN

//the plus operator performs normal arithmetic addition when both operands are numbers.
console.log(4+2);     // 6

//But when any of the two operands is a string, it concatenates the operands to return a string. 
console.log(4+"2");   // "42"
console.log(1+"1");   // "11"

