// GLOBAL
let allLinks = document.getElementsByTagName("a");

window.onload = () => {
	for (let i = 0; i < allLinks.length; i++){
		if (allLinks[i].target === "_blank"){
			allLinks[i].setAttribute("rel", "noreferrer");
		}
	}	
}


// NAV 
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
		hamburger.classList.add("navbar__hamburger-animation--backwards");
		isVisible = false;
	});
});

function removeClass(element, className){
	setTimeout( () => {
		element.classList.remove(className);
		// make mobilenav invisible after playing slide out animation
		className === "mobilenav__container--slideOut" ? mobileNav.style.display = "none" : null;
	}, 250);
}


// AV SECTION
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


// MUSIC SECTION
let slider = document.querySelector(".music__slider");
let yearDisplay = document.querySelector(".music__slider-display");
let musicCardContainer = document.querySelector(".music__card-container");

slider.oninput = () => {
	updateDisplay();
}

function updateDisplay() {
	yearDisplay.innerHTML = slider.value;
	let releasesFromYear = releases[slider.value];
	let cards = document.querySelectorAll(".music__card");
	
	// remove old cards
	for (let i = 0; i < cards.length; i++){
		removeCard(cards[i].className);
	}

	// generate new cards
	for (let i = 0; i < releasesFromYear.length; i++){
		makeCard(releasesFromYear[i], ".music__card-container");
	}
}

function removeCard(target) {
	var element = document.querySelector(`.${target}`);
	element.parentNode.removeChild(element);
}

function makeCard(album, destParent) {
	let card = document.createElement("div");
	let title = document.createElement("h2");
	let label = document.createElement("h3");
	let img = document.createElement("img");
	let links = document.createElement("div");
	let bandcamp = document.createElement("a");
	let spotify = document.createElement("a");
	let appleMusic = document.createElement("a");
	let soundcloud = document.createElement("a");

	// find root element to attach cards to
	document.querySelector(destParent).appendChild(card);
	// append primary child elements to card
	card.appendChild(title); 
	card.appendChild(label); 
	card.appendChild(img); 
	card.appendChild(links);
	// append links to links div
	album.bandcampLink ? links.appendChild(bandcamp) : null;
	album.spotifyLink ? links.appendChild(spotify) : null;
	album.appleMusicLink ? links.appendChild(appleMusic) : null;
	album.soundcloudLink ? links.appendChild(soundcloud) : null;

	// apply classes and attributes
	card.classList.add("music__card");
	title.classList.add("music__card-title");
	label.classList.add("music__card-label");
	img.classList.add("music__card-img");
	img.setAttribute("alt", `${album.title} album artwork`);
	links.classList.add("music__card-links");

	for (let i = 0; i < links.children.length; i++){
		links.children[i].classList.add("music__card-link"); // apply class
		links.children[i].setAttribute("target", "_blank"); // set to open in new window
	}

	// add content to elements
	title.innerHTML = album.title.toLowerCase();
	label.innerHTML = album.label.toLowerCase();

	// use higher res image for hi dpi screens
	if (window.devicePixelRatio > 1){
		album.albumArt ? img.src = `${album.albumArt}.jpg` : null;
	} else {
		album.albumArt ? img.src = `${album.albumArt}_sm.jpg` : null;
	}
	
	album.bandcampLink ? bandcamp.innerHTML = "bandcamp" : null;
	album.bandcampLink ? bandcamp.href = album.bandcampLink : null;
	album.spotifyLink ? spotify.innerHTML = "spotify" : null;
	album.spotifyLink ? spotify.href = album.spotifyLink : null;
	album.appleMusicLink ? appleMusic.innerHTML = "apple music" : null;
	album.appleMusicLink ? appleMusic.href = album.appleMusicLink : null;
	album.soundcloudLink ? soundcloud.innerHTML = "soundcloud" : null;	
	album.soundcloudLink ? soundcloud.href = album.soundcloudLink : null;	
}

