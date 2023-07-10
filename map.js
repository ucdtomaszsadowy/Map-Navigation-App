mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXN6c2Fkb3d5IiwiYSI6ImNsanhjcnYzcTAzbXIzY3F6a2lpbzU3bmUifQ.8pxxn7C8_25v41P2f87mxQ';

navigator.geolocation.getCurrentPosition(rtPosition, errPosition, {enableHighAccuracy: true})
    
function rtPosition(position){
    mapSet([position.coords.longitude, position.coords.latitude])
}

function errPosition(){}

function mapSet(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/tomaszsadowy/cljxdnelt001s01qj7wjfd3l2',
        center: center,
        zoom: 11
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoidG9tYXN6c2Fkb3d5IiwiYSI6ImNsanhjcnYzcTAzbXIzY3F6a2lpbzU3bmUifQ.8pxxn7C8_25v41P2f87mxQ',
      });
      
      map.addControl(directions, 'top-left');
}