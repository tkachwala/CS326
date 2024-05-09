// This file now just handles the login functionality
import db from '../../server/db.js';

// display typing effect - copy pasted from last milestone
document.addEventListener('DOMContentLoaded', () => {
    const typingText = 'Locality';
    let currentIndex = 0;
    const typingElement = document.getElementById('typing-effect');
    
    function typeLetter() {
        if (currentIndex < typingText.length) {
            typingElement.textContent += typingText[currentIndex++];
            setTimeout(typeLetter, 150); 
        }
    }
    typeLetter();
});

// Example for client-side, using fetch to interact with the server
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Login successful:", data);
                window.location.href = map.html
            } else {
                console.error("Login failed:", data.message);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        try {
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Registration successful", data);
                window.location.href = 'login.html'; // Redirect to login page or dashboard
            } else {
                console.error("Registration failed:", data.message);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    });
});



// //listener for login button
// const loginButton = document.querySelector('button');
// loginButton.addEventListener('click', () => {
//     const emailInput = document.getElementById('email').value;
//     login(emailInput);
// });

// //to handle login
// document.addEventListener('DOMContentLoaded', () => {
//     const loginButton = document.querySelector('button');
//     loginButton.addEventListener('click', () => {
//         const emailInput = document.getElementById('email').value;
//         login(emailInput);
//     });
//     function login(email) {
//         if (email === "user@example.com") {
//             console.log("Login successful for user@example.com");
//             window.location.href = 'map.html'; 
//             // we redirect to the map.html page once login is successful - more in depth implemenatation for backend milestone!
//         } else {
//             console.error("Login failed: email not recognized.");
//         }
//     }
// });

// Initialize particle effect - used on the homepage - point is to manipulate properties 
// change basic properties here to see changes 
// taken from particles.js github repo

document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00c04b"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#D1FFBD",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

// Function to toggle help screen
function toggleHelp() {
    const helpContent = document.getElementById('helpContent');
    if (helpContent.style.display === 'none') {
        helpContent.style.display = 'block';
    } else {
        helpContent.style.display = 'none';
    }
}

// Event listener for help button 
// DOM event for the help button on the big loading screen
document.addEventListener('DOMContentLoaded', () => {
    const helpButton = document.getElementById('helpButton');
    helpButton.addEventListener('click', toggleHelp);
});