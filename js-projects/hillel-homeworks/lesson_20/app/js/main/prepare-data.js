const prepareData = storageName => {
    const storageData = localStorage.getItem(storageName);

    if (storageData) {
        return JSON.parse(storageData);
    }

    return fetch('data/data.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(result => result)
        .catch(err => {
            console.error(err);
            return [];
        })
};

