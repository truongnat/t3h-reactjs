const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const $$$ = $$('.service-content-right-img');
$$$.forEach((hover, index) => {
    hover.onclick = function(){
        $('.service-content-right-img.active').classList.remove('active');
        this.classList.add('active');
    }
});


// 

var menu = document.getElementById("header-top");
var menuCenter = document.getElementById("menu-center");
var listItem = document.getElementById("list-item");
var transLate = listItem.translateX;


var dots = document.getElementById("dots");


dots.onclick = function()
{
    var closeMenu = menucCenter.translateX===transLate;
    if (closeMenu){
        menucCenter.style.translateX =-320 + "px";
    }
    else{
    menucCenter.style.translateX = 320 + "px";
}
}