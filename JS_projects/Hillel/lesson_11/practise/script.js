document.forms[0].elements.save.addEventListener('click', e => {
    const form = document.forms.userForm;
    let arr = [];

    for (let i = 0; i < form.length; i++) {
        const element = form.elements[i];
        const itemContent = `${element.name}: ${element.value}`;

        if (element.tagName === 'SELECT') {
            for (let i = 0; i < element.length; i++) {
                if (element.options[i].selected) {
                    arr.push(`${element.name}: ${element.options[i].value}`);
                }
            }
            continue;
        }

        if (element.type === 'button') {
            continue;
        }

        if (element.type === 'checkbox' || element.type === 'radio') {
            if (element.checked) {
                arr.push(itemContent);
            }
        } else {
            arr.push(itemContent);
        }
    }

    console.log(arr);
});
