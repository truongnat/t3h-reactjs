//  cách 1
    // function myFunction() {
    //     var x = document.getElementById("myDIV");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }


// cách 2

var element = document.getElementById("anhvan");
   element.addEventListener("click", function(){
  var x = document.getElementById("myDIV");

  if(x.style.display==="none"){
    x.style.display="block";
  }else
  {
    x.style.display="none";
  }
})