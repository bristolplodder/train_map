  function initialize() {
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(51.5, -2.6), 10);
        GEvent.addListener(map, "click", function() {
          alert("You clicked the map.");
         });
      }
    }  