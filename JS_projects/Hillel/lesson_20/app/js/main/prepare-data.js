const prepareData = storageName => {
    const storageData = localStorage.getItem(storageName);

    if (storageData) {
        return JSON.parse(storageData);
    }

    return fetch('data/data.json')
        .then(response => response.json())
        .then(result => result);
};

