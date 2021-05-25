// --1
var button = document.getElementById("addProduct");
var input = document.getElementById("inputProduct");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


function inputLength() { //-- 4
    return input.value.length;
}


function createLiElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Done!")); // button come with li element
    li.appendChild(button);
    button.onclick = ruleOut;  // underline on the li element

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete!"));  // want to delete the product
    li.appendChild(button);
    button.onclick = removeProduct;
}

function ruleOut(event) {
    event.target.parentNode.classList.toggle("done"); // underline on the li element with .toggle(done)
}

function removeProduct(evt) {   // delete the product
    evt.target.parentNode.remove();    
}


function addProductToList() { // --3
    if (inputLength() > 0) {  // --4
        createLiElement(); // --5
    }
}

button.addEventListener("click", addProductToList); // -- 2