// import db from './pouchDBmodule.js';
document.addEventListener('DOMContentLoaded', () => {
    const typingText = 'Locality';
    let currentIndex = 0;
    const typingElement = document.getElementById('typing-effect');
    
    function typeLetter() {
        if (currentIndex < typingText.length) {
            typingElement.textContent += typingText[currentIndex++];
            setTimeout(typeLetter, 150); // Speed of typing
        }
    }
    
    typeLetter(); 
});
 

import db from './db.js';
let map; // Holds the map object globally


// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'src/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//   });

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 }, // Default center, update accordingly
//         zoom: 8
//     });
//     // Optionally add markers or other features here
// }


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
        'Error: Your browser doesn\'t support geolocation.');
    // Here, you can default to a backup position if geolocation fails
}


// Example function to show the map
function showMap() {
    document.getElementById('map').style.display = 'block'; // Make the map visible
    initMap(); // Initialize the map
}



function addMarkersForUser(userPlaces) {
    userPlaces.forEach(place => {
        const marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name
        });
    });
}

// Now you can use `db` here to interact with PouchDB
async function checkDatabase() {
    try {
        const info = await db.info();
        console.log('Database info:', info);
    } catch (error) {
        console.error('Error accessing database:', error);
    }
}

checkDatabase();
async function addDocument(doc) {
  try {
    const response = await db.put(doc);
    console.log("Document created successfully", response);
  } catch (error) {
    console.error(error);
  }
}

async function getDocument(id) {
    try {
      const doc = await db.get(id);
      console.log(doc);
    } catch (error) {
      console.error(error);
    }
  }
  
//   getDocument('unique_document_id');
// addDocument({ _id: 'unique_document_id', data: "abc" });


// Simulating a login with a dummy email address
const dummyEmail = "user@example.com";
// login(dummyEmail);

async function login(email) {
    try {
        const userDoc = await db.get(email);
        console.log("Login successful", userDoc);
        showMap();  // Initialize and display the map after login
    } catch (error) {
        if (error.name === 'not_found') {
            console.log("No user found with that email, creating a new user...");
            await addDocument({ _id: email, recentlyViewed: [], preferences: [] });
            console.log("New user created and logged in.");
            showMap();  // Optionally show the map for new users too
        } else {
            console.error("Error during login:", error);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('button');
    loginButton.addEventListener('click', () => {
        const emailInput = document.getElementById('email').value;
        login(emailInput);
    });
});




// geolocation functions
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
    "\nLongitude: " + position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

// Help page
document.addEventListener('DOMContentLoaded', () => {
    const helpButton = document.getElementById('helpButton');
    helpButton.addEventListener('click', () => {
        const helpContent = document.getElementById('helpContent');
        helpContent.style.display = 'block';
    });
});

