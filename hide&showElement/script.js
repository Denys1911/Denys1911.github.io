/* function hello(){
    console.log("hello");
    allo();
}
function allo(){
    console.log("hello world")
}
let a=document.querySelector(".btn");
console.log(a.clientHeight); */
/* a.hidden=true; */
//a.onclick = hello;

//Пример решения через скрытие/открытие дива через js

/* function hide(){
    let er=document.querySelector(".modal");
    er.hidden = true;
}
hide();
function show(){
    let er=document.querySelector(".modal");
    er.hidden=false
}
let arrive = document.querySelector(".push");
arrive.onclick=show;
let hid = document. querySelector(".btn");
hid.onclick = hide;   */

//Пример решения через скрытие дива в свойствах css и открытия его с помощью возможностей js

/* function show(){
    let a=document.querySelector(".modal");
    a.style.display="block";
    a.style.borderRadius="20px";
    a.style.border="5px solid red";
}
function hide(){
    let a=document.querySelector(".modal");
    a.style.display="none";
    a.style.borderRadius="20px";
    a.style.border="5px solid red";
}
let b=document.querySelector(".push");
b.onclick = show; 
let f=document.querySelector(".btn");
f.onclick = hide;   */

//Пример решения когда блок открывается при клике ЛКМ и скрывается при клике ПКМ

/* function show(){
    let a=document.querySelector(".modal");
    a.style.display="block"
}
function hide(){
    let a=document.querySelector(".modal");
    a.style.display="none"
}
let b=document.querySelector(".push");
b.addEventListener("click",show,false);
b.addEventListener("contextmenu",hide,false); */

//Нормальная реализация. При нажатии на кнопку элемент скрывается/появляется. Так и не понял почему так работает только через интеграцию в html

function show(){
    let x = document.querySelector(".modal");
    if(x.style.display==="block"){
        x.style.display="none";
    }else{
        x.style.display="block";
    }
}
let a=document.querySelector(".btn");
a=addEventListener("click", show);





