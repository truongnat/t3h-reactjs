
        // // Lấy danh sách menu
        // var menu = document.querySelectorAll('#dropdown > li');

        // // Lặp qua từng menu để gán sự kiện click
        // for (var i = 0; i < menu.length; i++)
        // {
        //     menu[i].addEventListener("click", function()
        //     {
        //         // Ẩn hết menu con
        //         var menuList = document.querySelectorAll('#dropdown > li > ul');
        //         for (var j = 0; j < menuList.length; j++) {
        //             menuList[j].style.display = "none";
        //         }
        //         this.children[1].style.display = "block";
        //     });
        // }

  var menu = document.querySelectorAll('#dropdown > li');
  for (var i = 0 ; i < menu.length; i++ )
  {
    menu[i].addEventListener("click",function()
    {
      
      var menuList = document.querySelectorAll('#dropdown >li > ul');
      for (var j = 0 ; j < menuList.length ; j++)
      {
        menuList[j].style.display = "none";
      }
      this.children[1].style.display = "block";
    });
  }

// var taps = ['bài viết','giởi thiệu','bạn bè']

// var root = document.getElementById("root");
// var tapcontainer = document.createElement("div");
// root.classList = ["container center h-max"];
// tapcontainer.classList = ["tap-container flex"];

// root.appendChild(tapcontainer);