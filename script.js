// like/unlike button functionality

window.addEventListener("load", function(){

  var like_button = document.getElementsByClassName("action action--like")[0];

  like_button.addEventListener("click", function(){

	if  (like_button.innerHTML==="Like"){
		like_button.innerHTML="Unlike"
		var like_plus = document.getElementsByClassName("likeability")[0].textContent;
    	newlikes=parseInt(like_plus)+1;
    	document.getElementsByClassName("likeability")[0].innerHTML = newlikes + " likes";
		}
	else 
		{like_button.innerHTML="Like"
		var like_minus = document.getElementsByClassName("likeability")[0].textContent;
    	newlikes=parseInt(like_minus)-1;
    	document.getElementsByClassName("likeability")[0].innerHTML = newlikes + " likes";
		}
	});
});


