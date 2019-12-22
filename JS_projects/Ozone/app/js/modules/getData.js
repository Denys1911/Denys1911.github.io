export default function getData() {
    const goodsWrapper = document.querySelector('.goods');

    return fetch('data/data.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(data => data)
        .catch(err => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div class="error-message">Упс... Что-то пошло не так...</div>';
        });
}
