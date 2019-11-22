function addition() {
var num_1 = Number(document.getElementById("number1").value);
var num_2 = Number(document.getElementById("number2").value);
var result = num_1+num_2;
document.getElementById('result').innerHTML=result;
}
function subtraction() {
var num_1 = Number(document.getElementById("number1").value);
var num_2 = Number(document.getElementById("number2").value);
var result = num_1-num_2;
document.getElementById('result').innerHTML=result;
}
function multiplication() {
var num_1 = Number(document.getElementById("number1").value);
var num_2 = Number(document.getElementById("number2").value);
var result = num_1*num_2;
document.getElementById('result').innerHTML=result;
}
function division() {
var num_1 = Number(document.getElementById("number1").value);
var num_2 = Number(document.getElementById("number2").value);
var result = num_1/num_2;
document.getElementById('result').innerHTML=result;
}
