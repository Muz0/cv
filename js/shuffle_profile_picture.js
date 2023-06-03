// Get the number of images in the folder

//needed to update if will be enabled again
const numberOfImages = 4;

// Generate a random number between 1 and the number of images
const randomImageIndex = Math.floor(Math.random() * numberOfImages + 1);

// Get a reference to the image element
const imageElement = document.getElementById("muzo_img");

// Set the src attribute of the image element to the randomly selected image
imageElement.src = `img/me_${randomImageIndex}.jpg`;
