function getAllItemsLists() {
    const peopleList = document.querySelector('.people-list');
    const companiesList = document.querySelector('.companies-list');
    const carsList = document.querySelector('.cars-list');
    return [peopleList, companiesList, carsList];
}

function createItemsList(list, itemName, itemsDataArr) {
    itemsDataArr.forEach(item => {
        list.innerHTML += `
            <li class="${itemName}">
                <div class="${itemName}-view-panel" data-id="${item.id}">
                    <span class="col-3">Name: ${item.name}</span>
                    <button class="btn btn-outline-dark edit-btn">Edit</button>
                    <button class="btn btn-outline-info view-btn">View</button>
                    <button class="btn btn-outline-danger remove-btn">Remove</button>
                </div>
                <div class="${itemName}-info text-center" data-id="${item.id}"></div>
            </li>
        `;
    });
}