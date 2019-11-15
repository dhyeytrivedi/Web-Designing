
var start = new Date();
var milistart = start.getTime();

function stopTime() {
var stop = new Date();
var milistop = stop.getTime();
var difference = milistop - milistart;
var secondselapsed = difference/600;
alert("You have been on the page for " + secondselapsed + " seconds");
}
