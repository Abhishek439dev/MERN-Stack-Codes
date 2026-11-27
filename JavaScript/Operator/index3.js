//Unary operators:
/*i) Increment operator:
a. Prefix increment-
*/
x = 10;
y = ++x;

console.log(x, y);       // 11 11

//b. postfix increment-
a = 10;
b = a++;

console.log(a, b);       //11 10

/*ii) Decrement operator:
a. Prefix decrement-
*/
p = 5;
q = --p;
console.log(p, q);      //4 4

//b. postfix decrement-
m = 5;
n = m--;

console.log(m, n);     //4 5


console.log("__________________");

//iii) Unary plus:

let c = 10;
let d = +c;
console.log(c, d);      //10 10

let g = "10";
let h = +g;
console.log(typeof(g));  //string
console.log(typeof(h));  //number

//iv) Unary minus:

let e = "10";
let f = -e;
console.log(e, f);       //10 -10
console.log(typeof(e));  //string
console.log(typeof(f));  //number

// NOT (!) and typeof are also unary operators.

console.log("__________________");

//ternary operator:
y = 10 > 6 ? "10 is greatest" : "6 is greater";
console.log(y);   // 10 is greatest
