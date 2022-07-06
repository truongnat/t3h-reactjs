
// thêm bằng cách đặt biến 
var myEmail = 'email';
var myObject = {
    name: ' Anh Văn',
    age: 21,
    address: ' Hà Nam',
    [myEmail]:'anhvandz02@gmai.com',
     //lấy bằng function
       getName:function(){
        return this.name;
       }
    
};
//thêm bằng cách trực tiêp
myObject['school'] = "Mafia Nga"; 
console.log(myObject.getName());

// cách tạo object construcctor
function Usser (fistName, lastName, avatar)
{
    this.fistName = fistName;
    this.lastName = lastName;
    this.avatar = avatar;
}
 var author = new Usser('Văn' , 'Anh ', 'avatar');
 var user = new Usser('ngu', 'ngốc','avatar');

 console.log(author);
 console.log(user);

 
   function myfunction() {
        var x = document.getElementById("Mylist");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
