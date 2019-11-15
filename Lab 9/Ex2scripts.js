
var age = prompt("What is your age ?");
var numAge = Number(age);


var date = new Date();
var year = date.getFullYear();
var difference = year - numAge;

document.write("Your birth year is    "+ difference +".");
