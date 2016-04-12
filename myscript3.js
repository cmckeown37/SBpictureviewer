


	var picList = new Array(6);
	var locationData = new Array(6);
	var captionData = new Array(6);

	var fbuttonlistener;
	var bbuttonlistener;

	var whichPic;



	picList [0] = "images/p0.jpg";
	picList [1] = "images/p1.jpg";
	picList [2] = "images/p2.jpg";
	picList [3] = "images/p3.jpg";
	picList [4] = "images/p4.jpg";
	picList [5] = "images/p5.jpg";

	locationData[0] = "Location: Bermuda";
	locationData[1] = "Location: Bermuda";
	locationData[2] = "Location: Coral Beach Club";
	locationData[3] = "Location: ";
	locationData[4] = "Location: ";
	locationData[5] = "Location: Concord. MA.";

	captionData[0] =
	captionData[1] = 
	captionData[2] =
	captionData[3] =
	captionData[4] =
	captionData[5] =



window.onload = function(){

	alert("Hi");

	whichPic = 0; 
	document.getElementById("picimg").src = "images/p0.jpg";

	fButtonListener = document.getElementById("Forward");
	bButtonListener = document.getElementById("Back");

	fButtonListener.addEventListener('click', function(event) {
		alert("don't poke me");
		++whichPic;
		if(whichPic >= picList.length){
			whichPic = 0;
		}

		document.getElementById("place").innerHTML = locationData[whichPic];

		document.getElementById("captionloc").src = captionData[whichPic];

		document.getElementById("picimg").src = "images/p0.jpg";
});


	bButtonListener.addEventListener('click', function(event){
		alert("don't poke me");
		--whichPic;
		if(whichPic < 0){
			whichPic = picList.length-1;
		}

	});
		