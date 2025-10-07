//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
//1.5 add format='italic' attribute to <p>
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
//2.2  add <i>Sample Italic Text</i> with innerText
//2.3 add <i>Sample Italic Text</i> with textContent
let div = document.getElementById("demo");
console.log(div.innerHTML);
console.log(div.innerText);
console.log(div.textContent);

//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
let p = document.createElement("p");
div.appendChild(p);

//1.5 add format='italic' attribute to <p>
p.setAttribute("format", "italic");

//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
let p1 = document.createElement("p");
p1.innerHTML = "<i>Sample Italic Text</i>";
div.appendChild(p1);

//2.2 add <i>Sample Italic Text</i> with innerText
let p2 = document.createElement("p");
p2.innerText = "<i>Sample Italic Text</i>";
div.appendChild(p2);

//2.3 add <i>Sample Italic Text</i> with textContent
let p3 = document.createElement("p");
p3.textContent = "<i>Sample Italic Text</i>";
div.appendChild(p3);

