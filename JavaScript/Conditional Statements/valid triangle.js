/*It is an exercise to find out if the triangle is valid or not by its sides lengths.
for a triangle to be valid, the length of one side should be smaller than the sum of the other two sides
For an equilateral triangle, all three sides are same.
For a Scalene triangle, all the three sides are of different sides.
For an isosceles triangle, two of the three sides are same.*/

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
