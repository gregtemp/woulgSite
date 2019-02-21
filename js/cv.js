let cvContainer = document.querySelector(".cv__wrapper");

fetch("../mdhtml.html")
	.then((response) => {
		// convert loaded file to text
		return response.text();
	})
	.then((html) => {
		// init dom parser
		let parser = new DOMParser();

		// parse txt to html
		let cvHTML = parser.parseFromString(html, "text/html");

		// append html to cv container
		cvContainer.appendChild(cvHTML.body);
	})
	.catch((err) => {
		console.log(`failed to load resource: ${err}`);
	});