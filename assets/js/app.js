
var button1 = document.getElementById("press");
var button2 = document.getElementById("caja");

button1.addEventListener("click", function(){
	button1.classList.add("ocult");
	button2.classList.remove("ocult");
});