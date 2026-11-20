/*These statements are better choice when we have to make quick choices as in if-else conditions all the conditions are evaluated.
These are better option when the code block that needs to execute is small and simple.*/
let day = 4;
switch(day){
    case 1:
        console.log("Monday");
        break;  //these are necessary to break the execution of all other code statements below.
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:   //it is necessary to handle a case other than the specified ones.
        console.log("Invalid day.")
}
