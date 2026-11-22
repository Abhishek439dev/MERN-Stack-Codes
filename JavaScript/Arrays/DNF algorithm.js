//The Dutch National Flag (DNF) algorithm was designed by Edsger Dijkstra, to sort an array containing zeros and ones such that the zeros get to one side and ones get separated to another side of array.
let arr = [1, 0 , 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0];

//this is a function designed to swap the numbers at i and j indexes.
function Swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//This is the main function where separation logic is written.
function separate(){
    let i = 0; //the variable i index starts from zero (Starting of the array).
    let j = (arr.length)-1; //the variable j index starts from the last index of array. 

    while(i<=j){  //The loop will stop at the center of array (When both the indexes become equal).
    //This is the condition check, if i index encounters a 1, we need to call the Swap function to interchange the values of i and j ( 1 in i reaches to end). 
    if(arr[i]==1){
        Swap(arr, i, j);
        j--;  //Now When we have transported the 1 holded by i to the jth position we can decrease the j index by 1 because the current position already got a 1, so its the time to check the next index.
    }else{
        i++;  //if we dont encounter a 1 or we can say that there is a zero at i index. We need not to exchange it and we can move to next index and check it.
    }
  }
console.log(arr);  //After the full execution of loop, we can print the array.
}

separate(); //calling the function.
