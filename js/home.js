let hamburger = document.querySelector(".navbar__hamburger-container");
let mobileNav = document.querySelector(".mobilenav__container");
let isVisible = false;

hamburger.addEventListener("click", function(){
	if (!isVisible){
		mobileNav.style.display = "flex";
		isVisible = !isVisible;	
	} else {
		mobileNav.style.display = "none";
		isVisible = !isVisible;
	}
	
});