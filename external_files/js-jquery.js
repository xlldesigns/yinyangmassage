/*Check Contact Form*/
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

/*Image Rotation*/
var images = [
'images/rotator/1.jpg',
'images/rotator/2.jpg',
'images/rotator/3.jpg',
'images/rotator/4.jpg',
'images/rotator/5.jpg'];
var t = 1;
function rotate(){
	var rot = document.getElementById('rotator');
	
	if(t!=4){
		rot.style.backgroundImage="url("+images[t]+")";
		t++;
	}else{
		rot.style.backgroundImage="url("+images[t]+")";
		t=0;
	}
}

setInterval("rotate()", 4000);

/*Open Nav*/
$(document).ready(function(){
	$('#menuicon').click(function(){
		$('#menuicon').css("display","none");
		$('#navbg').css("width","100%");
		$('nav a').css("display","inline-block");
	});
});