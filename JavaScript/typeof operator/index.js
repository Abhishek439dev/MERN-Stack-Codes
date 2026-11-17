a = typeof("Abhishek");   
console.log(a);           //string

b = typeof(true);         
console.log(b);           //boolean

d = typeof(245.54);       
console.log(d);           //number

e = typeof(null);         
console.log(e);           //object (historical bug)

f = typeof(undefined);    
console.log(f);           //undefined

laptop = {
    model: "HP pavillion",
    cost: 42000,
    memory: 15.9,
    touch_screen: false
}
g = typeof(laptop);      
console.log(g);           //object
