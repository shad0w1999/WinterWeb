window.onload = function setBackground() {
	for(var i = 0; i < document.querySelectorAll('.cardImage').length; i++) {
		document.querySelectorAll('.cardImage')[i].style.backgroundImage="url('" + document.querySelectorAll('.cardImage')[i].getAttribute("data-img-src") + "')";
	}

	for(var i = 0; i < document.querySelectorAll('.cardDots').length; i++) {
		document.querySelectorAll('.cardDots')[i].addEventListener("click", function() {
				this.classList.toggle('dotsOpen');
		});
	}

	for(var i = 0; i < document.querySelectorAll('.hideCard').length; i++) {
		document.querySelectorAll('.hideCard')[i].addEventListener("click", function() {
				this.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none";
		});
	}

	for(var i = 0; i < document.querySelectorAll('.cardSave').length; i++) {
		document.querySelectorAll('.cardSave')[i].addEventListener("click", function() {
				this.style.color="red";
				this.innerHTML="<span class='glyphicon glyphicon-chevron-down cardIcon' style='background: rgb(244, 66, 66)'></span>&nbsp;&nbsp;Saved";
		});
	}

}

function dispPanel() {
	document.getElementById('cover').style.display="block";
	document.getElementById('leftPanel').style.display="block";
	for(var i = 0; i < document.querySelectorAll('#bottomLeftLinks a').length; i++) {
		document.querySelectorAll('#bottomLeftLinks a')[i].classList.toggle('inPanel');
	}
}

function hidePanel() {
	document.getElementById('cover').style.display="none";
	document.getElementById('leftPanel').style.display="none";
	for(var i = 0; i < document.querySelectorAll('#bottomLeftLinks a').length; i++) {
		document.querySelectorAll('#bottomLeftLinks a')[i].classList.toggle('inPanel');
	}
}

function homeActive() {
	if(document.querySelector('#home a').classList[0] != 'active') {
		document.querySelector('#home a').classList.toggle('active');
		document.querySelector('#recommended a').classList.toggle('active');
		changeSection();
		document.getElementById('heading').innerHTML="My List";
		changeTitle('My List');
	}
}

function recommendedActive() {

	if(document.querySelector('#recommended a').classList[0] != 'active') {
		document.querySelector('#recommended a').classList.toggle('active');
		document.querySelector('#home a').classList.toggle('active');
		changeSection();
		document.getElementById('heading').innerHTML="Recommended";
		changeTitle('Recommended');
	}

}

function changeSection() {
	document.querySelector('#homeSection').classList.toggle('activeSection');
	document.querySelector('#recommendedSection').classList.toggle('activeSection');
}

function openSearch() {
	document.querySelector('#searchCover').style.display="block";
	document.querySelector('#bottomLeftLinks').style.display="none";
	document.querySelector('#navLinks').classList.toggle('hidden');
	document.querySelector('#navRight').style.display="none";
	document.querySelector('#searchPanel').style.display="flex";
	homeActive();
}

function closeSearch() {
	document.querySelector('#searchCover').style.display="none";
	document.querySelector('#bottomLeftLinks').style.display="block";
	document.querySelector('#navLinks').classList.toggle('hidden');
	document.querySelector('#navRight').style.display="flex";
	document.querySelector('#searchPanel').style.display="none";
}

function changeTitle(page) {
	document.querySelector('title').innerHTML='Pocket: ' + page;
}