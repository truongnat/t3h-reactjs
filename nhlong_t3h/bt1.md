# Nguyen Hai Long
---
## câu 1: I.	Phân biệt Rest operator, spead operator, destructuring?
  1. spead operator:  […’abc’]
-  spread operator 'tách' chuỗi string là thành mảng phần tử
- nối mảng   a.concat(b)    c=[…a,b,d]
- copy Array
- khi gọi hàm:  const values = [69,96,1] 
console.log(sum(...values)) // 166
2. Rest operator: 
- gom những phần tử thành array. Rest operator được dùng trong parameter của function và - destructuring
- trong function :
```Javascript
    function sum(){ 
        var total = 0 
        for ( const value of arguments ){ 
            total += value 
        } return total 
    } console.log(sum(…));
```
- phân loại môn nào hệ số 2  còn lại hệ số 1
```Javascript

function calculateGPA(math,literature,...otherSubject){ 
    console.log(otherSubject)// [6, 7, 5, 4] }
```
3. destructuring:
-	Nó là cú pháp là một biểu thức JavaScript giúp bạn có thể giải nén các giá trị từ mảng hoặc thuộc tính từ các đối tượng thành các biến riêng biệt.
Object:
```Javascript

let obj1 = { name: “john”, age: 10, address: “tran duy hung” };
let { age, …rest } = obj;
Array:
let arr1 = [ { name: “h1” }, { name: “h2” }]
let [per1,…arr2] arr1;
Array ignore value: [one, , two] = [0,1,2];
Default value: [a = 10, b] = [1]
```

## cau 2: Phân biệt các trường hợp cụ thể khi sử dụng this?
1. Function invocation: Với strict mode thì this sẽ là undefined và nếu không thì sẽ là global object.
```Javascript
   function show(){
    console.log(this ===window);
   }
   show();
```   
```Javascript
    "use strict"
   function show(){
    console.log(this ===window);
   }
   show();
``` 

2. Method invocation: Khi gọi 1 phương thức của object thì this sẽ trỏ tới đối tượng chứa object đó
   ```Javascript
   let car={
        brand:'honda',
        getBrand: function(){
            return this.brand;
        }
    }
    console.log(car.getBrand());
    ``` 
- Trong ví dụ này, this đối tượng trong getBrand() phương thức tham chiếu đến đối tượng car.
- Vì một phương thức là một thuộc tính của một đối tượng là một giá trị, bạn có thể lưu trữ nó trong một biến.



```Javascript
   let brand=car.getBrand;
   console.log(brand());//undefined
```
- Kết quả: undefined thay "Honda"
vì khi bạn gọi một phương thức mà không chỉ định đối tượng của nó, JavaScript sẽ đặt this đối tượng toàn cục ở chế độ không nghiêm	 ngặt(non-strict mode) và undefined ở chế độ nghiêm ngặt(strict mode).

- Để khắc phục , dùng bind() phương thức của Function.prototype đối tượng. Phương bind() thức này tạo một hàm mới có this từ khóa được đặt thành một giá trị được chỉ định.
```Javascript
   let brand=car.getBrand.bind(car);
   console.log(brand());//honda
```

3. Contructor invocation: Khi gọi 1 contructor function, this sẽ được set cho object mới được tạo (từ khóa New) this ko bị ảnh hưởng bởi biến global.Không dùng từ khóa new sẽ lỗi systax error
```Javascript
   function Car(brand){
    this.brand=brand;
   }
   Car.prototype.getBrand=function(){
    return this.brand;
   }
   let car=new Car('Honda');
   console.log(car.getBrand());
```


4. Indirect invocation: Functionl là 1 loại object và kiểu của nó là Function Type. Nó có 2 method: call() và apply(). 2 phương thức này cho phép set giá trị của this khi gọi function.
```Javascript
   function getBrand(prefix){
        console.log(profix + this.brand);
   }
   let honda={
    brand:'Honda'
   };
   let audi={
    brand:'Audi'
   };
   getBrand.call(honda,"It's a");
   getBrand.call(audi,"It's an");

   getBrand.apply(honda,["It's a"]);//"It's a Honda"
   getBrand.apply(audi,["It's an"]);//"It's an Audi"
```
## cau 3: Giả sử có 1 object nested, vậy khi sử dụng spead operator và assign cho 1 biến khác, các tham chiếu của biến con có còn tồn tại và chúng có bị thay đổi không? Nếu có thay đổi thì lý do ở đâu? Biện pháp khắc phục?
-	Link ảnh: https://github.com/truongnat/log-image-issue/blob/main/image-log.md
   

 -	Có thay đổi 
 -	Cách khắc phục

```Javascript
    let father={
        name:'david',
        age:50,
        children:{
            nickname:'john',
        },
    };
    let cloneFather={
        ...father,
        children:{
            //nickname:'john',
            ...father.children,
        }
    }    
    father.children.nickname='jack1';

    console.log(father);
    console.log(cloneFather);
```