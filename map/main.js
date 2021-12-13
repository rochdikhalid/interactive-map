/* An interactive map shows the population density of Morocco for each geographic level */

// Setting the map requirements //
const firstMap = L.map('map', {
    center: [32.43, -6.06],
    zoom: 3.75
});

// To set the map configuration
const OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(firstMap);

// Create a GeoJSON object to represent the 12 regions of Morocco
L.geoJSON(regions).addTo(firstMap);

// Define the color table //
colors = ['#f7fcfd','#e0ecf4','#bfd3e6','#9ebcda','#8c96c6','#8c6bb1','#88419d','#810f7c','#4d004b']

// Configure the color gradient based on the population density
function getColor(c) {
  return c > 8 ? '#810F7C':
         c > 7.5 ? '#88419D':
         c > 7  ? '#8C6BB1':
         c > 6.5  ? '#8C96C6':
         c > 5.5  ? '#9ebcda':
         c > 3  ? '#bfd3e6':
         c > 1.5   ? '#e0ecf4':
         c > 1   ? '#F7FCFD':
                    '#FFFFFF';
};

function style(feature) {
  return ({
    fillColor: getColor(feature.properties.population),
    fillOpacity: 0.3,
    color: '#FFF',
    dashArray: '3',
    weight: 2
  })
}

let geojson = L.geoJSON(regions, {style: style}).addTo(firstMap);

// Adding Some Interactions //

// To highlight features
function highlightFeatures(e) {
  let layer = e.target;
  layer.setStyle({
    color: '#555',
    dashArray: '',
    fillOpacity: 1,
    weight: 3
  })
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  controlPanel.update(layer.feature.properties);
}

// Reset the style as default
function reset(e) {
  geojson.resetStyle(e.target);
  controlPanel.update();
}

// Zooming to the feature
function zoomToFeature(e) {
  firstMap.fitBounds(e.target.getBounds());
}

// Executing events listeners //
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeatures,
    mouseout: reset,
    click: zoomToFeature
  })
}

// Adding custom control to the map //
let controlPanel = L.control({position: 'topright'});
controlPanel.onAdd = function() {
  this.cPanel = L.DomUtil.create('div', 'control-panel');
  this.update();
  return this.cPanel;
}

controlPanel.update = function(data) {
  this.cPanel.innerHTML = '<h4> Morocco Population Density </h4>' +  (data ?
    '<div class = "name">' + data.name + '</div><br/>' + '<br/><div class = "output" >' + data.population + ' million people </div>'
    : 'Hover over a region');
}

controlPanel.addTo(firstMap);

// Adding a custom legend to the map //
let legend = L.control({position: 'bottomleft'});
legend.onAdd = function() {
  let info = L.DomUtil.create('div', 'info');
  grades = [0, 0.5, 1, 1.5, 3, 5.5, 6.5, 7, 7.5, 8];
  for(let grade = 0; grade < grades.length; grade++) {
    info.innerHTML += 
    '<i style="background:' + getColor(grades[grade] + 1) + '"></i> ' +
    grades[grade] + (grades[grade + 1] ? ' &ndash; ' + grades[grade + 1] + '<br>' : ' +');
  }
  return info;
};

legend.addTo(firstMap);

L.geoJSON(regions, {style: style, onEachFeature: onEachFeature}).addTo(firstMap);
