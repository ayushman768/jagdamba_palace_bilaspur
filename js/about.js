(function() {
    var body = document.getElementById('my_body');
    var article = document.createElement('article');
    body.appendChild(article);
    //create SOme Bascic Elements
    document.querySelector('article').innerHTML += '<div class="container"><div class="row"><h1 class="text-center">Welcome To  Maa Jagadamba  Palace</h1></div></div>';

    var jason = [{
        img: 'images/birthday-celebration-in_maa_jagdamba_hotel_palace_in_bilaspur.png',
        name: 'Birthday Party',
        link: 'hall.html'
    }, {
        img: 'images/kitty_party_in_maa_jagadamba_hotel_palace.png',
        name: 'Kitty Party',
        link: 'hall.html',
    }, {
        img: 'images/resturent_in_maa_jagdamba_hotel_bilaspur.png',
        name: 'Restaurent',
        link: 'resturant.html',
    }, {
        img: 'images/conference_hall_in_maa_jagdamba_hotel_palace_i_bilaspur_chhatoshgarh.png',
        name: 'Confrance Hall',
        link: 'hall.html',
    }]

    for (var i = 0; i < jason.length; i++) {
        document.querySelector('article>.container>.row').innerHTML += `
             <div class="col-md-3">
                 <div class="my_facility text-center">
                     <a href="${jason[i].link}">
                         <img src="${jason[i].img}">
                         <p>${jason[i].name}</p>
                     </a>
                 </div>
             </div>
        `;
    }



})()

var my_Content = function() {
    var body = document.getElementById('my_body');
    var article01 = document.createElement('article');
    body.appendChild(article01);
    article01.setAttribute('class', 'article01');
    //create SOme Bascic Elements
    document.querySelector('.article01').innerHTML += '<div class="container"><div class="row"></div></div>';

    // Craeting Jason Data 
    var myContent = [{

        image: 'images/hotel.jpg',
        images: '',
    }, {
        poster01: 'images/room01.png'
    }]

    document.querySelector('.article01').innerHTML += `
		  <div class="container">
				<div class="row">
					 <div class="col-md-6">
					  
						<div class="my_slider">
							<div id="myCarousel" class="carousel slide" data-ride="carousel">
								<!-- Indicators -->
								<ol class="carousel-indicators">
								<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
								<li data-target="#myCarousel" data-slide-to="1"></li>
								<li data-target="#myCarousel" data-slide-to="2"></li>
								</ol>
								
								<!-- Wrapper for slides -->
								<div class="carousel-inner">
								
								<div class="item active">
								<img src="${myContent[0].image}" alt="" style="width:100%;">
								<div class="carousel-caption">
								
								</div>
								</div>
								<div class="item ">
								<img src="${myContent[0].image}" alt="" style="width:100%;">
								<div class="carousel-caption">
								
								</div>
								</div>
								
								</div>
								
								<!-- Left and right controls -->
								<a class="left carousel-control" href="#myCarousel" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left"></span>
								<span class="sr-only">Previous</span>
								</a>
								<a class="right carousel-control" href="#myCarousel" data-slide="next">
								<span class="glyphicon glyphicon-chevron-right"></span>
								<span class="sr-only">Next</span>
								</a>
								</div>
							
						</div>
					 </div>
					 <div class="col-md-6">
						 <div class="content_jagdamba_hotel">
							 <h1>Maa Jagdamba Palace</h1>
							 <p>Maa Jagdamba Palace in Bilaspur-chhattisgarh. The hotel is strategically located in Mangla Road, Beside Holy Cross School, Bilaspur. Many have also reviewed the hotel to be among the sought after Hotels in Bilaspur-chhattisgarh. The hotel functions rom 10:00 - 22:00 all through the week. Catering to the convenience of its guests, the hotel makes available various.

							 payment methods to ease out the payment process like,Net Banking & Cash.</p>
						 </div>
					 </div>
					 
				</div>
		  </div>`;

}
my_Content();

var room = function() {
    body = document.getElementById('my_body');
    article03 = document.createElement('article');
    body.appendChild(article03);
    article03.setAttribute('class', 'article03');
    article03.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Luxurious & Convenient</h2></div></div>';

    var jason04 = [{
        photo: 'images/room01.jpg',
        name: 'Luxurious Suite Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 1799/-</p><p>Double - 1999/-</p>',
        link: 'booking.html'

    }, {
        photo: 'images/room02.jpg',
        name: 'AC Deluxe Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 1299/-</p><p>Double - 1499/-</p>',
        link: 'booking.html'
    }, {
        photo: 'images/hotel03.jpg',
        name: 'Non AC Deluxe Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 999/-</p><p>Double - 999/-</p>',
        link: 'booking.html'
    }]

    for (var i = 0; i < jason04.length; i++) {
        document.querySelector('.article03>.container>.row').innerHTML += `
            <div class="col-md-4">
                <div class="my_room">
                    <img src="${jason04[i].photo}" class="img-responsive">
                    <p>${jason04[i].name}</p>
                    <p>${jason04[i].price}</p>
                    <a href="${jason04[i].link}" class="my_btn_1">Book Now</a>
                </div>
            </div>
        `;
    }

}
room();




