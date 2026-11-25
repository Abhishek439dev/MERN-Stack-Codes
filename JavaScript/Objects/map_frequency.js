let word = "Abhishek saxena";

let obj = {};

for(let key of word){
    if(obj[key]){
        obj[key] += 1;
    }else{
        obj[key] = 1;
    }
}

console.log(obj);