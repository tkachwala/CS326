const element = document.getElementById('vision');
const text = 'Locality';

let index = 0;

function typeEffect() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150); 
    } else {
        element.style.borderRight = 'none'; 
    }
}

typeEffect();
