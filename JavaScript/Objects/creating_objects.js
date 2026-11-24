//objects are created using a variable declaration followed by a pair of curley braces where key-value pairs are stored separated by commas.
//At the end of closing curley brace a semicolon marks the end of an object.
//Entries of different data-types can be entered. 
let obj = {
    name: "Abhishek",
    qualification: "MCA",
    passing_year: 2026,
    university: "MUJ",
    result_out: true,
    passed: true,
    percentage: 85.5
};

//To fetch a value from object we can follow the two methods. The dot method and the square bracket method upon the object.
console.log(obj.name);
console.log(obj["percentage"]);

//To override a value we can use the same syntax as we do while fetching it and assign it to a new value which will override the previous value.
obj.university = "Manipal_University";
obj["result_out"] = "yes";

//Printing the final object.
console.log(obj);
