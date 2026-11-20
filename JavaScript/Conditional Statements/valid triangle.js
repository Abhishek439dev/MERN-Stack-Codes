A = 12;
B = 12;
C = 12;

if(A+B < C || B+C < A || C+A < B){
    console.log("Its not a valid triangle");
}else if(A==B && B==C && C==A){
    console.log("Its an equilateral triangle");
}else if(A!=B && B!=C && C!=A){
    console.log("Its a Scalene triangle");
}else{
    console.log("Its an Isosceles triangle");
}
