window.addEventListener("load", function(){
  debugger

  // 1. Get the DOM element which will be clicked.
  var like_button = document.getElementsByClassName("action action--like")[0];
  // var unlike_button=document.getElementsByClassName("action action--unlike")
  
  // 2. Add a listener for the 'click' event onto that element.
  like_button.addEventListener("click", function(){

    // 3. The block for the listener should get the DOM
    //    element containing the text to do the following.
    var like_plus = parseInt(document.getElementsByClassName("likeability"));

    // 4. Modify that DOM element's integer to  increase by one
    (like_plus+1);

    // 5. Also modify the DOM to hide the "like button" link.
    like_button.style.display = "none";

  });
  
});


// instead of making the like button dissapear, make the text within like button change instead