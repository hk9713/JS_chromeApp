const images = ["라이언.jpg","어피치.jpg","튜브.jpg","프렌즈.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");
body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";
body.style.height = "100vh";