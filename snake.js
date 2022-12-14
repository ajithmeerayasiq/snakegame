var htrs, i=0,sx=0,sy=0,ei=0;
var hx=150,hy=0,x=0,y=0;
var transvalue, lastpress=0;

var rx=0,ry=0,fleft=0;
var exarr = [right];


var allblocks = document.querySelectorAll(".sbody");

	var bcount = document.querySelectorAll(".sbody").length;

// 	allblocks.forEach(function(value) {
//   value.style.transform = "translate("+x+"px,"+y+"px)";
//   x=x+30;
// });


	randomx();
	randomy();

	function randomx(){
rx = Math.floor(Math.random() * 1000);

var three= rx%30;

if(three){
randomx();
}

if(rx>870 || rx<0){
randomx();
}

document.getElementById("prey").style.transform = "translate("+rx+"px,"+ry+"px)";
}

	function randomy(){
ry = Math.floor(Math.random() * 1000);

var three= ry%30;

if(three){
randomy();
}

if(ry>480 || ry<0){
randomy();
}

document.getElementById("prey").style.transform = "translate("+rx+"px,"+ry+"px)";
}

// document.getElementById("prey").style.transform = "translate("+rx+"px,"+ry+"px)";

function listenevent(){
	document.getElementById("startbutton").style.display = "none";
	window.addEventListener('keydown', event => {
  switch(event.key) {
  case "ArrowUp":
  	var getlen = exarr.length;
  		getlen=getlen-1;
  		if (exarr[getlen]!=up && exarr[getlen]!=down) {
    exarr.push(up);
			}
    break;
  case "ArrowDown":
  	var getlen = exarr.length;
  		getlen=getlen-1;
  		if (exarr[getlen]!=down && exarr[getlen]!=up) {
    exarr.push(down);
			}
    break;
  case "ArrowRight":
  	var getlen = exarr.length;
  		getlen=getlen-1;
  		if (exarr[getlen]!=right && exarr[getlen]!=left) {
    exarr.push(right);

  		}
    break;
  case "ArrowLeft":
  	var getlen = exarr.length;
  		getlen=getlen-1;
  		if (exarr[getlen]!=left && exarr[getlen]!=right) {
    exarr.push(left);
			}
    break;
  default:
    // code block
}
});

}

function execut(){
	var arlen = exarr.length;
	console.log("array length = "+arlen);
	if (arlen==1) {
		window.myVar= setInterval(exarr[0], 250);
	}
	else{
		exarr.shift()	;
		window.myVar= setInterval(exarr[0], 250);
	}

}


	function down(){

		// if(lastpress!="ArrowUp"){
		
		// clearInterval(window.myVar);

   // window.myVar= setInterval(move, 1000);

		// function move(){
			var htrs =document.getElementById("shead").style.transform;
			// sx=hx;sy=hy;
			// var htrs="translate("+sx+"px,"+sy+"px)";

			hy=hy+30;
			document.getElementById("shead").style.transform = "translate("+hx+"px,"+hy+"px)";

			var hcheck =document.getElementById("shead").style.transform;

			for ( i = 0; i < bcount-1; i++) {
			allblocks[i].style.transform = allblocks[i+1].style.transform;
			}

			allblocks[bcount-1].style.transform =htrs;


			for ( i = 0; i < bcount-1; i++) {
				var temps = allblocks[i].style.transform;
				if (temps==hcheck) {
					clearInterval(window.myVar);
				document.getElementById("butcontain").style.display = "block";
				document.getElementById("gamovr").style.display = "block";
				return;
				}

			// allblocks[i].style.transform = allblocks[i+1].style.transform;
			}


			if (hx==rx&&hy==ry) {
				randomx();
	randomy();
			}

			if(hy==510){
				clearInterval(window.myVar);
				document.getElementById("butcontain").style.display = "block";
				document.getElementById("shead").style.display = "none";
				document.getElementById("gamovr").style.display = "block";
				return;
			}			




// }

// }
lastpress="ArrowDown";
// ei++;
// exarr.shift()	;
clearInterval(window.myVar);
execut();
}

