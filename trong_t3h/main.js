
var images = [
    "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/earth.jpg",
    "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/jupiter.jpg",
    "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/neptune.jpg"
];
var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

var listImage = document.getElementById("listImage");
var group = document.createElement("div");
group.classList = ["group-image"];

for (let i = 0; i < 9; i++) {
    let image = document.createElement("img");
    image.src = "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/neptune.jpg" + i;
    image.classList = ["image"];
    group.appendChild(image);
}

listImage.appendChild(group)
