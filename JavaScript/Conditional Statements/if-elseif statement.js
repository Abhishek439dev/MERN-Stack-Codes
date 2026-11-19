//These statements can handle more than two conditions. 
if( null === undefined){
    console.log("Strictly null and undefined are of different types.");
}
else if(null == undefined){
    console.log("Abstractly(loosely) null and undefined are of same type.")  //this is the output.
}
else{
    console.log("These are not equal in any sense.")
}
