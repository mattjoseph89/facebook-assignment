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


// comment link to text box

  	var comment_button = document.getElementsByClassName("action action--comment")[0];

  		comment_button.addEventListener("click", function(){

  		var comment_box=document.getElementsByTagName("textarea")[5];
  		comment_box.focus();

		});

// display comment replies
	
	var display_reply = document.getElementsByClassName("comment__info");
    
	for (var i=0;i < display_reply.length; i++)  {

  		display_reply[i].childNodes[3].addEventListener("click", function(){
  			var replies= event.target.parentNode.parentNode.childNodes[5];
  			if (replies.style.display == "none") {
  				replies.style.display = "block"
  			}
  			else {
  				replies.style.display = "none"
  			}
	}); 			
}			 



































var reply_likes = document.getElementsByClassName("comment__info");

	for (var i=0;i < display_reply.length; i++){

		reply_likes[i].childNodes[1].addEventListener("click", function(){

		if  (reply_likes[i].childNodes[1].innerHTML==="Like"){
			reply_likes[i].childNodes[1].innerHTML="Unlike"
			var reply_like_plus = event.target.parentNode.childNodes[5].textContent;
	    	newlikes=parseInt(reply_like_plus)+1;
	    	event.target.parentNode.childNodes[5].innerHTML = newlikes + " likes";
			}
		else 
			{reply_likes[i].childNodes[1].innerHTML="Like"
			var like_minus = document.getElementsByClassName("likeability")[0].textContent;
	    	newlikes=parseInt(like_minus)-1;
	    	document.getElementsByClassName("likeability")[0].innerHTML = newlikes + " likes";
			}
		});

	}



});


