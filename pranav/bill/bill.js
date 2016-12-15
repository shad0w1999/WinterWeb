function calcTotal(flag) {
	var total = 0;
	for(var i = 0; i < document.getElementsByName('quantity').length; i++) {
		if(document.getElementsByName('quantity')[i].value == "" || document.getElementsByName('quantity')[i].value < 0 || flag == 0) {
			document.getElementsByClassName('cost')[i].innerHTML=0;
			continue;
		}
		document.getElementsByClassName('cost')[i].innerHTML = Math.round((parseFloat(document.getElementsByName('quantity')[i].value) * parseFloat(document.getElementsByClassName('rate')[i].innerHTML)) * 100) / 100;
		total += Math.round((parseFloat(document.getElementsByName('quantity')[i].value) * parseFloat(document.getElementsByClassName('rate')[i].innerHTML))* 100) / 100;
	}
	document.getElementById('answer').innerHTML = total;
}