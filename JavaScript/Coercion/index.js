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

let obj = {};

console.log(10 - obj);   //NaN

/* 
i) In this operation coercion will take place to make the operands of same type. Now 10 is already a number but obj is an object so we need to convert it to number as well.
ii) To convert obj to a number the ToPrimitive abstract operation will be called with a hint or preferred_type set to Number.
iii) Now the OrdinaryToPrimitive ( obj, hint ) abstract operation will be called with this object and hint.
iv) As the hint is Number, the array methodNames will store methods in order <<valueOf, toString>>.
v) First the valueOf() method will be called and it will return the same object. Object{} which is a non-primitive value.
vi) So the second method toString() will be called and it will return the string value [object Object] which is a primitive value.
vii) This result will again be send to the ToNumber abstract operation where it be converted to a number according to the rules. 
Now, the [object Object] string is not a numbered string like "34524398", so it can't be converted to a valid number. Hence, it will be converted to an invalid 
number NaN.
The final output of coercion of obj will be NaN.

so, console.log(10 - NaN); //Output:  NaN
*/
