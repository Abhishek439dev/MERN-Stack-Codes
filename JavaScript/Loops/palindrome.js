function check(num){
    let stringNum = "" + num;

    let i = 0;
    let j = stringNum.length-1;

    while(i <= j){
        if(stringNum[i] == stringNum[j]){
            i++;
            j--; 
        }else{
            return false;
        }
    }
    return true;
}

console.log(check(1234321));