var menuHeader = document.getElementById("menu-header");

    var menuLeft = document.createElement("div");
        menuLeft.classList=["menu-left"];
          var menuLeftIcon = document.createElement("div");
              menuLeftIcon.classList=["menu-left-icon"];
                var iconFace = document.createElement("div");
                    iconFace.classList = ["icon-face"];
                      var faceImg = document.createElement("img");
                          faceImg.src = "img/facebook.png";  
                var inputLeft = document.createElement("div");
                    inputLeft.classList=['input-left'];
                    var iconSearch = document.createElement("img");
                        iconSearch.src="img/search.png";
                    var inputLeftIn = document.createElement("input");
                        inputLeftIn.placeholder="Tìm kiếm..."
menuHeader.appendChild(menuLeft);
    menuLeft.appendChild(menuLeftIcon);
        menuLeftIcon.appendChild(iconFace);
              iconFace.appendChild(faceImg);
         menuLeftIcon.appendChild(inputLeft);
              inputLeft.appendChild(iconSearch);
              inputLeft.appendChild(inputLeftIn);



    var menuCenter = document.createElement("div");
        menuCenter.classList=["menu-center"];
          var centerIcon = document.createElement("div");
              centerIcon.classList= ["center-icon"];
                var listImg = document.createElement("div");
                     listImg.classList = ["list-img"];
                       var sum = ["img/home.png",
                                "img/video (1).png",
                                "img/market.png",
                               "img/people.png",
                               "img/rubik.png",          
                               ];
                            for ( let i = 0 ; i < sum.length; i++)
                            {
                             let images = document.createElement("img");
                                 images.src =sum[i];
                                listImg.appendChild(images); 

                              for(var j = 0 ; j < listImg.length ; j++)
                              {
                                    listImg  = sum[images];
                              }
                            }        
menuHeader.appendChild(menuCenter); 
     menuCenter.appendChild(centerIcon);
       centerIcon.appendChild(listImg);
      


 var menuRight = document.createElement("div");
     menuRight.classList=["menu-right"];

     var groupImgRight = document.createElement("div");
         groupImgRight.classList=["img-Right"];

             var total = ["img/list.png",
                          "img/messenger.png",
                          "img/bell.png",
                          "img/van.jpg",
                          ];

 for(let j = 0 ; j < total.length; j++)
 {
    let img = document.createElement("img");
    img.classList=["img-icon"];
    img.src = total[j];
    groupImgRight.appendChild(img);
 }       
menuRight.appendChild(groupImgRight);
menuHeader.appendChild(menuRight);

// cover imgae

function myFunction() {
        var x = document.getElementById("list");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

      // name myself
 var nameMyself = document.getElementById("name-myself");
    var nameMyselfAll = document.createElement("div");
        nameMyselfAll.classList=["name-myself-all"];
            var imgMyself = document.createElement("div");
                 imgMyself.classList=["img-myself"];
                    var imgAvatar = document.createElement("img");
                       imgAvatar.src="img/van.jpg";
            var ok = document.createElement("div");
                ok.classList=["ok"];
                   var imgText = document.createElement("div");
                        imgText.classList=["img-mytext"];
                           var text1 = document.createElement("p");
                                text1.innerHTML = "Trần Văn";
                           var text2 = document.createElement("p");
                                text2.innerHTML = "1.6k bạn bè";
                                text2.style.fontSize= 9 +"px";
                              
                    var imgFriends = document.createElement("div");
                        imgFriends.classList = ["img-friends"];
                          var tong = ["img/camera.png",
                                     "img/van.jpg",
                                     "img/van.jpg",
                                     "img/van.jpg",
                                     "img/van.jpg",
                                     "img/van.jpg",
                                     "img/van.jpg",
                                     "img/van.jpg",
                                     ]
                                  for(let k = 0 ; k < tong.length ; k++)
                                  {
                                    let imgFriend = document.createElement("img");                                 
                                     imgFriend.src =tong[k];
                                     imgFriends.appendChild(imgFriend);

                                  }
                     var selfEdit = document.createElement("div");
                        selfEdit.classList =["self-edit"];
                         var addTin = document.createElement("div");
                             addTin.classList = ["add-tin"];
                               var imgAddtin = document.createElement("img");
                                   imgAddtin.src = "img/sum.png";
                               var addBtn = document.createElement("button");                                
                                   addBtn.innerHTML = "Thêm vào tin";
                         var editMyself = document.createElement("div");
                             editMyself.classList=["edit-myself"];
                              var imgEdit = document.createElement("img");
                                  imgEdit.src = "img/pen.png";
                              var editBtn = document.createElement("button");                              
                                  editBtn.innerHTML="Chỉnh sửa trang cá nhân";
                         

        nameMyself.appendChild(nameMyselfAll);
             nameMyselfAll.appendChild(imgMyself);
                  imgMyself.appendChild(imgAvatar);
             nameMyselfAll.appendChild(ok);
                  ok.appendChild(imgText); 
                      imgText.appendChild(text1);
                      imgText.appendChild(text2);
                  ok.appendChild(imgFriends);
                  nameMyselfAll.appendChild(selfEdit);
                     selfEdit.appendChild(addTin)
                      addTin.appendChild(imgAddtin);
                      addTin.appendChild(addBtn);

                     selfEdit.appendChild(editMyself);
                       editMyself.appendChild(imgEdit);
                       editMyself.appendChild(editBtn);

var $ = document.getElementsByClassName("edit-cover-text");
var $$ = document.getElementsByTagName("p"
);
$$.innerHTML="ok";