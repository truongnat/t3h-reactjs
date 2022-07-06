
// Menu all 
var headertop = document.getElementById("menu__header");
headertop.classList=["container-fluid"];

// menu left
var menuLeft = document.createElement("div");
    menuLeft.classList=["menu__Search-left"];
var img = document.createElement("img");
    img.classList=["icon-fb"];
img.src = "img/facebook.png";
var input = document.createElement("input");
input.classList=["text-input"];
input.tyle="Search";
input.placeholder="Tìm kiếm trền Facebook";


headertop.appendChild (menuLeft);
menuLeft.appendChild (img);
menuLeft.appendChild(input);

// onclick on input


// var x = document.getElementsByClassName("text-input");
//        x.addEventListener("click", function()
//     {
//       var y = document.getElementsByClassName("icon-fb");
//       if(y.style.display==="none"){
//         x.style.display="block";
//       }else
//       {
//         y.style.display="none";
//       }
    
//     })

    
// menu Center
var menuCenter = document.createElement("div");
menuCenter.classList=["menu__center"];

var groupImage=document.createElement("div");
groupImage.classList = ["group-img"];
 
var sum = ["img/home.png",
           "img/video (1).png",
           "img/market.png",
           "img/people.png",
           "img/rubik.png",          
          ];

for(let i = 0 ; i < sum.length; i++)
{
    let images = document.createElement("img");
    images.src= sum[i];
    images.classList=["image"]; 
    groupImage.appendChild(images);
  
}
menuCenter.appendChild(groupImage);

// menu Right

var menuRight = document.createElement("div");
menuRight.classList=["menu__Right"];

var groupImgRight = document.createElement("div");
groupImgRight.classList=["img-Right"];

var total = ["img/list.png",
             "img/messenger.png",
             "img/bell.png",
             "img/van.jpg",
            ]

 for(let j = 0 ; j < total.length; j++)
 {
    let img = document.createElement("img");
    img.classList=["img-icon"];
    img.src = total[j];
    groupImgRight.appendChild(img);
 }       
    
menuRight.appendChild(groupImgRight);
headertop.appendChild (menuCenter);
headertop.appendChild (menuRight);

// cover imgae
 var cover = document.getElementById("cover-image");
 cover.classList=["container-fluid cover-imge-img"];
 var coverImg = document.createElement("img");
     coverImg.classList=["reponsive-img"];
    coverImg.src=["img/2.jpg"];
    coverImg.style.width = 500 + "px";
    coverImg.style.height = 250 + "px";
    coverImg.style.borderRadius= 5 +"px";
   
     
var iconCamera = document.createElement("div");
      iconCamera.classList=["iconCamera"];
  var editCover = document.createElement("img");
      editCover.src=["img/camera.png"];
      editCover.style.width= 10+ "px";
      editCover.style.height= 10 + "px";
      editCover.style.display="none";
  var editCoverText = document.createElement("button");
      editCoverText.textContent="Chỉnh sửa ảnh bia";
 
iconCamera.appendChild(editCover);
iconCamera.appendChild(editCoverText);
cover.appendChild(iconCamera);
cover.appendChild(coverImg);

// 
var nameMyself = document.getElementById("name-myself");
var nameMyselfall = document.createElement("div");
   nameMyselfall.classList=["name-myself-all"];
     var nameMyselftText = document.createElement("div");
         nameMyselftText.classList=["name-myself__text"];
           var nameMyselfImg = document.createElement("div"); 
                nameMyselfImg.classList=["name-myself__img"];
                  var img = document.createElement("img");
                     img.src =["img/van.jpg"];
                  var nameText = document.createElement("div");
                      nameText.classList=["name"];
                         var $ = document.createElement("p");
                            $.textContent="Trần Văn";
                         var $$ = document.createElement("p");
                            $$.textContent="1.6k bạn bè";
                         var $$$ = document.createElement("p");
                            var imgAll = ["img/van.jpg",
                                          "img/van.jpg",
                                          "img/van.jpg",
                                          "img/van.jpg",
                                          "img/van.jpg",
                                          "img/van.jpg",          
                                         ]
                            for(let i = 0 ; i < imgAll.length ; i++)
                            {
                                let img = document.createElement("img");
                                   img.src = imgAll[i];
                                   $$$.appendChild(img);
                            }

        var addEditBtn = document.createElement("div");
             addEditBtn.classList=["add__edit-btn"];

               var addTin = document.createElement("div");
                   addTin.classList= ["add_tin"];
                   var btnAddIcon = document.createElement("img");
                       btnAddIcon.src="img/sum.png";   
                   var btnAddBtn = document.createElement("button");
                       btnAddBtn.textContent = "Thêm vào tin";

               var btnEdit = document.createElement("div");   
                   btnEdit.classList = ["btn-edit"];
                   var btnIconPen = document.createElement("img");
                       btnIconPen.src = "img/pen.png";
                    var btnEditButton = document.createElement("button");
                        btnEditButton.textContent="Chỉnh sửa trang cá nhân";        
               
   
   nameMyself.appendChild(nameMyselfall);
   nameMyselfall.appendChild(nameMyselftText);
   nameMyselftText.appendChild(nameMyselfImg);
   nameMyselfImg.appendChild(img);
   nameMyselfImg.appendChild(nameText);
   nameText.appendChild($);
   nameText.appendChild($$);
   nameText.appendChild($$$);
   nameMyselfall.appendChild(addEditBtn);

   addEditBtn.appendChild(addTin);
   addTin.appendChild(btnAddIcon);
   addTin.appendChild(btnAddBtn);

   addEditBtn.appendChild(btnEdit);
   btnEdit.appendChild(btnIconPen);
   btnEdit.appendChild(btnEditButton);
//
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$('.item')

// tabs.forEach((tab, index) => {
//     tab.onclick = function()
//     { 
//         $('.item.actives').classList.remove('actives')
//         this.classList.add('actives')
//     }
// })    