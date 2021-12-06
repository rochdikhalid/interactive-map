# interactive-map
An interactive map built with JavaScript and Leaflet, it shows the population density (expressed in million people) of Morocco for each geographic level.

## Leaflet Setup
Note that the repository already includes the necessary library files to display the map. <br>
Go to this link to download the latest version of Leaflet: https://leafletjs.com/download.html

### To use the downloaded version of Leaflet

Inside the archives downloaded from the above link, you will see four things:<br>

* **leaflet.js** - This is the minified Leaflet JavaScript code.<br>
* **leaflet-src.js** - This is the readable, unminified Leaflet JavaScript, which is sometimes helpful for debugging.<br>
* **leaflet.css** - This is the stylesheet for Leaflet.
* **images** - This is a folder that contains images referenced by leaflet.css. It must be in the same directory as leaflet.css

Unzip the downloaded archive to your project directory and add this to the head of your HTML code:<br>

`<link rel="stylesheet" href="/path/to/leaflet.css" />` <br>
<br>
`<script src="/path/to/leaflet.js"></script>`

### To use the hosted version of Leaflet

Place this in the head of your HTML code:

`<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />`<br>
<br>
`<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>`

## Further Help
For more information, visit the official leaflet documentation: https://leafletjs.com/
