function contact(){
	var first = document.getElementById('first').value;
	var last = document.getElementById('last').value;
	var email = document.getElementById('email').value;
	var comment = document.getElementById('comment').value;
	
	if(first=="" || last == "" || email == "" || comment == ""){
		alert('Please fill out all fields');
		return false;
	}else{
		return true;
	}
}

var t = 2;
function rotate(){
	var rot = document.getElementById('rotator');
	
	if(t==1){
		rot.style.backgroundImage="url(images/rotator/"+t+".jpg)";
		t++;
	}else if(t==2){
		rot.style.backgroundImage="url(images/rotator/"+t+".jpg)";
		t++;
	}else{
		rot.style.backgroundImage="url(images/rotator/"+t+".jpg)";
		t=1;
	}
}

setInterval("rotate()", 4000);

$(document).ready(function(){
	$('#menuicon').click(function(){
		$('#menuicon').css("display","none");
		$('#navbg').css("width","100%");
		$('nav a').css("display","inline-block");
	});
});