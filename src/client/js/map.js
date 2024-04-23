// Import necessary items
import db from './db.js';


// Add similar geolocation and map initialization logic here as you had in app.js
document.addEventListener('DOMContentLoaded', () => {
    initMap(); // Initialize and display the map
});


function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 15
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Your Location'
            });
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    console.log(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesnt support geolocation.');
}
