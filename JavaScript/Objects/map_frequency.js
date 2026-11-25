//String whose frequency needs to find out.
let word = "Abhishek saxena";

//declaring an empty object which will store each letter along with its frequency.
let obj = {};

//for-of loop to traverse through the given string. 
for(let key of word){
    //condition if any letter is already present in the object, increase its value by 1.
    if(obj[key]){
        obj[key] += 1;
    //if the letter is not present in the object, set its value to 1.
    }else{
        obj[key] = 1;
    }
}

//printing the object.
console.log(obj);
