function searchMovies() {
    const form = document.querySelector('.header__form'),
    input = document.querySelector('.header__input'),
    moviesContainer = document.querySelector('.movies-list');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const searchText = `https://api.themoviedb.org/3/search/multi?api_key=0c338acec6e7a56980348e8eb1f13c62&language=ru&query=${input.value}`;
        const request = getRequest('get', searchText);
        showMovies(request);
    });

    function getRequest(method, url) {
        const request = new XMLHttpRequest();
        request.open(method, url, true);
        request.send();
        return request;
    }
    
    function showMovies(request) {
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const output = JSON.parse(request.responseText);
                output.results.forEach(result => {
                    console.log(result);
                    moviesContainer.innerHTML += `
                        <li class="movies-list__item">
                            <h2 class="movies-list__item-title">${result.name || result.title}</h2>
                            <p class="movies-list__item-overview">${result.overview}</p>
                            <img src="https://image.tmdb.org/t/p/w500${result.poster_path}">
                        </li>
                    `;
                });
            }
        });
    }  
}

searchMovies();
