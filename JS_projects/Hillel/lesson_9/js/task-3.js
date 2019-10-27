const parent = document.querySelector('.wrapper');
const linkButton = createElementWithClassOnPage('button', 'btn btn-primary', parent,
    'click to type a link');
const followLinkButton = createElementWithClassOnPage('button', 'btn btn-link', parent,
    'Click to follow the link');

let link;

linkButton.addEventListener('click', () => {
    const linkRegExp = /^http(s)?:\/\/\w+\./;

    do {
        link = prompt('Enter a link')
    } while (!linkRegExp.test(link));
});

followLinkButton.addEventListener('click', () => {
    if (link) {
        location.href = link;
    } else {
        alert('Input a link first');
    }
});