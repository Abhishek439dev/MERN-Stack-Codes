// Datatypes indicate the type of data which can be stored in a variable. The data stored in variables determine their data-types.

// i) number: Both decimal and float values are numbers.
let a = 10;
let b = 5.6;
console.log(a, b);

// ii) string: a group of letters or alphabets, stored under double quotes (""), or single quotes ('') or backticks (``).
let id = "Abhishek";
let car = 'Maseratti';
let job = `Google`;
console.log(id, car, job);

// iii) boolean: it stores a single value of either true or false.
let single = true;
let available = false;
console.log(single, available);

// iv) undefined: if a variable is not assigned with a value. It is an undefined variable, its value is 'undefiend'.
let life;
console.log(life);  //undefined

// v) Object: It is a non-primitive data-type, which is used to store key-value pairs under a pair of curley-braces.

var identity = {
    name: "Abhishek",
    country: "India",
    pin: 244713,
    professional : {
        job: "software developer",
        salary: 123456.34,
        company: "Google"
    }
}

console.log(identity); 
/*output:
{
  name: 'Abhishek',
  country: 'India',
  pin: 244713,
  professional: { job: 'software developer', salary: 123456.34, company: 'Google' }
}
*/

console.log(identity.professional); // { job: 'software developer', salary: 123456.34, company: 'Google' }
console.log(identity.name);         //  Abhishek
console.log(identity.professional.salary);  //123456.34


/* vi) null: It is used when we know what type of value should be assigned but we intentionally haven't assigned any value to the variable.
null is a datatype in itself but in javaScript the developer have mistakenly set the datatype of null variables to 'object' (historical bug). */

let name = null;
console.log(name);           //null
console.log(typeof(name));   //object (historical bug)

