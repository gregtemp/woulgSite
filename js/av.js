let seeMoreBtn = document.querySelectorAll(".newspaper__popout-button");

seeMoreBtn.forEach(function(button){
	let toggleState = false;
	button.addEventListener("click", function(){
		if (!toggleState){
			this.parentElement.nextElementSibling.style.display = "block";
			toggleState = !toggleState;
		} else {
			this.parentElement.nextElementSibling.style.display = "none";
			toggleState = !toggleState;
		}
	});
});