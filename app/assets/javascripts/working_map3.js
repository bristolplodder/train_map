  function initialize() {
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(51.5, -2.7), 10);
        GEvent.addListener(map, "click", function() {
          alert("Hello You clicked the map.");
         });
      }
    }  