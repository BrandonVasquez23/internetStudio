console.log("Hello from main.js");

let targetElement = document.querySelector("h2");
console.log(targetElement);

targetElement.addEventListener("mouseover", function(){
    console.log(this.innerText);
    this.style = "cursor: wait";
}
);
this.innerText = "TIME";

targetElement.addEventListener("mouseout", function(){
    this.innerText = "IKEA";
    this.style = "cursor: pointer";
}
);
<!--left off on pg 64 of the pdf -->