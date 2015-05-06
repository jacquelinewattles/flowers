(function(){
  	// $('#nav').localScroll(800);

  	// $('#intro').parallax("50%", 0.1);
  	// $('#industry').parallax("50%", 0.1);
   //  $('#map-wrapper').parallax("50%", 0.1);
  	// $('#flower-school').parallax("50%", 0.4);
  	// $('#end').parallax("50%", 0.3);
    // Init Skrollr
    var s = skrollr.init();


  // MAP DIV

  var map = L.map('map', {scrollWheelZoom: false}).setView([39.2500,-97.743061], 3);
    
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(map);

  var flowerInfo = {
  
  'rose':{  
    flower:'Rose',
    thisinfo:'Today, some 78 percent of the 4 billion cut flower stems purchased in the U.S. — including the roses bought on Valentine\'s Day — come from Colombia and Ecuador, where they are grown in large production greenhouses, then harvested, sorted and shipped out around the world. Roses are the most important traded product of the cutflower industry and play a key role in the $20 billion U.S. floral industry.',
    thisinfoI: 'Here is where it goes next',
    pic: '',
    lat:0.5376666,
    lng:-77.8739844,
    zoom: 5,
    source:'http://www.organicbouquet.com/i_504/msnbc-article-roses.html'
    },

  'tulip':{  
    flower:'Tulip',
    thisinfo:'Holland\'s vast wealth of cut flowers is still readily available in the U.S. Tulips lead the list of top exports from the Netherlands, accounting for almost 95% of all U.S. tulip imports. Roses, lilies, Gerberas, Freesias, snapdragons, and cymbidium orchids are other Dutch favorites.',
    thisinfoI: 'here we go',
    pic: '',
    lat:52.2129918,
    lng:5.2793703,
    zoom: 5,
    source:'http://www.800florals.com/care/flowers-sources.asp',
    },

  'lily':{
    flower:'Lily',
    thisinfo:'As of 2011, the majority of Lily imports come from Costa Rica. The Central American country accounted for 43 percent of the 15 million lilies imported that year.',
    thisinfoI: 'here we go',
    pic: '',
    lat:9.8846329,
    lng:-84.9023777,
    zoom: 8,
    source:'',
    },

  'orchid':{ 
    flower:'Orchid',
    thisinfo:'The U.S. imported more than 83 million Orchids in 2014, and 61.3 million were brought in from Thailand. The Netherlands and Taiwan imported the second-most.',
    thisinfoI: '6.6 million orchids are grown for U.S. consumption in Thailand each year. Orchids like to grow in warm, dry weather and bloom just once per year, though a fully grown orchid will stay in bloom for six to ten weeks. Once the orchids are fully-grown, they are packed up and shipped to the U.S. the same way tourists are: by commercial airline.',
    pic: 'imgs/orchid-taiwan.jpg',
    lat:13.03887,
    lng:101.490104,
    zoom: 8,
    source:'http://apps.fas.usda.gov/gats/default.aspx',
    },

  };

  $('.mapButton').on('click', function(){
      var id = $(this).attr('data-which');
      console.log(id);
      $('#map-canvas').html('')
                      .append(flowerInfo[id].thisinfo)
                      .addClass('canvas-alive')
                      .append('<div class="next-button" data-which="'+[id]+'"><img src="imgs/next-button.png"></div>');
      $('.map-title').html('')
                    .append(flowerInfo[id].flower);
      $('.map-button-wrapper').find('img').removeClass('active-map-button');
      $(this).find('img').addClass('active-map-button')
      var latlng = L.latLng(flowerInfo[id].lat, flowerInfo[id].lng);
      map.setView(latlng, flowerInfo[id].zoom);
  })

  $('.next-button').on('click', function(){
            var id = $(this).attr('data-which');
            console.log(id);
            $('#map-canvas').html('')
                          .append(flowerInfo[id].thisinfoI);
            $('#map-pics').append('<img src="'+flowerInfo[id].pic+'">');
      })


  // END MAP DIV




}).call(this);

