var map; //map for the API 
var allLocation = []; //array for all the locations on where to measure trash
var allMarkers = []; //array for all the markers

const statsGUI = document.querySelector('#statistics');
const report = document.querySelector('report');

function initMap() { //initation
  map = new google.maps.Map(document.querySelector('#map'), { // where the map is located in HMTL
    center: {lat:21.300776, lng:-158.051877}, //where it will be defaulted too
    zoom: 15 //zoom of how close it is
  });

  map.addListener('click', () => { //resets the visibility of the markers
    return allMarkers.forEach((cur) => {
      return cur.setVisible(true)
    });
  });

  trashMarkers.forEach(cur => { //gets trash markers from data
    let marker = new google.maps.Marker(cur[0]);
    marker.addListener('click',function() {
      console.log('nice');
    });
    marker.setMap(map);
    allMarkers.push(marker);
  });

  // for(var coords in beachLocations) { //makes polygon from coordinates
  //   let location = new google.maps.Polygon({
  //     paths: beachLocations[coords],
  //     strokeColor: SeverityColor(this),
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: SeverityColor(this),
  //     fillOpacity: 0.35
  //   });
  //   location.setMap(map);
  //   allLocation.push(location);
  // };

  // function SeverityColor(polygon) {
  //   let markerCount = google.maps.geometry.poly.containsLocation(cur.position, polygon) ? true: false;
  //   console.log(markerCount);
  // };

  /* sets the test locations */
  var testLocation = new google.maps.Polygon({ /* testing purposes */
    paths: beachLocations.whiteplains,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  testLocation.addListener('click',function() { //if area clicked; marker for area appear
    allMarkers.map((cur) => { 
      return google.maps.geometry.poly.containsLocation(cur.position, testLocation) ? cur.setVisible(true) : cur.setVisible(false) //whether marker visible or not
    }); 
  }); //problem: need more dynamic marker to location ratio
  //testLocation.addListener('click',function(){console.log('oof')});
  /* test location end */
  
  /* sets polygons and permanent markers to set location */
  testLocation.setMap(map);
};

console.log(allMarkers);