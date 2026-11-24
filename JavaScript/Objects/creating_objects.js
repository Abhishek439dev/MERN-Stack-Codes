let obj = {
    name: "Abhishek",
    qualification: "MCA",
    passing_year: 2026,
    university: "MUJ",
    result_out: true,
    passed: true,
    percentage: 85.5
};

console.log(obj.name);
console.log(obj["percentage"]);

obj.university = "Manipal_University";
obj["result_out"] = "yes";

console.log(obj);