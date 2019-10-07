// Проверял в чем отличие onclick от addEventListener

/*  function hide(){
    let a=document.querySelector(".btn");
    a.hidden=true;
}
function show(){
    let a=document.querySelector(".footer");
    a.style.display="block"
    
}
let b=document.querySelector(".btn");
b.addEventListener("click", hide);
b.addEventListener("click", show); 

b.onclick=hide;
b.onclick=show;  */

//ПРОГРАММА УГАДАЙ ЧИСЛО

   //Упрощенная версия от 1 до 10

/* let r=Math.random();
r*=10;
r= Math.round(r);
console.log(r); */

   //Реализация через функцию с указанным диапазоном

function randomize(min,max){
    let r=min-0.5+Math.random()*(max-min+1);
    r=Math.round(r); //можно делать через округление Math.floor,тогда в рассчетах убрать "-0.5". Он округляет 1.99 к 1;
    return r;
}
let random= randomize(0,15);
console.log(random); 

   //Мой первый вариант решения

/* let btn=document.querySelector(".btn").addEventListener("click", function number(){
    let userNum=document.querySelector(".user-num").value;
    userNum=parseInt(userNum);
    console.log(userNum);
    if(!isNaN(userNum) && userNum<0 || userNum>15){
        alert("Число за пределами требуемого диапазона")
    }else if(!isNaN(userNum)&&userNum==random){
        alert("Вы выиграли!")
        location.reload();
    }else if(!isNaN(userNum)&&userNum!=random){
        alert("Вы проиграли")
    }
    else{
        alert("Введите корректное число")
    }
}) */

    //Более оптимальный код, короче первого

 let btn=document.querySelector(".btn").addEventListener("click", function number(){
    let userNum=document.querySelector(".user-num").value;
    userNum=parseInt(userNum);
    console.log(userNum);
    if(isNaN(userNum)){
        alert("Введите корректное число")
    }
    else{
        if(userNum==random){
            alert("Вы выиграли!")
            location.reload();
        }else if(userNum<0||userNum>15){
            alert("Число за пределами требуемого диапазона")  
        }else{
            alert("Вы проиграли")
        }
    }
    
}) 

 //Ну и еще вариант рандома с округлением до сотых. Что поменялось? Добавил .toFixed(2) и когда проверял вводимое пользователем значение, использую parseFloat вместо parseInt. А ну и саму формулу подбора рандома изменил;

/*  function randomize(min,max){
    let r=min-0.005+Math.random()*(max-min+0.01);
    r=r.toFixed(2);
    return r;
}
let random= randomize(0.6,15.8);
console.log(random);

 let btn=document.querySelector(".btn").addEventListener("click", function number(){
    let userNum=document.querySelector(".user-num").value;
    userNum=parseFloat(userNum);
    console.log(userNum);
    if(isNaN(userNum)){
        alert("Введите корректное число")
    }
    else{
        if(userNum==random){
            alert("Вы выиграли!")
            location.reload();
        }else if(userNum<0.6||userNum>15.8){
            alert("Число за пределами требуемого диапазона")  
        }else{
            alert("Вы проиграли")
        }
    }
    
}) */





