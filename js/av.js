let seeMoreButtons = document.querySelectorAll(".newspaper__popout-button");

seeMoreButtons.forEach((button) => {
	button.addEventListener("click", function(){
		this.parentElement.nextElementSibling.style.display = "block";
	});
});

let goBackButtons = document.querySelectorAll(".newspaper__popout-button--back");

goBackButtons.forEach((button) => {
	button.addEventListener("click", function(){
		this.parentElement.parentElement.style.display = "none";
	});
});