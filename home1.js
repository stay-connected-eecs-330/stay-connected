function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function myFunction(){
	document.getElementById("myForm").style.display = "block";
	 var friend = document.getElementById("friend").value;
	 var date = document.getElementById("date").value;
	 if(friend=="" || date==""){
	 	alert("Please fill all parts of the form");
	 	return;
	 }
	 let element = document.getElementById("list");
	 element.innerHTML +='<li> <h2 class="friend-name">' +friend+ '</h2> <h3>last hangout: '+date+'</h3>  </li>';
	 document.getElementById("myForm").style.display = "none";



/*FACEBOOK JAVASCRIPT
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '934521526938622',
          xfbml      : true,
          version    : 'v2.6'
        });
      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

*/
/*
	 var together = friend + "\n" + date;
	 var node = document.createElement("LI");
	 var textnode = document.createTextNode(together);
	 node.appendChild(textnode);
	 document.getElementById("list").appendChild(node);
	 document.getElementById("myForm").style.display = "none";
	 */
}

function myFunction2(){
	document.getElementById("myForm").style.display = "block";
	 var friend = document.getElementById("friend").value;
	 var date = document.getElementById("date").value;
	 if(friend=="" || date==""){
	 	alert("Please fill all parts of the form");
	 	return;
	 }
	 let element = document.getElementById("list");
	 element.innerHTML +='<li> <h2 class="friend-name">' +friend+ '</h2> <h3>last hangout: '+date+'</h3>  </li>';
	 document.getElementById("myForm").style.display = "none";
 }
