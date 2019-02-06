let hamburger = document.querySelector(".navbar__hamburger-container");
let mobileNav = document.querySelector(".mobilenav__container");
let mobileNavItems = document.querySelectorAll(".mobilenav__item");
let isVisible = false;

hamburger.addEventListener("click", () => {
	if (!isVisible){
		mobileNav.style.display = "flex"; // make mobilenav visible
		// start animations
		mobileNav.classList.add("mobilenav__container--slideIn");
		hamburger.classList.add("navbar__hamburger-animation--forwards");
		// start async call to remove animation class after animation finishes
		removeClass(mobileNav, "mobilenav__container--slideIn");
		// toggle hamburger rotation state
		hamburger.classList.remove("navbar__hamburger-animation--backwards");
		isVisible = !isVisible;
	} else {
		mobileNav.classList.add("mobilenav__container--slideOut");
		hamburger.classList.add("navbar__hamburger-animation--backwards");
		removeClass(mobileNav, "mobilenav__container--slideOut");
		hamburger.classList.remove("navbar__hamburger-animation--forwards");
		isVisible = !isVisible;
	}
});

mobileNavItems.forEach((item) => {
	item.addEventListener("click", () => {
		mobileNav.style.display = "none";
		isVisible = false;
	});
});

function removeClass(element, className){
	console.log(className);
	setTimeout(()=>{
		element.classList.remove(className);
		// make mobilenav invisible after playing slide out animation
		className === "mobilenav__container--slideOut" ? mobileNav.style.display = "none" : null;
	}, 250);
}