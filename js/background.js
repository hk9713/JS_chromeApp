const images = ["라이언.jpg","어피치.jpg","죠르디.jpg","카카오.jpg","프렌즈.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

const body = document.querySelector("body");
body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundSize = "100%";