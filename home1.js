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
/*
	 var together = friend + "\n" + date;
	 var node = document.createElement("LI");
	 var textnode = document.createTextNode(together);
	 node.appendChild(textnode);
	 document.getElementById("list").appendChild(node);
	 document.getElementById("myForm").style.display = "none";
	 */
}

