const marked = require("marked");
const fs = require("fs");

marked.setOptions({
	gfm: true,
	breaks: true
});

let md = fs.readFileSync("cv.md", "utf8");
let convertedHTML = marked(md);

fs.writeFileSync("cv.html", convertedHTML, "utf8");