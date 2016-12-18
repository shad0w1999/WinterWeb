function openImage() {
	document.getElementsByClassName("closedImage")[0].setAttribute("class", "openedImage");
}

function closeImage() {
	document.getElementsByClassName("openedImage")[0].setAttribute("class", "closedImage");
}

function getImage(img) {
	document.getElementById("image").style.backgroundImage = "url(images/" + img + ".jpg)";
	openImage();
}

function getRandomImage() {
	var images = [ 'https://static.pexels.com/photos/126590/pexels-photo-126590.jpeg',
	'https://static.pexels.com/photos/54278/pexels-photo-54278.jpeg',
	'https://static.pexels.com/photos/33109/fall-autumn-red-season.jpg',
	'https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg',
	'https://static.pexels.com/photos/964/road-mountains-street-cliff.jpg',
	'https://static.pexels.com/photos/21787/pexels-photo.jpg',
	'https://static.pexels.com/photos/29967/pexels-photo-29967.jpg',
	'https://static.pexels.com/photos/30973/pexels-photo-30973.jpg',
	'https://static.pexels.com/photos/25193/pexels-photo.jpg',
	'https://static.pexels.com/photos/25377/pexels-photo-25377.jpg',
	'https://static.pexels.com/photos/68797/pexels-photo-68797.jpeg',
	'https://static.pexels.com/photos/129967/pexels-photo-129967.jpeg',
	'https://static.pexels.com/photos/7919/pexels-photo.jpg',
	'https://static.pexels.com/photos/24491/pexels-photo-24491.jpg',
	'https://static.pexels.com/photos/30773/pexels-photo-30773.jpg'
		];
	document.getElementById("image").style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";
	openImage();
}
