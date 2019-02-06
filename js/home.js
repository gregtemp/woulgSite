let hamburger = document.querySelector(".navbar__hamburger-container");
let mobileNav = document.querySelector(".mobilenav__container");
let mobileNavItems = document.querySelectorAll(".mobilenav__item");
let isVisible = false;

hamburger.addEventListener("click", () => {
	if (!isVisible){
		mobileNav.style.display = "flex";
		isVisible = !isVisible;	
	} else {
		mobileNav.style.display = "none";
		isVisible = !isVisible;
	}
});

mobileNavItems.forEach((item) => {
	item.addEventListener("click", () => {
		mobileNav.style.display = "none";
		isVisible = false;
	});
});