function print_number()
{
    // Lấy number
    var number = document.getElementById("number").value;
 
    // Ép number sang kiểu INT
    number = parseInt(number);
 
    // Lặp để in kết quả
    var html = '';
    for (var i = 1; i <= number; i++){
        html += i + ' <br/>';
    }
    document.getElementById("result").innerHTML = html;
}