let releases = {
	2011: [
		{
			title: "Hinchliffe Shuffle",
			label: "Enigmatik Records (Melbourne, Australia)",
			albumArt: "img/album_artwork/hinchliffeshuffle",
			bandcampLink: "https://woulg.bandcamp.com/album/hinchliffe-shuffle",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: undefined
		},
		{
			title: "Floating Longingly Towards the Sun",
			label: "Outlier Recordings (New York, USA)",
			albumArt: "img/album_artwork/fltts",
			bandcampLink: "https://woulg.bandcamp.com/album/floating-longingly-towards-the-sun",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: undefined
		},
		{
			title: "late",
			label: "released on compilation by Outlier Recordings (New York, USA)",
			albumArt: "img/album_artwork/outsourced",
			bandcampLink: "https://outlierrecordings.bandcamp.com/track/late",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: undefined
		},
		{
			title: "Vaetxh - Mass (Woulg Remix)",
			label: "King Deluxe (Salmo, Canada)",
			albumArt: "img/album_artwork/mass",
			bandcampLink: "https://kingdeluxe.bandcamp.com/track/mass-woulg-kuffd-up-mirror-mix",
			spotifyLink: "https://open.spotify.com/track/2JKnAcgDPS96m7maHydGJ8?si=OEffBp2qThKKcgx7mNZIiQ",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/mass-woulg-kuffd-up-mirror-mix/467921182?i=467921188&mt=1&app=music",
			soundcloudLink: undefined
		}
	],
	2012: [
		{
			title: "Mindbuffer - Pan FM (Woulg Remix)",
			label: "Enig’matik Records (Melbourne, Australia)",
			albumArt: "img/album_artwork/mindbuffer",
			bandcampLink: "https://enigmatikrecords.bandcamp.com/track/panfm-woulg-remix",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: undefined
		},
		{
			title: "Zebbler Encanti Experience - Quetzacoatl (Woulg Remix)",
			label: "Gravitas Recordings (Austin, USA)",
			albumArt: "img/album_artwork/zee",
			bandcampLink: "https://music.gravitasrecordings.com/track/quetzalcoatl-woulg-remix",
			spotifyLink: "https://open.spotify.com/track/0tcKRYblCCof3w0nXOpQnx?si=KsYnfMY6Roa_Cqo-iEFmZg",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/quetzalcoatl-woulg-remix/591203992?i=591204289&mt=1&app=music",
			soundcloudLink: undefined
		}
	],
	2013: [
		{
			title: "cold land",
			label: "Enig’matik Records (Melbourne, Australia)",
			albumArt: "img/album_artwork/coldland",
			bandcampLink: "https://woulg.bandcamp.com/album/cold-land",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: undefined
		},
		{
			title: "ghost",
			label: "Outlier Recordings (New York, USA)",
			albumArt: "img/album_artwork/ghost",
			bandcampLink: "https://woulg.bandcamp.com/album/ghost",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: undefined
		},
		{
			title: "Zack Christ - Iced Out (Woulg Remix)",
			label: "Enig’matik Records (Melbourne, Australia)",
			albumArt: "img/album_artwork/icedout",
			bandcampLink: "https://enigmatikrecords.bandcamp.com/track/iced-out-woulg-rmx",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: "https://soundcloud.com/enigmatikrecords/2-zack-christ-iced-out-woulg"
		}
	],
	2014: [
		{
			title: "thin veil",
			label: "outlier recordings (new york, usa)",
			albumArt: "img/album_artwork/thinveil",
			bandcampLink: "https://woulg.bandcamp.com/album/thin-veil",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: undefined
		},
		{
			title: "punishment/ritual",
			label: "Terra Null Recordings (Boston, USA)",
			albumArt: "img/album_artwork/punishment",
			bandcampLink: "https://woulg.bandcamp.com/album/punishment-ritual",
			spotifyLink: "https://open.spotify.com/album/34PumDRpevjupt2lqSpdJq?si=M6fRJLULQNuU9jmxjz_Wyw",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/punishment-ritual-single/912246974?mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "Cirrus - Shiver Shrapnel (Woulg Remix)",
			label: "Terra Null Recordings (Boston, USA)",
			albumArt: "img/album_artwork/shivershrapnel",
			bandcampLink: "https://terranullrecordings.bandcamp.com/track/shiver-shrapnel-woulg-remix",
			spotifyLink: undefined,
			appleMusicLink: "https://geo.itunes.apple.com/us/album/shiver-shrapnel-woulg-remix/824087886?i=824087896&mt=1&app=music",
			soundcloudLink: undefined
		}
	],
	2015: [
		{
			title: "Lars Fenin - Why Not (Woulg Remix)",
			label: "Detroit Underground (Detroit, USA)",
			albumArt: "img/album_artwork/solidarity",
			bandcampLink: "https://detund.bandcamp.com/track/why-not-woulg-remix",
			spotifyLink: undefined,
			appleMusicLink: "https://geo.itunes.apple.com/us/album/why-not-woulg-remix/1017056358?i=1017056497&mt=1&app=music",
			soundcloudLink: undefined
		}
	],
	2016: [
		{
			title: "Dragged ",
			label: "Methlab Recordings (London, UK)",
			albumArt: "img/album_artwork/dragged",
			bandcampLink: "https://methlabagency.bandcamp.com/album/dragged-ep",
			spotifyLink: "https://open.spotify.com/album/1eccyG0BFIDfHjJq07iMER?si=xsf8oXfTSTGdT3_tkDdVzQ",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/dragged/1449502381?mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "tiny moon ",
			label: "Outlier Recordings (New York, USA)",
			albumArt: "img/album_artwork/tinymoon",
			bandcampLink: "https://woulg.bandcamp.com/album/tiny-moon",
			spotifyLink: "https://open.spotify.com/album/6RlTfSNrkbvtwNpuHYJxbN?si=hzwkCrorSfW1n-yQzCJ2sg",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/tiny-moon/1446820936?mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "Robot Love - Filament (Woulg Remix) ",
			label: "Outlier Recordings (New York, USA)",
			albumArt: "img/album_artwork/bookofleaves",
			bandcampLink: "https://outlierrecordings.bandcamp.com/album/out-66-book-of-leaves-remixes",
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: "https://soundcloud.com/woulgmusic/robot-love-filament-woulg-remix"
		},
		{
			title: "Empathy Switch",
			label: "collab w/ zebbler encanti experience",
			albumArt: "img/album_artwork/empathyswitch",
			bandcampLink: undefined,
			spotifyLink: undefined,
			appleMusicLink: undefined,
			soundcloudLink: "https://soundcloud.com/zebblerencantiexperience/zebbler-encanti-experience-woulg-empathy-switch"
		},
		{
			title: "Zack Christ - Centigrade Duckfucker (Woulg Remix)",
			label: "Husoptagelser (Copenhagen, Denmark)",
			albumArt: "img/album_artwork/zackchristremix",
			bandcampLink: "https://husoptagelser.bandcamp.com/track/centigrade-duckfucker-woulg-remix",
			spotifyLink: "https://open.spotify.com/track/1cNs4Bn9Tjj4dOd0m6uiV6?si=asehKrqAQIWEGdq8EScjWg",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/centigrade-duckfucker-woulg-remix/1183012854?i=1183012998&mt=1&app=music",
			soundcloudLink: undefined
		}
	],
	2017: [
		{
			title: "Osiris - Voicodin (Woulg Remix)",
			label: "Detroit Underground (Detroit, USA)",
			albumArt: "img/album_artwork/voicodinremix",
			bandcampLink: "https://detund.bandcamp.com/track/voicodin-woulg-remix",
			spotifyLink: "https://open.spotify.com/track/2cRCsjOn2vietXec0r58u4?si=LL1dnM-oTea7YS7shbjKTw",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/voicodin-woulg-remix/1291118341?i=1291118743&mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "The Science - The Sea and I (Woulg Remix)",
			label: "Methlab Recordings (London, UK)",
			albumArt: "img/album_artwork/theseaandiremix",
			bandcampLink: "https://methlabagency.bandcamp.com/track/the-sea-and-i-woulg-remix",
			spotifyLink: "https://open.spotify.com/track/19FMdn5dcVdG2djIjL84YY?si=aKI1whwoS7unU4Peu7R-XQ",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/the-sea-and-i-woulg-remix/1289456391?i=1289456684&mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "Foonyap - Woolf and Plath (Woulg Remix)",
			label: "Foonyap.bandcamp.com (Calgary, Canada)",
			albumArt: "img/album_artwork/woolfandplathremix",
			bandcampLink: "https://foonyap.bandcamp.com/track/woolf-and-plath-woulg-remix",
			spotifyLink: "https://open.spotify.com/track/4TWh5zuTeUDLN3s4XBXWOB?si=QknFNcqcSGargQPogju55Q",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/woolf-and-plath-woulg-remix/1234641708?i=1234641709&mt=1&app=music",
			soundcloudLink: undefined
		}
	],
	2018: [
		{
			title: "last time",
			label: "methlab recordings (london, uk)",
			albumArt: "img/album_artwork/lasttime",
			bandcampLink: "https://methlabagency.bandcamp.com/album/last-time-lp",
			spotifyLink: "https://open.spotify.com/album/5woPaQlA2CnIRBVaH44DpS?si=MknWeyfGTsuj9qqI4c6Obw",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/last-time/1397362409?mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "what did you think would happen?",
			label: "self-released collab w/ homesick",
			albumArt: "img/album_artwork/whatdidyouthinkwouldhappen",
			bandcampLink: "https://woulg.bandcamp.com/album/what-did-you-think-would-happen-collab-w-homesick",
			spotifyLink: "https://open.spotify.com/album/2xqb5Ek27Uw1v0kOHGboFQ?si=AAWFgl5xQ9u3NwPnFYO8-w",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/what-did-you-think-would-happen-single/1391753569?mt=1&app=music",
			soundcloudLink: undefined
		}
	]
};

