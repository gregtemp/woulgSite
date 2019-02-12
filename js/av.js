let seeMoreButtons = document.querySelectorAll(".newspaper__popout-button");

seeMoreButtons.forEach((button) => {
	button.addEventListener("click", function(){
		if (this.parentElement.parentElement.id){
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