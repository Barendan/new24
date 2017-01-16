require([
    "jquery"
  ], function($) {
    $(document).ready(function (){

	    console.log("Meet 24: Initialized.");

	    var drank = $("#drank");
	    var nate = $("#natepic");

	    var uno = $(".heading-uno");
	    var dos = $(".heading-dos");
	    var tres = $(".heading-tres");

	    var head = $(".byhead");
	    var body = $(".bytorso");
	    var hip = $(".bywaist");

	    drank.click( function () {
	    	// if (uno.text().indexOf("Nathan") >= 0 ) {
	    	var imgObj = document.getElementById('natepic');

	        imgObj.src = grayscaleImage(imgObj);

	    	function grayscaleImage(imgObj) {
		        var canvas = document.createElement('canvas');
		        var canvasContext = canvas.getContext('2d');
		        
		        var imgW = imgObj.width;
		        var imgH = imgObj.height;
		        canvas.width = imgW;
		        canvas.height = imgH;
		        
		        canvasContext.drawImage(imgObj, 0, 0);
		        var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
		        
		        for(var y = 0; y < imgPixels.height; y++){
		            for(var x = 0; x < imgPixels.width; x++){

		                var i = (y * 4) * imgPixels.width + x * 4;
		                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
		                imgPixels.data[i] = avg; 
		                imgPixels.data[i + 1] = avg; 
		                imgPixels.data[i + 2] = avg;
		            }
		        }
	        
	        	canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	        	return canvas.toDataURL();
		    }

			uno.text("24 Hour Health");
			head.text("Vegan friendly, no sugar, low calorie, and last but not least made in the USA. It wasn't easy to come up with a recipe combining everything and STILL having it taste good. Years worth of taste testing, ingredient extraction, and searching the world for the most wholesome sources has led us to the fountain of health.");
			dos.text('What makes this any different from the other "vitamin drinks"?');
			body.text("First and foremost: the taste. By the time you reach the end of the bottle, you will forget about all the vitamins you are getting. We aren't just talking huge doses of Vitamin C like other drinks have. Vitamins for the heart, skin, eyes, brain, and even hair & nails.");
			tres.text('Why do I even want this?');
			hip.text("The everyday product for the everyday person. Created in the wonderful US of A. Specifically, Beverly Hills, California. Manufactured by SosoCouldBeFaster Industries Inc. in accordance with all the laws and whatnot.");

	    });

  		nate.click( function () {
	    	// if (uno.text().indexOf("Nathan") >= 0 ) {
	    	var imgObj = document.getElementById('drank');

	        imgObj.src = grayscaleImage(imgObj);

	    	function grayscaleImage(imgObj) {
		        var canvas = document.createElement('canvas');
		        var canvasContext = canvas.getContext('2d');
		        
		        var imgW = imgObj.width;
		        var imgH = imgObj.height;
		        canvas.width = imgW;
		        canvas.height = imgH;
		        
		        canvasContext.drawImage(imgObj, 0, 0);
		        var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
		        
		        for(var y = 0; y < imgPixels.height; y++){
		            for(var x = 0; x < imgPixels.width; x++){

		                var i = (y * 4) * imgPixels.width + x * 4;
		                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
		                imgPixels.data[i] = avg; 
		                imgPixels.data[i + 1] = avg; 
		                imgPixels.data[i + 2] = avg;
		            }
		        }

	        	canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	        	return canvas.toDataURL();
		    }

			uno.text("Nathan Rich");
			head.text("A man not defined by his past and yet still embracing it. After all, the progress he has made is phenomenal. Completely revitalizing himself and becoming the man that he wanted to be. There was just one thing missing: an easy solution to staying healthy and fit.");
			dos.text('What was your motivation for making 24 Hour Health');
			body.text("I wanted an easier way to get all the vitamins and minerals I needed in my diet without having to take 300 invidivual supplements. Something I could grab if I was on the run and especially something that didn't taste like raw chemicals.");
			tres.text('How has 24-Hour Health affected your life?');
			hip.text(" It's not only taken a worry out of my mind, it's got me feeling more energized and faster. Gone are the days when I used to stress about still eating healthy even when I was in a huge rush to get back to business matters. This has truly made my life, not only healthier, but easier.");
    	});


    

    // nate.click( function () {
    // 	if (uno.text().indexOf("Nathan") >= 0 ) {

    // 		uno.text("Nathan Rich");
    // 		head.text("A man not defined by his past and yet still embracing it. After all, the progress he has made is phenomenal. Completely revitalizing himself and becoming the man that he wanted to be. There was just one thing missing: an easy solution to staying healthy and fit.");
    // 		dos.text('What was your motivation for making 24 Hour Health');
    // 		body.text("I wanted an easier way to get all the vitamins and minerals I needed in my diet without having to take 300 invidivual supplements. Something I could grab if I was on the run and especially something that didn't taste like raw chemicals.");
    // 		tres.text('How has 24-Hour Health affected your life?');
    // 		hip.text(" It's not only taken a worry out of my mind, it's got me feeling more energized and faster. Gone are the days when I used to stress about still eating healthy even when I was in a huge rush to get back to business matters. This has truly made my life, not only healthier, but easier.");
    // });

    // });




    // var nav = $(".navigation1");

    // $(".hamburger").click( function () {
    //     if (hb.hasClass("is-inactive")){
    //       hb.removeClass("is-inactive").addClass("is-active");
    //       nav.addClass("open");

    //       $('.main-nav-container').animate({ 'top': "+=100%"}, 700);
    //       TweenMax.staggerFrom(mItems, 1, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.1);
    //       TweenMax.staggerFrom(".social-buttons .button", 2, {scale:0.25, opacity:0, delay:1.0, ease:Elastic.easeOut}, 0.1);
    //       $('.navigation-overlay').animate({ height: "+=100vh"}, 400);
    //     }
    //     else {    
    //       hb.removeClass("is-active").addClass("is-inactive");
    //       nav.removeClass("open");
    //       $('.main-nav-container').animate({ 'top': "-=100%"}, 300);
    //       $('.navigation-overlay').animate({ height: "-=100vh"}, 400);





    })
})
