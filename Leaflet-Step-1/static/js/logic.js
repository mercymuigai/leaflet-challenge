// var geojsonUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

// Store our API endpoint inside queryUrl
var geojsonUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

// Perform a GET request to the query URL
d3.json(geojsonUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature, 
    pointToLayer:function(geoJsonPoint, latlng) {
        return L.circle(latlng);
        // return L.circle(latlng, { // circle takes x and y
        //     color: "black",
        //     fillColor: "green",
        //     fillOpacity: 0.75, 
        //     radius: 500
        //   }).addTo(earthquakes);
        
    },

})

// return L.circle(latlng, { // circle takes x and y
//     color: "green",
//     fillColor: "green",
//     fillOpacity: 0.75, // goes from 0 -1
//     radius: 500
//   }).addTo(earthquakes);

      
    // style: function (geoJsonFeature ) {
    //     return {
    //         color: "#000000",
    //         fillColor:"#3388ff",
    //         radius: 50
    //     }
    // }
//   });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });
}

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Street Map": streetmap,
//     "Dark Map": darkmap
//   };

//   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   };

//   // Create our map, giving it the streetmap and earthquakes layers to display on load
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [streetmap, earthquakes]
//   });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);
// }


// d3.json(geojsonUrl, function(data) {

// console.log (data);


// d3.json(queryUrl, function(data) {
//     // Once we get a response, send the data.features object to the createFeatures function
//     createFeatures(data.features);
//   });
  
//   function createFeatures(earthquakeData) {
  
//     // Define a function we want to run once for each feature in the features array
//     // Give each feature a popup describing the place and time of the earthquake
//     function onEachFeature(feature, layer) {
//       layer.bindPopup("<h3>" + feature.properties.place +
//         "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//     }
  
//     // Create a GeoJSON layer containing the features array on the earthquakeData object
//     // Run the onEachFeature function once for each piece of data in the array
//     var earthquakes = L.geoJSON(earthquakeData, {
//       onEachFeature: onEachFeature
//     });
  
//     // Sending our earthquakes layer to the createMap function
//     createMap(earthquakes);
//   }
  
//   function createMap(earthquakes) {
  
//     // Define streetmap and darkmap layers
//     var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "mapbox.streets",
//       accessToken: API_KEY
//     });
  
//     var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "mapbox.dark",
//       accessToken: API_KEY
//     });
  
//     // Define a baseMaps object to hold our base layers
//     var baseMaps = {
//       "Street Map": streetmap,
//       "Dark Map": darkmap
//     };
  
//     // Create overlay object to hold our overlay layer
//     var overlayMaps = {
//       Earthquakes: earthquakes
//     };
  
//     // Create our map, giving it the streetmap and earthquakes layers to display on load
//     var myMap = L.map("map", {
//       center: [
//         37.09, -95.71
//       ],
//       zoom: 5,
//       layers: [streetmap, earthquakes]
//     });
  
//     // Create a layer control
//     // Pass in our baseMaps and overlayMaps
//     // Add the layer control to the map
//     L.control.layers(baseMaps, overlayMaps, {
//       collapsed: false
//     }).addTo(myMap);
//   }
  

// });

// // var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"