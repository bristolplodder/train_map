 var customIcons = {
      restaurant: {
        icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png',
        shadow: 'http://labs.google.com/ridefinder/images/mm_20_shadow.png'
      },
      bar: {
        icon: 'http://labs.google.com/ridefinder/images/mm_20_red.png',
        shadow: 'http://labs.google.com/ridefinder/images/mm_20_shadow.png'
      }
    };

    function load() {
      var map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(51.5, -2.6),
        zoom: 10,
        mapTypeId: 'roadmap'
      });
      var infoWindow = new google.maps.InfoWindow;

for (var i = 0; i < 0; i++) {

stations = [
["Avonmouth Rail Station", 51.50035 , -2.69948],
["Bath Spa Rail Station", 51.37768 , -2.35703],
["Bedminster Rail Station", 51.44009 , -2.59416],
["Bristol Parkway Rail Station",  51.5138 , -2.54217],
["Bristol Temple Meads Rail Station", 51.44914 , -2.58132],
["Clifton Down Rail Station", 51.46454 , -2.61175],
["Filton Abbey Wood Rail Station", 51.50494 , -2.56244],
["Freshford Rail Station", 51.34203 , -2.30102],
["Keynsham Rail Station", 51.41797 , -2.49563],
["Lawrence Hill Rail Station", 51.45801 , -2.56444],
["Montpelier Rail Station", 51.46835 , -2.58869],
["Nailsea & Backwell Rail Station", 51.41941 , -2.75065],
["Oldfield Park - Lower Bristol Road", 51.38203 , -2.38063],
["Oldfield Park Rail Station", 51.37923 , -2.38051],
["Parson Street Rail Station", 51.43332 , -2.60775],
["Patchway Rail Station", 51.52593 ,  -2.5627],
["Pilning Rail Station", 51.55662 , -2.62712],
["Redland Rail Station", 51.46839 , -2.59913],
["Sea Mills Rail Station", 51.47999 , -2.64996],
["Severn Beach Rail Station", 51.56002 , -2.66449],
["Shirehampton Rail Station", 51.48435 , -2.67929],
["St Andrews Road Rail Station", 51.51276 , -2.69632],
["Stapleton Road Rail Station", 51.46751 , -2.56622],
["Weston Milton Rail Station", 51.34847 ,  -2.9424],
["Weston-super-Mare Rail Station", 51.34432 , -2.97168],
["Worle Rail Station", 51.35803 , -2.90964],
["Yate Rail Station",  51.5406 , -2.43252],
["Yatton Rail Station", 51.39101 , -2.82779]
];

xx = stations[i][1];
yy = stations[i][2]; 
//alert(xx+yy);


//      var point = new google.maps.LatLng((51.5+i/100),-2.6);
      var point = new google.maps.LatLng(xx,yy);
      var icon = 'http://labs.google.com/ridefinder/images/mm_20_blue.png';
      var shadow = 'http://labs.google.com/ridefinder/images/mm_20_shadow.png'
      var marker = new google.maps.Marker({
            map: map,
            position: point,
            icon: icon,
            shadow: shadow
          });
      var label = new Label({
          map: map
      })
      label.bindTo('position', marker, 'position');
     label.bindTo('text', marker, 'position');

}
      // Change this depending on the name of your PHP file
      
/*
      downloadUrl("xml_out3.php", function(data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName("marker");
        for (var i = 0; i < markers.length; i++) {
          var name = markers[i].getAttribute("name");
          var address = markers[i].getAttribute("address");
          var type = markers[i].getAttribute("type");
          var point = new google.maps.LatLng(
              parseFloat(markers[i].getAttribute("lat")),
              parseFloat(markers[i].getAttribute("lng")));
          var html = "<b>" + name + "</b> <br/>" + address;
          var icon = customIcons[type] || {};
          var marker = new google.maps.Marker({
            map: map,
            position: point,
            icon: icon.icon,
            shadow: icon.shadow
          });
          bindInfoWindow(marker, map, infoWindow, html);
        }
      });

*/
    }

    function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });
    }

    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function doNothing() {}

    //]]>