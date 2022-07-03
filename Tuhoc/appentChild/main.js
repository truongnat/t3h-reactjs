const element= document.getElementById("add");

element.addEventListener("click", function(){
 
    const node = document.createElement("li");

    const textnode = document.createTextNode("dầu");

    node.appendChild(textnode);

    document.getElementById("myListItem").appendChild(node);
});


