// Q1
const birthYear = 2002
let year = 2050
function myage() {
    return year-birthYear;   
}
console.log("I will be either"+" "+(myage()-1)+" "+"or"+" "+myage()+" "+"in"+" "+year);



// Q2
let celsius = 20;
function cToF() {
    return (celsius*9)/5+32;
}
console.log(celsius+"\xB0"+"C"+" "+"is"+"  "+cToF()+"\xB0"+"F");


let fahrenheit = 90;
function fToC() {
    return ((fahrenheit-32)*5)/9;
}
console.log(fahrenheit+"\xB0"+"F"+" "+"is"+" "+fToC()+"\xB0"+"C");



// Q3
let x = 45
if (x>=75) {
    result = "A"
}
else if (x>=60) {
    result = "B"
}
else if (x>=45) {
    result = "C"
}
else {
    result = "F"
}
console.log(result);



// Q4

