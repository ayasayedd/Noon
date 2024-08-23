let scrollToTop = document.getElementById("scroll-to-top");

scrollToTop.addEventListener("click", function()  {
    window.scrollTo({ top: 0, behavior: "smooth" });
})
let Btn1 = document.getElementById("btn1");
let body = document.getElementById("body");
let light = 0; 
let img = document.getElementById("img");
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4")
let row5 = document.getElementById("row5")
let row6 = document.getElementById("row6")
Btn1.addEventListener("click", function()  {
    if (light == 1) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        row1.style.backgroundColor = "black";
        row1.style.color = "white";
        row2.style.backgroundColor = "black";
        row3.style.backgroundColor = "black";
        row4.style.backgroundColor = "black";
        row5.style.backgroundColor = "black";
        row6.style.backgroundColor = "black";
        row6.style.color = "white";
        img.src = "https://img.icons8.com/?size=100&id=25031&format=png&color=000000";
        light = 0;
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        row1.style.backgroundColor = "#f8f9fa";
        row1.style.color = "black";
        row2.style.backgroundColor = "#f8f9fa";
        row3.style.backgroundColor = "#f8f9fa";
        row4.style.backgroundColor = "#f8f9fa";
        row5.style.backgroundColor = "#f8f9fa";
        row6.style.backgroundColor = "#f8f9fa";
        row6.style.color = "black";
        img.src = "https://img.icons8.com/?size=100&id=648&format=png&color=000000";
        light = 1;
    }

})
let Btn2 = document.getElementsById("collectionBtn");
let show = document.getElementsById("show");
let display = 0;