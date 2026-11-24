let obj = {
    name: "Abhishek",
    qualification: "MCA",
    passing_year: 2026,
    university: "MUJ",
    result_out: true,
    passed: true,
    percentage: 85.5
};

obj.mode = "Online";
obj["specialization"] = "cloud";
console.log(obj);

delete obj.passed;
console.log(obj);