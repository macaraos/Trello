//Creando variables principales
var button1 = document.getElementById("press");
var button2 = document.getElementById("caja");
var botonGuardar = document.getElementById("botonGuardar");
var btn = document.getElementById("btn");
var text = document.getElementById("text").value;

//Evento click para abrir boton "añadir lista"
button1.addEventListener("click", function(){
	button1.classList.add("ocult");
	button2.classList.remove("ocult");
});

//Evento click para cerrar al presionar boton X
btn.addEventListener("click", function(){
	button2.classList.add("ocult");
	button1.classList.remove("ocult");
});

//Nuevo contenedor
var nuevoContenedor = document.getElementById("nuevoContenedor");

//Evento click para guardar
botonGuardar.addEventListener("click", function(){
	button2.classList.remove("ocult");
	document.getElementById("text").value = "";

	var nuevoTexto = document.createTextNode(text);
	var nuevaLista = document.createElement("div");
	var nombreLista = document.createElement("p");

	nombreLista.appendChild(nuevoTexto);
	nuevaLista.appendChild(nombreLista);
	button2.appendChild(nuevaLista);
});

/*
function nuevoTextArea(){
	var newTextArea=document.createElement("textarea");
	newTextArea.classList.add("textAreaTarea");
	newTextArea.setAttribute("id", "tareaPorHacer");

	var nuevoBtn=document.createElement("newButton");
	var txtButton=document.createTextNode("añadir");
	nuevoBtn.classList.add("btnAñadir");
	nuevoBtn.setAttribute("id", "botonAnadir");
	nuevoBtn.setAttribute("onclick", "nuevaTarea()");

	//llamando al elemento padre contenedor
	var contenedor=("nuevo-cuadro");
	//borrando elementos
	var anadirTarea=document.getElementById("agrega");
	contenedor.removeChild(anadirTarea);
	//agregando hijos
	nuevoBtn.appendChild(txtButton);
	contenedor.appendChild(newTextArea);
	contenedor.appendChild(nuevoBtn);
};

var mensajeAgregar=document.getElementById("agrega");
mensajeAgregar.addEventListener("click", function(){
	nuevoTextArea()
});

//nueva tarea
function nuevaTarea(){
	var nuevaTarea=document.createElement("p");
	var txtNuevaTarea=document.getElementById("tareaPorHacer").value;
	document.getElementById("tareaPorHacer").value="";
	var nodoTarea= document.createTextNode(txtNuevaTarea);
	var padreTarea=document.getElementById("cuadro");
	var cajatextarea=document.getElementById("tareaPorHacer");

	//agregando estilo
	nuevaTarea.classList.add("nuevaTarea");
	nuevaTarea.appendChild(nodoTarea);
	padreTarea.appendChild(nuevaTarea);
	padreTarea.insertBefore(nuevaTarea, cajatextarea);
};
*/