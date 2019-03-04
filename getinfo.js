
function expand(){

	document.getElementById("circle-coffee").style.display = "block";
	 var friend = document.getElementById("friend").value;
	 var date = document.getElementById("date").value;

}

function changeid ()
{
var e = document.getElementById("circlecoffee");
e.id = "circle-food";
}


$(window).on("click", ".small", function() {
    me = this;
    setTimeout( function() { $(me).addClass("big"); }, 1 );
});

$(window).on("click", ".big", function() {
    me = this;
    setTimeout( function() { $(me).removeClass("big"); }, 1 );
});


document.getElementById("curtainInput").addEventListener(
  "click",
  function(event) {
    if (event.target.value === "Open Curtain") {
      event.target.value = "Close Curtain";
    } else {
      event.target.value = "Open Curtain";
    }
  },
  false
);