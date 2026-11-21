//this function takes a number argument to check if it is a prime number or not. 
//it checks if the number is divisible completely by any number other than 1 or itself from 2 to that number.
function isPrime(num){
    for(i=2; i<=num-1; i++){
        if(num % i == 0){
            return num+" is not a prime number";
        }
    }
    return num+" is a prime number.";
}

//calling the function with an argument and printing the returned output.
console.log(isPrime(17));
