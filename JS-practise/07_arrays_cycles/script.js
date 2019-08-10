/// *** Changing color of text near selected input(radio) and adding span with number of selected input(radio) *** ///
document.querySelector('button').addEventListener('click', () => {
    let radio = document.querySelectorAll('.radio');
        label = document.querySelectorAll('label');
        
    for (let i = 0; i < radio.length; i++) {

        let newSpan = document.createElement('span');
            newSpan.innerHTML = 'Option ' + (i+1) + ' Selected'; 
        if( radio[i].checked == true ) {
           label[i].style.color = 'red';
           label[i].appendChild(newSpan);
           setTimeout(() => newSpan.remove(), 800);
        } else {
            label[i].style.color = 'black';
        }
    }
})

/// *** Changing the color of body *** ///

document.querySelector('.second-button').addEventListener ('click', () => {
    let color = document.querySelector('input[type=color]').value;
    document.body.style.backgroundColor = color;
})

/// *** Watching the value of selected option after pushing the button *** ///
document.querySelector('.third-button').addEventListener('click', () => {
    let option = document.querySelectorAll('option');
for(i=0; i < option.length; i++) {
   if( option[i].selected == true) {
        console.log(option[i].value)
   }
}
})





