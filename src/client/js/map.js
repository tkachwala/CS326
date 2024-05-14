// Import necessary items
// we migjt need this db for add and get when we do the backend integration for the app

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


// Initialize the google map using an example location
function initMap() {
    const center = { lat: 37.7749, lng: -122.4194 };
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

// this is an event listener for the bucker. if the event's target has an add to bucket button then you add it to the bucket list element using address and placeID 
document.getElementById('info').addEventListener('click', async function(event) {
    if (event.target.classList.contains('add-to-bucket')) {
        const buttonId = event.target.id;
        const placeId = buttonId.replace('addButton-', '');
        const placeName = document.querySelector(`#info h2`).textContent;
        const placeAddress = document.querySelector(`#info p`).textContent;
        try {
            const response = await fetch(`http://localhost:3000/add/${sessionStorage.getItem("user")}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: placeName,
                    address: placeAddress
                })
            });
            const data = await response.json();
            console.log('Data:', data);
            console.log('Response:', response);
            if (response.ok) {
                if (data.message === 'Item already exists in bucket list') {
                    alert(data.message);
                } else {
                    addToBucketList(placeName, placeAddress);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
});

window.addToBucketList = function(name, vicinity) {
    const bucketList = document.getElementById('bucket-list-items');
    const newItem = document.createElement('li');
    newItem.innerHTML = `<strong>${name}</strong>: ${vicinity} <button class="delete-item">❌</button>`;
    bucketList.appendChild(newItem);

    // Add event listener to the delete button of this item
    newItem.querySelector('.delete-item').addEventListener('click', async () => {
        try {
            // Send request to delete the item from the backend
            const response = await fetch(`http://localhost:3000/bucketlist/${sessionStorage.getItem("user")}/${name}`, {
                method: 'DELETE'
            });

            // Handle response
            if (response.ok) {
                // Remove the item from the UI
                newItem.remove();
                console.log('Item deleted successfully');
            } else {
                console.error('Failed to delete item:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    });
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
 * @param {boolean} browserHasGeolocation - Whether browser supports geolocation. (this is for our next implementation)
 * @param {Object} pos - Geolocation position.
 */

function handleLocationError(browserHasGeolocation, pos) {
    console.log(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesnt support geolocation.');
}


// Filter Button
document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.getElementById('filterButton');
    filterButton.addEventListener('click', () => toggleFilterOptions(true));
    const closeButton = document.getElementById('closeFilterButton');
    closeButton.addEventListener('click', () => toggleFilterOptions(false));
 });

 function toggleFilterOptions(show) {
    const filterOptions = document.getElementById('filterOptions');
    filterOptions.style.display = show ? 'block' : 'none';
 }
 

 window.addEventListener('load', async () => {
    const email = sessionStorage.getItem('user');
    // const places = 
    try {
        const response = await fetch(`http://localhost:3000/bucketlist/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        
        });
        const data = await response.json();
        console.log('Data:', data);
        if (response.ok) {
            data.forEach(item => {
                addToBucketList(item.name, item.address);
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
 })