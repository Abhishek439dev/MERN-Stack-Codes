//this program checks if a number or a string is palindrome sequence or not. 

//the function 'check' takes the input and converts it into a string if it is a number because the indexed based traversal is allowed in strings or arrays but not in numbers.
function check(num){
    let stringNum = "" + num;

    let i = 0;  //starting variable index.
    let j = stringNum.length-1;  //ending variable index.

    //the while loop condition becomes false as both the index become equal and loop stops.
    while(i <= j){
        //if the letters at i and j indexes are same, proceed to move at the center of the string comparing the values.
        if(stringNum[i] == stringNum[j]){
            i++;
            j--; 
        }else{
            return false; //if the value at any index of i is not equal to its respective index of j, return false as its not palindrome.
        }
    }
    return true;  //if the loop stops without finding any mismatch, we can return true.
}

console.log(check(1234321));  //calling the function with an argument passed.
