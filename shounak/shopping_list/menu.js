var prices = [5,6,7,9,10];

function calc() {
	var ans=0,i;
	document.getElementById('answer').innerHTML = 0;
	for(i=1;i<=5;i++) {
		//document.getElementsByTagName('body').innerHTML += 'Item'+i;
		var x = document.getElementById('Item'+i).value;
		ans += Number(document.getElementById('Item'+i).value)*prices[i-1];
	}
	document.getElementById('answer').innerHTML = ans;
}

function reset(){
	document.getElementById('answer').innerHTML = null;
	for(i=1;i<=5;i++) {
		document.getElementById('Item'+i).value = 0;
	}
}

function inc(i){
	document.getElementById('Item'+i).value++;
}

function dec(i){
	if(Number(document.getElementById('Item'+i).value) > 0)
		document.getElementById('Item'+i).value--;
}