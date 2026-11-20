//in this type of conditional statements, we can have one if-else block under another means we can have another condition under a condition. 
//In this situation both the if conditions should be true for the block of code to execute.
a = 1;
b = 2;
c = 3;

if(a>b){
    //if we are here b is definitely not the greatest among the three.
    if(a>c){  
        console.log("a is greatest");  //if a>c as well, it is the greateset among all.
    }else{
        console.log("c is the greastest"); // if both a and b are not greater than each other then c is the greatest as a and c were already ruled out above.
    }
}
//if b was greater than a, then we need to check if it is also greater than c.
else if(b > c){
    console.log("b is greatest"); //if yes, b is the greatest.
}else{
    console.log("c is greatest");  //else c is greatest.
}
