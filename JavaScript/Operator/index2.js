// iv) Equality operators: These are also a type of comparison operators which are used to check if values are equal or not.

/*Abstract equality: the (==) operator checks if the types of operands are same or not. If they are not same then it converts them to same type. 
If they are already same then it calls the strict equality (===) operator. */
console.log("<----Abstract equality operators---->");
console.log( 5 == 3);
console.log( 5 == 5);
console.log( 5 == "5");
console.log(null == undefined); //Abstractyly both null and undefined are considered equal.
console.log("--------------------------");

/*Abstract inequality operator: it compare values after converting different types(if any) and gives true if they are unequal and false if they are equal.*/
console.log("<----Abstract inequality operators---->")
console.log( 5 != 5);
console.log( 5 != 3);
console.log("--------------------------");

/* Strict equality: the (===) once called checks if the types are same or not. If types of operands are different, it directly gives false output.
If the types are same, then it compares the operands on the basis of their values. */
console.log("<----Strict equality operators---->");
console.log( 5 === 3);
console.log( 5 === 5);
console.log( 5 === "5");
console.log(null === undefined); //Strictly both are different data-types. null = object and undefined = undefined.
console.log(NaN == NaN); //NaN is never equals to itself.
console.log("--------------------------");

/*Strict inequality operator: it compare values without type conversion. It gives false if values are equal and true if they are unequal.*/
console.log("<----Strict inequality operators---->");
console.log( 5 !== 5);
console.log( 5 !== "3"); //It gives true if either the types are different or the values are unequal. Here types and values both are different.
console.log("--------------------------");

//v) Logical operators:

/*1) logical AND(&&): The first condition is evaluated If its false, the output will be False. If first condition is true only then, the 
second condition is evaluated and the second condition will be the output. */
console.log( (4>2) && (5<34) );
//The values which don't give a direct boolean value are converted to their boolean values by the Abstract operation ToBoolean.

/* In numbers besides +0 -0 and NaN all the numerical values in JavaScript are 'true' values. */
console.log( 12 && 6 );
console.log( 6 && 12 );
console.log( 0 && 6); 
console.log( NaN && (4>2) );

/* undefined also converts to a false value. */
console.log(undefined && 6);

/* In strings an empty string ("") is a false value.*/
console.log("Abhishek" && "");   //Output -> empty string.
console.log("--------------------------");

//We can convert non-boolean values to boolean values using Boolean() method or !!(). Both invokes the ECMAScript ToBoolean Abstract operation,
console.log(Boolean(0));
console.log(Boolean("abhishek"));
console.log(!!(""));
console.log(!!(NaN));

console.log("--------------------------");
/*2) logical OR (||): The first condition is evaluated is it is true, the output is True. If it is false, only then the second condition 
is evaluated and it becomes the output.*/
console.log("OR operator");
console.log( (4>5) || (5>2));
console.log( NaN || 8);

console.log("--------------------------");

/*3) logical NOT (!): This operator inverts the boolean expression. It converts true to false and false to true. */
console.log("NOT operator");
console.log(!true);
console.log(!12);
console.log(!undefined);
console.log(!NaN);
console.log(!"Abhishek");

console.log("--------------------------");
/*vi) Bitwise operators: The bitwise operators perform their operations on the bit-level of operands i.e. at the binary level of operands.
The values are first converted to their binary form and then for each bit the operation is performed. */

console.log("Bitwise AND operator");
console.log(4 & 3);  //100 & 011 = 000 = 0
console.log("Bitwise OR operator");
console.log(5 | 2);
console.log("Bitwise NOT operator");
console.log(~6);  // -(n+1) = -(6+1) = -7