function up(){
		
		// if(lastpress!="ArrowDown"){

		// clearInterval(window.myVar);

   // window.myVar= setInterval(move, 1000);

		// function move(){
			var htrs =document.getElementById("shead").style.transform;

			hy=hy-30;
			document.getElementById("shead").style.transform = "translate("+hx+"px,"+hy+"px)";

			var hcheck =document.getElementById("shead").style.transform;


			for ( i = 0; i < bcount-1; i++) {
			allblocks[i].style.transform = allblocks[i+1].style.transform;
			}

			allblocks[bcount-1].style.transform =htrs;


			for ( i = 0; i < bcount-1; i++) {
				var temps = allblocks[i].style.transform;
				if (temps==hcheck) {
					clearInterval(window.myVar);
				document.getElementById("butcontain").style.display = "block";
				document.getElementById("gamovr").style.display = "block";
				return;
				}

			// allblocks[i].style.transform = allblocks[i+1].style.transform;
			}

			if (hx==rx&&hy==ry) {
				randomx();
				randomy();
			}

			if(hy==-30){
				clearInterval(window.myVar);
				document.getElementById("butcontain").style.display = "block";
				document.getElementById("shead").style.display = "none";
				document.getElementById("gamovr").style.display = "block";
				return;
			}



// }

// }

lastpress="ArrowUp";
clearInterval(window.myVar);
execut();
}

function right(){

	// if(lastpress!="ArrowLeft"){
		
		// clearInterval(window.myVar);

   // window.myVar= setInterval(move, 1000);

		// function move(){
			var htrs =document.getElementById("shead").style.transform;

			hx=hx+30;
			document.getElementById("shead").style.transform = "translate("+hx+"px,"+hy+"px)";

			var hcheck =document.getElementById("shead").style.transform;



			for ( i = 0; i < bcount-1; i++) {
			allblocks[i].style.transform = allblocks[i+1].style.transform;
			}

			allblocks[bcount-1].style.transform =htrs;

						for ( i = 0; i < bcount-1; i++) {
				var temps = allblocks[i].style.transform;
				if (temps==hcheck) {
					clearInterval(window.myVar);
				document.getElementById("butcontain").style.display = "block";
				document.getElementById("gamovr").style.display = "block";
				return;
				}

			// allblocks[i].style.transform = allblocks[i+1].style.transform;
			}

			if (hx==rx&&hy==ry) {
				randomx();
				randomy();
			}

			if(hx==900){
				clearInterval(window.myVar);
				document.getElementById("butcontain").style.display = "block";
				document.getElementById("shead").style.display = "none";
				document.getElementById("gamovr").style.display = "block";
				return;
			}



// }

// }
lastpress="ArrowRight";
clearInterval(window.myVar);
execut();
}

function left(){

	// if(lastpress!="ArrowRight"){
		
		// clearInterval(window.myVar);

   // window.myVar= setInterval(move, 1000);

		// function move(){
			var htrs =document.getElementById("shead").style.transform;

			hx=hx-30;
			document.getElementById("shead").style.transform = "translate("+hx+"px,"+hy+"px)";

			var hcheck =document.getElementById("shead").style.transform;



			for ( i = 0; i < bcount-1; i++) {
			allblocks[i].style.transform = allblocks[i+1].style.transform;
			}

			allblocks[bcount-1].style.transform =htrs;

						for ( i = 0; i < bcount-1; i++) {
				var temps = allblocks[i].style.transform;
				if (temps==hcheck) {
					clearInterval(window.myVar);
				document.getElementById("butcontain").style.display = "block";
				document.getElementById("gamovr").style.display = "block";
				return;
				}

			// allblocks[i].style.transform = allblocks[i+1].style.transform;
			}

			if (hx==rx&&hy==ry) {
				randomx();
				randomy();
			}

			if(hx==-30){
				clearInterval(window.myVar);
				document.getElementById("butcontain").style.display = "block";
				document.getElementById("shead").style.display = "none";
				document.getElementById("gamovr").style.display = "block";
				return;
			}



// }

// }

lastpress="ArrowLeft";
clearInterval(window.myVar);
execut();
}