let slider = document.querySelector(".music__slider");
let sliderDisplay = document.querySelector(".music__slider-display");
let musicCardContainer = document.querySelector(".music__card-container");

slider.oninput = () => {
	updateDisplay();
}

function updateDisplay() {
	sliderDisplay.innerHTML = slider.value;
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

	// apply classes
	card.classList.add("music__card");
	title.classList.add("music__card-title");
	label.classList.add("music__card-label");
	img.classList.add("music__card-img");
	links.classList.add("music__card-links");

	for (let i = 0; i < links.children.length; i++){
		links.children[i].classList.add("music__card-link");
	}

	// add content to elements
	title.innerHTML = album.title;
	label.innerHTML = album.label;
	album.albumArt ? img.src = album.albumArt : null;
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
			title: "title 1",
			label: "some label",
			albumArt: "./img/background.jpg",
			bandcampLink: "https://www.bandcamp.com",
			spotifyLink: "https://www.spotify.com",
			appleMusicLink: "https://www.applemusic.com",
			soundcloudLink: "https://www.soundcloud.com"
		}
	],
	2012: [
		{
			title: "title 2",
			label: "some label",
			albumArt: "./img/background_inv.jpg",
			bandcampLink: "https://www.bandcamp.com",
			spotifyLink: "https://www.spotify.com",
			appleMusicLink: "https://www.applemusic.com",
			soundcloudLink: "https://www.soundcloud.com"
		}
	],
	2013: [
		{
			title: "title 3",
			label: "some label",
			albumArt: "./img/background.jpg",
			bandcampLink: "https://www.bandcamp.com",
			spotifyLink: "https://www.spotify.com",
			appleMusicLink: "https://www.applemusic.com",
			soundcloudLink: "https://www.soundcloud.com"
		}
	],
	2014: [
		{
			title: "title 4",
			label: "some label",
			albumArt: "./img/background_inv.jpg",
			bandcampLink: "https://www.bandcamp.com",
			spotifyLink: "https://www.spotify.com",
			appleMusicLink: "https://www.applemusic.com",
			soundcloudLink: "https://www.soundcloud.com"
		}
	],
	2015: [
		{
			title: "title 5",
			label: "some label",
			albumArt: "./img/background.jpg",
			bandcampLink: "https://www.bandcamp.com",
			spotifyLink: "https://www.spotify.com",
			appleMusicLink: "https://www.applemusic.com",
			soundcloudLink: "https://www.soundcloud.com"
		}
	],
	2016: [
		{
			title: "title 6",
			label: "some label",
			albumArt: "./img/background_inv.jpg",
			bandcampLink: "https://www.bandcamp.com",
			spotifyLink: "https://www.spotify.com",
			appleMusicLink: "https://www.applemusic.com",
			soundcloudLink: "https://www.soundcloud.com"
		}
	],
	2017: [
		{
			title: "Osiris - Voicodin (Woulg Remix)",
			label: "Detroit Underground (Detroit, USA)",
			albumArt: "./img/background.jpg",
			bandcampLink: "https://www.bandcamp.com",
			spotifyLink: "https://www.spotify.com",
			appleMusicLink: "https://www.applemusic.com",
			soundcloudLink: "https://www.soundcloud.com"
		}
	],
	2018: [
		{
			title: "last time",
			label: "methlab recordings (london, uk)",
			albumArt: "img/album_artwork/lasttime.jpg",
			bandcampLink: "https://methlabagency.bandcamp.com/album/last-time-lp",
			spotifyLink: "https://open.spotify.com/album/5woPaQlA2CnIRBVaH44DpS?si=MknWeyfGTsuj9qqI4c6Obw",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/last-time/1397362409?mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "what did you think would happen?",
			label: "self-released collab w/ homesick",
			albumArt: "img/album_artwork/whatdidyouthinkwouldhappen.jpg",
			bandcampLink: "https://woulg.bandcamp.com/album/what-did-you-think-would-happen-collab-w-homesick",
			spotifyLink: "https://open.spotify.com/album/2xqb5Ek27Uw1v0kOHGboFQ?si=AAWFgl5xQ9u3NwPnFYO8-w",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/what-did-you-think-would-happen-single/1391753569?mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "last time",
			label: "methlab recordings (london, uk)",
			albumArt: "img/album_artwork/lasttime.jpg",
			bandcampLink: "https://methlabagency.bandcamp.com/album/last-time-lp",
			spotifyLink: "https://open.spotify.com/album/5woPaQlA2CnIRBVaH44DpS?si=MknWeyfGTsuj9qqI4c6Obw",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/last-time/1397362409?mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "what did you think would happen?",
			label: "self-released collab w/ homesick",
			albumArt: "img/album_artwork/whatdidyouthinkwouldhappen.jpg",
			bandcampLink: "https://woulg.bandcamp.com/album/what-did-you-think-would-happen-collab-w-homesick",
			spotifyLink: "https://open.spotify.com/album/2xqb5Ek27Uw1v0kOHGboFQ?si=AAWFgl5xQ9u3NwPnFYO8-w",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/what-did-you-think-would-happen-single/1391753569?mt=1&app=music",
			soundcloudLink: undefined
		},
		{
			title: "what did you think would happen?",
			label: "self-released collab w/ homesick",
			albumArt: "img/album_artwork/whatdidyouthinkwouldhappen.jpg",
			bandcampLink: "https://woulg.bandcamp.com/album/what-did-you-think-would-happen-collab-w-homesick",
			spotifyLink: "https://open.spotify.com/album/2xqb5Ek27Uw1v0kOHGboFQ?si=AAWFgl5xQ9u3NwPnFYO8-w",
			appleMusicLink: "https://geo.itunes.apple.com/us/album/what-did-you-think-would-happen-single/1391753569?mt=1&app=music",
			soundcloudLink: undefined
		}
	]
};

// initial update on load
updateDisplay();