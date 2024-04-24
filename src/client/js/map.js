// Import necessary items
import db from './db.js';
document.addEventListener('DOMContentLoaded', () => {
    if (window.google && window.google.maps) {
        initMap();
    } else {
        const intervalId = setInterval(() => {
            if (window.google && window.google.maps) {
                clearInterval(intervalId);
                initMap();
            }
        }, 100);
    }
});

function initMap() {
    const center = { lat: 37.7749, lng: -122.4194 }; // Example location (San Francisco)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center
    });

    const service = new google.maps.places.PlacesService(map);
    const request = {
        location: center,
        radius: '1000',
        type: ['store']
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(place => {
                createMarker(place, map);
            });
        }
    });
}

function createMarker(place, map) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        }
    });
    const contentString = `
        <div>
            <h2>${place.name}</h2>
            <p>Address: ${place.vicinity}</p>
            <p>Rating: ${place.rating || 'Not rated'}</p>
        </div>`;
    marker.addListener('click', () => {
        const infoPanel = document.getElementById('info');
        infoPanel.innerHTML = contentString; 
        infoPanel.style.display = 'block'; 
    });
}



function handleLocationError(browserHasGeolocation, pos) {
    console.log(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesnt support geolocation.');
}
