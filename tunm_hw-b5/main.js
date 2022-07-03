var container = document.getElementById("container");

var headerContainer = document.createElement("img");
var searchBox = document.createElement("input");
var searchIcon = document.createElement("i");
var category = document.createElement("div");
var home = document.createElement("i");
var messenger = document.createElement("i");
var post = document.createElement("i");
var avatarIcon = document.createElement("img");

container.style.borderBottom = "1px solid black"
headerContainer.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png";

headerContainer.style.width = 15 + "%";
headerContainer.style.height = 15 + "%";
searchIcon.classList = ["fa-solid fa-magnifying-glass"];
headerContainer.style.width = 15 + "%";
headerContainer.style.height = 15 + "%";
searchBox.type = "search";
searchBox.placeholder = "Search";
searchBox.classList = ["form-control mr-sm-2 bg-light search pr-5 border-0"];
searchBox.style.width = 300 + "px";
searchBox.style.height = 50 + "px";
home.classList = ["fa-solid fa-house"];
messenger.classList = ["fa-brands fa-facebook-messenger"];
post.classList = ["fa-solid fa-circle-plus"];
avatarIcon.src = "./Photos/avatar.jpeg";
avatarIcon.style.width = 30 + "px";
avatarIcon.style.height = 30 + "px";
avatarIcon.style.borderRadius = 50 + "%";

container.appendChild(headerContainer);
container.appendChild(searchIcon);
container.appendChild(searchBox);
container.appendChild(category);
category.appendChild(home);
category.appendChild(messenger);
category.appendChild(post);
category.appendChild(avatarIcon);

var app = document.getElementById("app");
var group = document.createElement("div");
group.classList = ["group-image"];

var ratio = 3;
var sizeImage = 250;
var space = 10;
var radius = 30;

group.style.width = sizeImage * ratio + 10 + "px";
group.style.height = sizeImage * ratio + 10 + "px";
group.style.borderRadius = radius + "px";

const images = [
  "./Photos/avatar.jpeg",
  "./Photos/cat_story.jpeg",
  "./Photos/memories.jpeg",
  "./Photos/office.jpeg",
  "./Photos/elecdam.jpeg",
  "./Photos/3mountains.jpeg",
  "./Photos/meow.jpeg",
  "./Photos/travel.jpeg",
  "./Photos/meo2.jpeg",
];

for (let i = 0; i < images.length; i++) {
  let image = document.createElement("img");
  image.src = images[i];
  image.classList = ["image"];
  image.style.width = sizeImage + "px";
  image.style.height = sizeImage + "px";
  group.appendChild(image);
}

app.appendChild(group);
