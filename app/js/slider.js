var myIndex = 0;
var slideIndex = 1;
var bullets = document.getElementsByClassName("bullet");
var sliders = document.getElementsByClassName("slider");

for (var i = 0; i < bullets.length; i++){
	bullets[i].onclick = function() {
		slideManual(this.getAttribute("value"));
	};
}

slide();

function slide() {	
	for (var i = 0; i < sliders.length; i++) {
		sliders[i].style.display = "none";  
		bullets[i].style.opacity = ".5";
	}
	myIndex++;
	if (myIndex > sliders.length) {
		myIndex = 1
	}    
	sliders[myIndex-1].style.display = "block"; 
	bullets[myIndex-1].style.opacity = "1"; 
	setTimeout(slide, 10000); 
}

function slideManual(n) {
	
	for (var i = 0; i < sliders.length; i++) {
		sliders[i].style.display = "none";  
		bullets[i].style.opacity = ".5"; 
	}

	sliders[n].style.display = "block"; 
	bullets[n].style.opacity = "1"; 
}