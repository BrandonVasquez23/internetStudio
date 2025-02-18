console.log("Hello from main.js");

let targetElement = document.querySelector("h2");
console.log(targetElement);

targetElement.addEventListener("mouseover", funtion() {
    console.log(this.innerText);
}
);
this.innerText = "TIME";

targetElement.addEventListener("mouseout", function(){
    this.innerText = "IKEA";
}
);
<!--left off on pg 64 of the pdf -->