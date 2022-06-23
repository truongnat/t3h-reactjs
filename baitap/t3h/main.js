var img = [
    "A.jpg", "B.jpg", "C.jpg", "D.jpg"
];
var indexSlice = document.querySelector('.img');
var nextBtn = document.querySelector('.buttonRight');
var prevBtn = document.querySelector('.buttonLeft');
var caheID = 0;
indexSlice.src = img[0];
var setTime = setInterval(function () {
    nextSlice();
}, 3000)
clearInterval(setTime);
nextBtn.onclick = function () {
    clearInterval(setTime);
    nextSlice();
}
prevBtn.onclick = function () {
    clearInterval(setTime);
    prevSlice();
}
function nextSlice() {
    caheID++;
    if (caheID >= img.length) {
        caheID = 0;
    }
    setImg(caheID);
}
function prevSlice() {
    caheID--;
    if (caheID <= 0) {
        caheID = img.length - 1;
    }
    setImg(caheID);
}
function setImg(index) {
    indexSlice.src = img[index];
}
//Collapse
var button = document.querySelector('.button')
button.onclick = function () {
    var display = document.querySelector('.card');
    if (display.style.display === 'block') {
        display.style.display = 'none';
    } else {
        display.style.display = 'block';
    }
}
//dropdown-menu
var button_dropdown = document.querySelector('.button-dropdown');
button_dropdown.onclick = function () {
    var display1 = document.querySelector('.dropdown-menu');
    if (display1.style.display === 'block') {
        display1.style.display = 'none';
    } else {
        display1.style.display = 'block';
    }
}
// list-img
var list_img = document.querySelector('.list-img');
var div = document.createElement('div');
div.classList = ["group-img"];

var total = 9;
var ratio = 3;
var sizeImage = 150;
var space = 10;
var radius = 16;

div.style.width = sizeImage * ratio + 10 + 'px';
div.style.height = sizeImage * ratio + 10 + 'px';
div.style.borderRadius = radius + 'px';

for (let i = 0; i < total; i++) {
    let img = document.createElement('img');
    if (i === 0) {
        img.src = "https://picsum.photos/200/300?random=" + i;
        img.classList = ['image'];
        img.style.width = sizeImage + 'px';
        img.style.height = sizeImage + 'px';
        img.style.borderTopLeftRadius = radius + 'px';
        div.appendChild(img);
    }else if(i===2)
    {
        img.src = "https://picsum.photos/200/300?random=" + i;
        img.classList = ['image'];
        img.style.width = sizeImage + 'px';
        img.style.height = sizeImage + 'px';
        img.style.borderTopRightRadius = radius + 'px';
        div.appendChild(img);
    }else if(i===6)
    {
        img.src = "https://picsum.photos/200/300?random=" + i;
        img.classList = ['image'];
        img.style.width = sizeImage + 'px';
        img.style.height = sizeImage + 'px';
        img.style.borderBottomLeftRadius = radius + 'px';
        div.appendChild(img);
    }else if(i===8)
    {
        img.src = "https://picsum.photos/200/300?random=" + i;
        img.classList = ['image'];
        img.style.width = sizeImage + 'px';
        img.style.height = sizeImage + 'px';
        img.style.borderBottomRightRadius = radius + 'px';
        div.appendChild(img);
    }
        img.src = "https://picsum.photos/200/300?random=" + i;
        img.classList = ['image'];
        img.style.width = sizeImage + 'px';
        img.style.height = sizeImage + 'px';
        div.appendChild(img);
}
list_img.appendChild(div);