var button1 = document.getElementById("btn1");

var button2 = document.getElementById("btn2");

var div = document.getElementById("content");

//  cách 1 // button1.addEventListener("click",function()
// // {
// // div.innerHTML='hihi';
// // });
// // button2.addEventListener("click",function()
// // {
// // div.innerHTML='haha';
// // });


// cách 2  
button1.onclick = function()
{
    div.innerHTML='anh văn đẹp trai';
   
};

button2.onclick = function()
{
    div.innerHTML = 'quá là ok';
}