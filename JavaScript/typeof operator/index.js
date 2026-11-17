a = typeof("Abhishek");   //string
b = typeof(true);         //boolean
d = typeof(245.54);       //number
e = typeof(null);         //object (historical bug)
f = typeof(undefined);    //undefined

laptop = {
    model: "HP pavillion",
    cost: 42000,
    memory: 15.9,
    touch_screen: false
}

g = typeof(laptop);      //object

console.log(a);
console.log(b);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
