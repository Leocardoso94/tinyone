 var myIndex = 0;
 carousel();


 function carousel() {
  var i;
  var sliders = document.getElementsByClassName("slider");
  var bullets = document.getElementsByClassName("bullet");
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";  
   bullets[i].style.opacity = ".5";
 }
 myIndex++;
 if (myIndex > sliders.length) {myIndex = 1}    
  sliders[myIndex-1].style.display = "block"; 
bullets[myIndex-1].style.opacity = "1"; 
      setTimeout(carousel, 5000); // Change image every 2 seconds
    }