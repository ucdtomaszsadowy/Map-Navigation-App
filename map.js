mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXN6c2Fkb3d5IiwiYSI6ImNsanhjcnYzcTAzbXIzY3F6a2lpbzU3bmUifQ.8pxxn7C8_25v41P2f87mxQ';

var map, directions;
var currentRoute;

navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {enableHighAccuracy: true})

function successPosition(position) {
    var userLocation = [position.coords.longitude, position.coords.latitude];
    mapSet(userLocation, 14);
}

function errorPosition() {
    console.log('Unable to get position');
    mapSet([0, 0], 1);
}

function mapSet(center, zoom){
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/tomaszsadowy/cljxdnelt001s01qj7wjfd3l2',
        center: center,
        zoom: zoom
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');

    directions.on('route', function(ev) {
        currentRoute = ev.route;  // update the current route
        // clear the carbon emission calculation
        document.getElementById('carbonFootprint').innerText = "";
        document.getElementById('carbonFootprintContainer').style.display = 'none';
    });
}


document.getElementById('startGpsButton').addEventListener('click', function() {
    navigator.geolocation.watchPosition(rtPosition, errPosition, {enableHighAccuracy: true});
});

document.getElementById('carbonFootprintButton').addEventListener('click', function() {
    if (currentRoute) {
        var distanceInMeters = currentRoute[0].distance;
        var distanceInMiles = distanceInMeters * 0.000621371;
        var carbonEmissions = distanceInMiles * 404; // in grams

        document.getElementById('carbonFootprint').innerText = `Carbon Emissions: ${carbonEmissions.toFixed(2)} grams`;
        document.getElementById('carbonFootprintContainer').style.display = 'block';
    }
});

document.getElementById('fuelCostButton').addEventListener('click', function() {
    if (currentRoute) {
        var distanceInMeters = currentRoute[0].distance;
        var distanceInMiles = distanceInMeters * 0.000621371;
        
        var fuelEfficiency = 40; // ireland average
        var costPerGallon = 5; // ireland average
        var fuelUsed = distanceInMiles / fuelEfficiency; // fuel used in gallons
        var cost = fuelUsed * costPerGallon; // total fuel cost

        document.getElementById('fuelCost').innerText = `Fuel Cost: €${cost.toFixed(2)}`;
        document.getElementById('fuelCostContainer').style.display = 'block';
    }
});


function rtPosition(position) {
    var userLocation = [position.coords.longitude, position.coords.latitude];
    //update user's current position on the map
    directions.setOrigin(userLocation);
    map.flyTo({ center: userLocation });
}

function errPosition() {
    console.log('Unable to get position');
}
