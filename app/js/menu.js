var menuResponsivo = document.getElementById('menuResponsivo');

var listaMenu = document.getElementById('listaMenu');

var fechado = true;

menuResponsivo.onclick = function(){
	if (fechado) {
		listaMenu.style.display = "block";
		fechado = false;
	}else{
		listaMenu.style.display = "none";
		fechado = true;
	}
}