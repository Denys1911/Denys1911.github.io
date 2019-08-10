// -------------- inner HTML/Text ---------------- //

document.querySelector('.paragraph1').innerHTML += ' ddropp <b>bomb<b>';
document.querySelector('.paragraph2').innerText += ' ddropp <b>bomb<b>';

// -------------- outer HTML/Text ---------------- //

document.querySelector('h1').outerHTML = '<div>Its a div</div>';
document.querySelector('h2').outerText = '<span>Its a span</span>';

// -------------- insertAdjacent ---------------- //

document.querySelector('.text1').insertAdjacentHTML('beforebegin', '<a href="#">1111</a>');
document.querySelector('.text1').insertAdjacentHTML('afterbegin', '<a href="#">2222</a>');
document.querySelector('.text1').insertAdjacentHTML('beforeend', '<a href="#">3333</a>');
document.querySelector('.text1').insertAdjacentHTML('afterend', '<a href="#">4444</a>');

let element = document.querySelector('.text2');
document.querySelector('button').insertAdjacentElement('afterend', element);

document.querySelector('.text2').insertAdjacentText('beforeend', ' + text');

// -------------- Watch and change attribute's value ---------------- //

console.log(document.querySelector('img').alt);
document.querySelector('img').alt = 'Yellow cat';

console.log(document.querySelector('img').src);
document.querySelector('img').src = 'https://cdn2.iconfinder.com/data/icons/cat-power/64/cat_tied.png';

console.log (document.querySelector('link').href);
document.querySelector('link').href = 'style2.css';

console.log(document.querySelector('input').type);
document.querySelector('input').type = 'range';

/// *** HOMEWORK (prepare stylezation of document before print) *** ///

document.querySelector('button').addEventListener('click', () => {
    let print = document.querySelector('link').href;
    if (print === 'http://127.0.0.1:5500/style2.css') {
        document.querySelector('link').href = 'https://denys1911.github.io/JS-practise/05_DOM_output-to-page/style2.css';
        document.querySelector('button').innerText = 'Return stylezation back';
    } else {
        document.querySelector('link').href = 'style2.css';
        document.querySelector('button').innerText = 'Print';
    }
})

/// *** HOMEWORK (prepare stylezation of document before print) *** ///
