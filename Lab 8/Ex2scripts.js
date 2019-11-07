//Sets the initial colours of the three elements on page load
document.getElementById("blue").style.color="blue";
document.getElementById("green").style.color="green";
document.getElementById("red").style.color="red";
//A function to change colours of elements when called
function mix(){

	var first = "#0300bb";
	var second = "#00BB00";
	var third = "#bb0000";

	document.getElementById("blue").style.color=first;
	document.getElementById("green").style.color=second;
	document.getElementById("red").style.color=third;

}
