let members = [
    {image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', bio: 'Bio for member 1'},
    {image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg', bio: 'Bio for member 2'},
    {image: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630', bio: 'Bio for member 3'},
];
let index = 0;

let imgElement = document.getElementById('gallery');
let bioElement = document.getElementById('bio');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');


function updateMember() {
    imgElement.src = members[index].image;
    bioElement.textContent = members[index].bio;
}


nextButton.addEventListener('click', function() {
    index = (index + 1) % members.length;
    updateMember();
});

prevButton.addEventListener('click', function() {
    index = (index - 1 + members.length) % members.length;
    updateMember();
});

// Initialize the displayed member
updateMember();