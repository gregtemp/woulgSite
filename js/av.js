let seeMoreButtons = document.querySelectorAll(".newspaper__popout-button");
let popoutContainers = document.querySelectorAll(".newspaper__popout-container");

seeMoreButtons.forEach((button) => {
	button.addEventListener("click", function(){
		if (this.parentElement.parentElement.id){
			// clear any existing popouts
			popoutContainers.forEach((container) => {
				container.style.display = "none";
			});
			// get the id of the containing div column
			let id = this.parentElement.parentElement.id;
			// interpolate the desired div selector
			let divToShow = document.querySelector(`#${id}-popout-container`);
			// show the div
			divToShow.style.display = "flex";
		}
	});
});

let goBackButtons = document.querySelectorAll(".newspaper__popout-button--back");

goBackButtons.forEach((button) => {
	button.addEventListener("click", function(){
		if (this.parentElement.parentElement){
			this.parentElement.parentElement.style.display = "none";
		}		
	});
});