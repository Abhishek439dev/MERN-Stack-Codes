let obj = {
    name: "Abhishek",
    qualification: "MCA",
    passing_year: 2026,
    university: "MUJ",
    result_out: true,
    passed: true,
    percentage: 85.5
};

/*To add a new key-value pair we can use the same syntax as we do while fetching a value. This syntax overrides the value if the matching key is present in the object.
If the matching key is not present in the object, it will create a new key-value pair*/
obj.mode = "Online";
obj["specialization"] = "cloud";
console.log(obj);

/* To delete a key-value pair from the object we can use the keyword 'delete' followed by the same fetching syntax */
delete obj.passed;
delete obj["result_out"];
console.log(obj);
