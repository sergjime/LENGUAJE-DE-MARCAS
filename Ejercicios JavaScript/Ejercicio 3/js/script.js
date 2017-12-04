var dados = null;

function ChangePosition(){
	var resultado = 50;
	dados.style.top=resultado+"px";
}

window.onload=function(){
	dados = document.getElementsByTagName("img")[0];
	document.getElementById("b").onclick=ChangePosition;
}
