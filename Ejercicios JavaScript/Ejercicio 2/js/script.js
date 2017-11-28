var x = 100;
var y= 100;
var resultado = (x+y)+"px";

function ChangeHeight(){
	document.getElementById("verde").style.height=resultado;
}

window.onload=function(){
  document.getElementById("b").onclick=function(){
	  ChangeHeight()
  }
}