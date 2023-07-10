mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXN6c2Fkb3d5IiwiYSI6ImNsanhjcnYzcTAzbXIzY3F6a2lpbzU3bmUifQ.8pxxn7C8_25v41P2f87mxQ';

var map, directions;

function rtPosition(position){
    var userLocation = [position.coords.longitude, position.coords.latitude];
    if(!map) {
        mapSet(userLocation);
    } else {
        //Update user's current position on the map
        directions.setOrigin(userLocation);
        map.flyTo({center: userLocation});
    }
}

function errPosition(){}

navigator.geolocation.watchPosition(rtPosition, errPosition, {enableHighAccuracy: true});

function mapSet(center){
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/tomaszsadowy/cljxdnelt001s01qj7wjfd3l2',
        center: center,
        zoom: 11
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });
      
    map.addControl(directions, 'top-left');
}
