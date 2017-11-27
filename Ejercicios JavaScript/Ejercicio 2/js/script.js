var x = 100;
var y= 100;
var resultatString = (x+y)+"px";

window.onload=function(){
	document.getElementById("b").onclick=function(){	
		document.getElementsById("verde").style.height=resultatString;
	}
}