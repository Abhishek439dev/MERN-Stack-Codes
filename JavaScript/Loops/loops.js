//While loop
i = 1;
while(i<=10){
        console.log(i);
    i += 2;
}

console.log("____________________");

//for-loop
for(a = 10; a>=1; a--){
    if(a%2==0){
        console.log(a+" is even.");
    }else{
        console.log(a+" is odd.")
    }
}
console.log("____________________");

//do-while loop
x = 10;
do{
    if(x%2==0){
        console.log(x);
    }
    x--;
}while(x>=1);

console.log("____________________");

//for-of loop
let arr = ["hello", 12, 12.5, false, null, true, 40];
for(const value of arr){
    console.log(value);
}
