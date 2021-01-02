function changeString(str, symbolsToDelete) {
    return str.split('')
        .filter(letter => !symbolsToDelete.includes(letter))
        .join('');
}

changeString('Hello world', ['l', 'o']);