// initial update on load
updateDisplay();


// PLUGINS SECTION
function makePluginCard(plugin, destParent) {
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

	// apply classes and attributes
	card.classList.add("plugin");
	name.classList.add("plugin__link");
	img.classList.add("plugin__img");
	img.setAttribute("alt", `${plugin.title} artwork`);

	// set link behavior
	imgAnchor.setAttribute("target", "_blank");
	name.setAttribute("target", "_blank");

	// add content to elements
	name.innerHTML = plugin.title;
	
	// add higher res img for hi dpi screens
	if (window.devicePixelRatio > 1){
		plugin.img ? img.src = `${plugin.img}.jpg` : null;
	} else {
		plugin.img ? img.src = `${plugin.img}_sm.jpg` : null;
	}
	
	plugin.gumroadLink ? imgAnchor.href = plugin.gumroadLink : imgAnchor.href = plugin.bandcampLink;
}

let maxPatches = [
	{
		title: "second hand modem",
		img: "./img/plugin_artwork/secondhandmodem",
		gumroadLink: "https://gumroad.com/l/LRCAx",
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/second-hand-modem-fm"
	},
	{
		title: "fancy convolve",
		img: "./img/plugin_artwork/fancyconvolve",
		gumroadLink: "https://gumroad.com/l/kkSBI",
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/fancy-convolve"
	},
	{
		title: "midi pack",
		img: "./img/plugin_artwork/midipack",
		gumroadLink: "https://gumroad.com/l/tSleZ",
		bandcampLink: undefined
	},
	{
		title: "LFMAOs",
		img: "./img/plugin_artwork/lfmaos",
		gumroadLink: "https://gumroad.com/l/CvfTa",
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/wr-lfmaos"
	},
	{
		title: "step gator",
		img: "./img/plugin_artwork/stepgator",
		gumroadLink: "https://gumroad.com/l/almJW",
		bandcampLink: undefined
	},
	{
		title: "pitch match",
		img: "./img/plugin_artwork/pitchmatch",
		gumroadLink: "https://gumroad.com/l/MNjzL",
		bandcampLink: undefined
	},
	{
		title: "4IR convolve",
		img: "./img/plugin_artwork/4IRconvolve",
		gumroadLink: "https://gumroad.com/l/HXzFb",
		bandcampLink: undefined
	},
	{
		title: "scratchy & chain selecta",
		img: "./img/plugin_artwork/scratchychainselecta",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/scratchy-and-chain-selecta"
	},
	{
		title: "basic granulator",
		img: "./img/plugin_artwork/basicgranulator",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/basic-granulator"
	},
	{
		title: "sneaky send & receive",
		img: "./img/plugin_artwork/sneakysendandreceive",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/sneaky-send-and-receive"
	},
	{
		title: "nice envelope & random numbers",
		img: "./img/plugin_artwork/niceenveloperandomnumbers",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/plugin/nice-envelope-and-random-numbers"
	}
];

