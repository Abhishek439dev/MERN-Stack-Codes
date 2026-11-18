//Unary operators:
/*i) Increment operator:
a. Prefix increment-
*/
x = 10;
y = ++x;

console.log(x, y);

//b. postfix increment-
a = 10;
b = a++;

console.log(a, b);

/*ii) Decrement operator:
a. Prefix decrement-
*/
p = 5;
q = --p;
console.log(p, q);

//b. postfix decrement-
m = 5;
n = m--;

console.log(m, n);


console.log("__________________");

//iii) Unary plus:

let c = 10;
let d = +c;
console.log(c, d);

let g = "10";
let h = +g;
console.log(typeof(g));
console.log(typeof(h));

//iv) Unary minus:

let e = "10";
let f = -e;
console.log(e, f);

// NOT (!) and typeof are also unary operators.

console.log("__________________");

//v) ternary operator:
y = 10 > 6 ? "10 is greatest" : "6 is greater";
console.log(y);