/// *** Receiving data from the input with class "first radio" *** ///

document.querySelector('button').addEventListener('click', () => {
    console.log(document.querySelector('.first-radio').checked);
});

/// *** When you will push button with class 'hide', checked option will disappear, to show this option again, just push button with class 'show' *** ///

document.querySelector('.hide').addEventListener('click', () => {
    let option = document.querySelectorAll('.first-radio');
    option.forEach((element) => {
        if(element.checked == true) {
            element.hidden = true;
        }
    });
});

document.querySelector('.show').addEventListener('click', () => {
    let option = document.querySelectorAll('.first-radio');
    option.forEach((element) => {
        element.hidden = false;
    });
});


