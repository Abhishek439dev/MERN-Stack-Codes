function isPrime(num){
    for(i=2; i<=num-1; i++){
        if(num % i == 0){
            return num+" is not a prime number";
        }
    }
    return num+" is a prime number.";
}

console.log(isPrime(17));