let button = document.querySelector(".buttonformenu").addEventListener("click",function open(){
    let div=document.querySelector(".navmenu");
    div.classList.toggle("nav--open");
})

let secondButton = document.querySelectorAll(".services__button");
for (let i = 0; i < secondButton.length; i++) {
    secondButton[i].addEventListener("click", function() {
        let div=document.querySelector(".services__item1");
        a=getComputedStyle(div).display;
        if(a==="block"){
            div.style.display="none";
        }
        else{
            div.style.display="block";
        }})
}
