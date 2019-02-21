const markdown = require("markdown").markdown;
const fs = require("fs");

let md = fs.readFileSync("cv.md", "utf8");
let convertedHTML = markdown.toHTML(md);

fs.writeFileSync("cv.html", convertedHTML, "utf8");