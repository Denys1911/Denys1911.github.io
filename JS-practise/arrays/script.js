/// *** Changing color of text near selected input(radio) and adding span with number of selected input(radio)
document.querySelector('button').addEventListener('click', () => {
    let radio = document.querySelectorAll('.radio');
        label = document.querySelectorAll('label');
        
    for (let i = 0; i < radio.length; i++) {

        let newDiv = document.createElement('span');
            newDiv.innerHTML = 'Option ' + (i+1) + ' Selected'; 

        if( radio[i].checked == true ) {
           label[i].style.color = 'red';
           label[i].appendChild(newDiv);
           setTimeout(() => newDiv.remove(), 800);
        } else {
            label[i].style.color = 'black';
        }
    }
})
