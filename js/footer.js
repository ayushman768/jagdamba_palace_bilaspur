(function() {
    var body, footer;
    body = document.getElementById('my_body');
    footer = document.createElement('footer');

    body.appendChild(footer);
    footer.innerHTML += '<div class="container"><div class="row"></div></div>';

    var jason05 = [{
        head: 'Our Menu',
        link01: '<a hrfe="index.html">Home</a>',

        link02: '<a href="about.html">About</a>',

        link03: '<a href="rooms.html">Room</a>',

        link04: '<a href="resturant.html">Restaurent</a>',

        link05: '<a href="contact.html">Contact Us</a>',

    }, {
        head01: 'Our Service',
        link001: '<a hrfe="#">Room Service</a>',

        link002: '<a href="#">Restaurent</a>',

        link003: '<a href="#">Parking</a>',

        link004: '<a href="#">Rooms</a>',

        link005: '<a href="#">Loundry</a>',
    }, {
        head02: 'Our Address',
        phone01: '<a hrfe="tel:8349680000"><i class="fa fa-whatsapp" style="font-size:24px; color:white;"></i> 8349680000</a>',

        phone02: '<a href="tel:07752357487"><i class="fa fa-phone" style="font-size:24px;  color:white;"></i> 07752357487</a>',

        email: '<a href="miailto:maajagdambahotel2021@gmail.com"><i class="fa fa-envelope" style="font-size:24px; color:white;"></i> maajagdambahotel2021@gmail.com</a>',

        address: '<a href="#"><i class="fa fa-map-marker" style="font-size:24px; color:white;"></i> Mangla Road, Beside Holy Cross School, Bilaspur</a>',


    }]


    document.querySelector('footer>.container>.row').innerHTML += `
           <div class="col-md-4">
              <div class="my_footer_widget">
                 <h3>${jason05[0].head}</h3>
                    <ul class="nav">
                        <li>${jason05[0].link01}</li>
                        <li>${jason05[0].link02}</li>
                        <li>${jason05[0].link03}</li>
                        <li>${jason05[0].link04}</li>
                        <li>${jason05[0].link05}</li>
                    </ul>
              </div>
           </div>
           <div class="col-md-4">
           <div class="my_footer_widget">
            <h3>${jason05[1].head01}</h3>
               <ul class="nav">
                  <li>${jason05[1].link001}</li>
                  <li>${jason05[1].link002}</li>
                  <li>${jason05[1].link003}</li>
                  <li>${jason05[1].link004}</li>
                  <li>${jason05[1].link005}</li>
               </ul>
           </div>
      </div>
      <div class="col-md-4">
           <div class="my_footer_widget">
            <h3>${jason05[2].head02}</h3>
               <ul class="nav">
                  <li>${jason05[2].phone01}</li>
                  <li>${jason05[2].phone02}</li>
                  <li>${jason05[2].email}</li>
                  <li>${jason05[2].address}</li>
                 
               </ul>
           </div>
      </div>
        `;



})();