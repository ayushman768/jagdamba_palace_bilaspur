(function() {
    var body = document.getElementById('body');
    var section = document.createElement('section');

    body.appendChild(section);
	
	var content_jason = [{
		
		heading:'<h1  class="color_white">Welcome To <br> Maa Jagdamba Palace</h1>',
		para:'<p class="color_white"><b>Maa Jagdamba Palace in Bilaspur-chhattisgarh. The hotel is strategically located in Mangla Road, Beside Holy Cross School, Bilaspur. Many have also reviewed the hotel to be among the sought after Hotels in Bilaspur-chhattisgarh. The hotel functions rom 10:00 - 22:00 all through the week. Catering to the convenience of its guests, the hotel makes available various</i></b></p>',
		link:'Book Now'
	},{
		img01:'images/room_maa_jagdamba_palace_in_bilaspur.png',
		img02:'images/food_maa_jagdamba_palace_in_bilaspur.png'
	}]
	
	document.querySelector('section').innerHTML += `
       <div class="container">
	        <div class="row">
			     <div class="col-md-6">
				     <div class="my_banner_content pad-10">
					     ${content_jason[0].heading}
						 ${content_jason[0].para}
						 <a href="tel:" class="my_btn">BOOK NOW</a>
					 </div>
				 </div>
				 <div class="col-md-6">
				     <div class="my_banner_content">
					     <div class="col-md-6">
						    <div class="banner_img">
							   <img src="${content_jason[1].img01}" class="img-responsive">
							</div>
						 </div>
                         <div class="col-md-6">
						    <div class="banner_img">
							    <img src="${content_jason[1].img02}" class="img-responsive">
							</div>
						 </div>
						
					 </div>
				 </div>
			</div>
	   </div>`
        ;
})()