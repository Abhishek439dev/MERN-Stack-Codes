function isEven(num){
    if(num%2==0){
        return num+" is Even";
    }else{
        return num+" is Odd";
    }
}

for(i=1; i<=50; i++){
    console.log(isEven(i));
}