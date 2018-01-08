/*var Elemento=null;
var Formulario=null;
window.onload = function(){
	Formulario=document.getElementById('formulario'); 
	
	Elemento=Formulario.elements[0];
	Elemento.onchange=function(){
		message();
		return false;
	}
	Formulario.onsubmit=function(){
		message();
		return false;
	} 
}
function message(){
	var value = Elemento.options[Elemento.selectedIndex].value;
	var text = Elemento.options[Elemento.selectedIndex].text; 
	alert("value: "+value+" text: "+text);
}*/
var Elemento=null;
var Formulario=null;
window.onload = function(){
	Formulario=document.getElementById('formulario'); 
	
	Elemento=Formulario.elements[0];
	Elemento.onchange=function(){
		message();
		return false;
	}
	Formulario.onsubmit=function(){
		message();
		return false;
	} 
}
function message(){
	var elegida = Elemento.options[Elemento.selectedIndex].value; 
	alert(elegida);
}