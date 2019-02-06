let hamburger = document.querySelector(".navbar__hamburger-container");
let mobileNav = document.querySelector(".mobilenav__container");
let mobileNavItems = document.querySelectorAll(".mobilenav__item");
let isVisible = false;

hamburger.addEventListener("click", () => {
	if (!isVisible){
		mobileNav.style.display = "flex";
		mobileNav.classList.add("mobilenav__container--slideIn");
		isVisible = !isVisible;
		removeClass("mobilenav__container--slideIn");
	} else {
		mobileNav.classList.add("mobilenav__container--slideOut");
		isVisible = !isVisible;
		removeClass("mobilenav__container--slideOut");
	}
});

mobileNavItems.forEach((item) => {
	item.addEventListener("click", () => {
		mobileNav.style.display = "none";
		isVisible = false;
	});
});

function removeClass(className){
	setTimeout(()=>{
		mobileNav.classList.remove(className);
		className === "mobilenav__container--slideOut" ? mobileNav.style.display = "none" : null;
	}, 250);
}