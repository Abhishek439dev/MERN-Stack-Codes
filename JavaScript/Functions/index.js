//the keyword 'function' is required to write a function followed by the function name and curly braces holding the code.
//This function takes a number argument and determines if it is even or odd.
function isEven(num){
    if(num%2==0){
        return num+" is Even";
    }else{
        return num+" is Odd";
    }
}

//We have called this function 50 times to check all the numbers from 1 to 50 for even or odd.
for(i=1; i<=50; i++){
    console.log(isEven(i));
}