let reaktorPatches = [
	{
		title: "wavy tables",
		img: "./img/plugin_artwork/niceenveloperandomnumbers",
		gumroadLink: "https://gumroad.com/l/eplbI",
		bandcampLink: undefined
	},
	{
		title: "quick granny",
		img: "./img/plugin_artwork/quickgranny",
		gumroadLink: "https://gumroad.com/l/itqDMk",
		bandcampLink: undefined
	},
	{
		title: "speckled freeze",
		img: "./img/plugin_artwork/speckledfreeze",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/album/speckled-freeze"
	},
	{
		title: "glasshole",
		img: "./img/plugin_artwork/glasshole",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/album/glasshole"
	},
	{
		title: "autoOscPan",
		img: "./img/plugin_artwork/autooscpan",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/album/autooscpan"
	},
	{
		title: "bad eq",
		img: "./img/plugin_artwork/badeq",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/album/badeq"
	},
	{
		title: "granular NaN",
		img: "./img/plugin_artwork/granularnan",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/album/granular-nan"
	},
	{
		title: "geometry distortion",
		img: "./img/plugin_artwork/geometrydistortion",
		gumroadLink: undefined,
		bandcampLink: "https://woulg-related.bandcamp.com/album/geometry-distortion"
	}
];

for (let i = 0; i < maxPatches.length; i++){
	makePluginCard(maxPatches[i], "#max-patches");
}

for (let i = 0; i < reaktorPatches.length; i++){
	makePluginCard(reaktorPatches[i], "#reaktor-patches");
}


// CV SECTION
let cvContainer = document.querySelector(".cv__wrapper");

fetch("https://agohorel.github.io/wlg-site/cv.html")
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
