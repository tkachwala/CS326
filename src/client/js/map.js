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


// Initialise the google map
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

/**
 * Function to create a marker on the map.
 * @param {Object} place - Place object containing details of the location.
 * @param {Object} map - Google Map object.
 */

function createMarker(place, map) {
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        }
    });

    marker.addListener('click', () => {
        const infoPanel = document.getElementById('info');
        infoPanel.innerHTML = `
            <div>
                <h2>${place.name}</h2>
                <p>Address: ${place.vicinity}</p>
                <p>Rating: ${place.rating || 'Not rated'}</p>
                <button id="addButton-${place.place_id}" class="add-to-bucket">Add to Bucket List</button>
            </div>`;
        infoPanel.style.display = 'block';
    });
}

// Listen on the parent container, checking if the clicked element has a class 'add-to-bucket'
document.getElementById('info').addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-bucket')) {
        const buttonId = event.target.id;
        const placeId = buttonId.replace('addButton-', '');
        const placeName = document.querySelector(`#info h2`).textContent;
        const placeAddress = document.querySelector(`#info p`).textContent;
        addToBucketList(placeId, placeName, placeAddress);
    }
});

window.addToBucketList = function(placeId, name, vicinity) {
    const bucketList = document.getElementById('bucket-list-items');
    const newItem = document.createElement('li');
    newItem.innerHTML = `<strong>${name}</strong>: ${vicinity}`;
    bucketList.appendChild(newItem);
};


/**
 * Function to escape HTML special characters.
 * @param {string} str - Input string.
 * @returns {string} - Escaped string.
 */

function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}


/**
 * Function to handle location error.
 * @param {boolean} browserHasGeolocation - Whether browser supports geolocation.
 * @param {Object} pos - Geolocation position.
 */

function handleLocationError(browserHasGeolocation, pos) {
    console.log(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesnt support geolocation.');
}
