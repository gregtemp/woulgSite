const markdown = require("markdown").markdown;
const fs = require("fs");

let md = fs.readFileSync("README.md", "utf8");
let markdownHTML = markdown.toHTML(md);

console.log(markdownHTML);