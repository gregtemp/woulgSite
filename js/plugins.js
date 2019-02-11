function makeCard(plugin, destParent) {
	let card = document.createElement("div");
	let name = document.createElement("a");
	let imgAnchor = document.createElement("a");
	let img = document.createElement("img");

	// find root element to attach cards to
	document.querySelector(destParent).appendChild(card);
	
	// append primary child elements to card
	card.appendChild(imgAnchor); 
	imgAnchor.appendChild(img); 
	card.appendChild(name); 
	
	// set hrefs, preferring gumroad links
	plugin.gumroadLink ? imgAnchor.href = plugin.gumroadLink : imgAnchor.href = plugin.bandcampLink;
	plugin.gumroadLink ? name.href = plugin.gumroadLink : name.href = plugin.bandcampLink;

	// apply classes
	card.classList.add("plugin");
	name.classList.add("plugin__link");
	img.classList.add("plugin__img");

	// set link behavior
	imgAnchor.setAttribute("target", "_blank");
	name.setAttribute("target", "_blank");

	// add content to elements
	name.innerHTML = plugin.title;
	plugin.img ? img.src = plugin.img : null;
	plugin.gumroadLink ? imgAnchor.href = plugin.gumroadLink : imgAnchor.href = plugin.bandcampLink;
}

let maxPatches = [
	{
		title: "second hand modem",
		img: "./img/plugin_artwork/secondhandmodem.jpg",
		gumroadLink: "https://gumroad.com/l/LRCAx",
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/second-hand-modem-fm"
	},
	{
		title: "fancy convolve",
		img: "./img/plugin_artwork/fancyconvolve.jpg",
		gumroadLink: "https://gumroad.com/l/kkSBI",
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/fancy-convolve"
	},
	{
		title: "midi pack",
		img: "./img/plugin_artwork/midipack.jpg",
		gumroadLink: "https://gumroad.com/l/tSleZ",
		bandcampLink: undefined
	},
	{
		title: "LFMAOs",
		img: "./img/plugin_artwork/lfmaos.jpg",
		gumroadLink: "https://gumroad.com/l/CvfTa",
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/wr-lfmaos"
	},
	{
		title: "step gator",
		img: "./img/plugin_artwork/stepgator.jpg",
		gumroadLink: "https://gumroad.com/l/almJW",
		bandcampLink: undefined
	},
	{
		title: "pitch match",
		img: "./img/plugin_artwork/pitchmatch.jpg",
		gumroadLink: "https://gumroad.com/l/MNjzL",
		bandcampLink: undefined
	},
	{
		title: "4IR convolve",
		img: "./img/plugin_artwork/4irconvolve.jpg",
		gumroadLink: "https://gumroad.com/l/HXzFb",
		bandcampLink: undefined
	},
	{
		title: "scratchy & chain selecta",
		img: "./img/plugin_artwork/scratchychainselecta.jpg",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/scratchy-and-chain-selecta"
	},
	{
		title: "basic granulator",
		img: "./img/plugin_artwork/basicgranulator.jpg",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/basic-granulator"
	},
	{
		title: "sneaky send & receive",
		img: "./img/plugin_artwork/sneakysendandreceive.jpg",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/sneaky-send-and-receive"
	},
	{
		title: "nice envelope & random numbers",
		img: "./img/plugin_artwork/niceenveloperandomnumbers.jpg",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/nice-envelope-and-random-numbers"
	}
];

for (let i = 0; i < maxPatches.length; i++){
	makeCard(maxPatches[i], ".section-plugins__container");
}