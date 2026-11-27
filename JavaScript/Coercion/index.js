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


//The PLUS operator performs normal arithmetic addition when both operands are numbers.
console.log(4+2);     // 6
//If anyone of the operands is a string, the plus operator will perform string concatenation.
console.log(4+"2");   // "42"
console.log(1+"1");   // "11"

//If none of the operands is a string(they can be boolean or object or null etc.), it will try to convert the operands to a number and perform addition.
console.log(3+undefined);  // (3+NaN) = NaN
console.log(3+null); // (3+0) = 3

//Addition operations with objects.
let obj = {}; //empty object. 
console.log(4+ obj); //(4 + [object Object] = 4[object Object]     ([object Object is a string] hence string concatenation took place.).

//toString overrided to return a number string.
let obj1 = {
    toString(){
        return "89";
    }
}
console.log(11+obj1);  //(11 + "89") = string concatenation as one of the operands is a string.  = "1189"

//toString overrided to return a number.
let obj2 = {
    toString(){
        return 89; 
    }
}
console.log(11+obj2);  //addition takes place -> 11+89 = 100

//toString overrided to return a boolean value.
let obj3 = {
    toString(){
        return true;
    }
}
console.log(11+obj3);  //Anything except string converts to a number in plus operation. hence, 11 + 1 = 12

//toString overrided to return an object.
let obj4 = {
    toString(){
        return {};
    }
}
console.log(11+obj4); //both valueOf() and toString() returns object which leads to TypeError exception.



/*Subtract Operations with Objects
Example 1: No Overriding of methods*/
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
Note: Even if the object was not empty and has some key-values the output remained same. As the output is not dependent on contents of object, as an object with some
entries will also result in calling the toString() method which will return that [object Object] string which again converts to NaN.
*/

//Example 2: valueOf() overrided to return a number.
let obj2 = {
    x: 10, 
    valueOf(){
        return 99;
    }
}

console.log(100 - obj);  //output: 1
/* Here the obj2 will be converted to a primitive type using the ToPrimitive and OrdinaryToPrimitive abstract operations to finally call the valueOf() method.
The valueOf() is overrided to return 99. Hence, the calculation occurs (100 - 99) = 1
*/

//Example 3: toString() overrided to return a number string.
let obj3 = {
    x: 10, 
    toString(){
        return "80";
    }
}

console.log(100 - obj3); //output: 20
/* In this example, the obj3 will be converted to a primitive type using the ToPrimitive and OrdinaryToPrimitive abstract operations to finally call the valueOf() 
method, but it will return its default value which the the object but its non-primitive. As a result the next method toString will be called andn it will return a 
string value "80". This value is send to ToNumber abstract operation where it is converted to Number 88. 
Hence, the calculation occurs (100 - 80) = 20
*/


//Example 4: toString() overrided to return an object.
let obj4 = {
    x: 10, 
    toString(){
        return {};
    }
}
console.log(100 - obj4); //output: TypeError

/* Here the obj4 will undergo coercion as above to finally call the methods. At first the valueOf() method is called which returns the original object obj4, as it is
non-primitive, the loop calls the second function toString() which returns an empty object {}. Now, as both the methods have returned object instead of a primitive
value. A TypeError exception is thrown because this object obj4 cannot be converted to a primitve value */
