function searchMovies() {
    const form = document.querySelector('.header__form'),
    input = document.querySelector('.header__input'),
    moviesContainer = document.querySelector('.movies-list');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const searchText = `https://api.themoviedb.org/3/search/multi?api_key=0c338acec6e7a56980348e8eb1f13c62&language=ru&query=${input.value}`;
        moviesContainer.innerHTML = '';
        input.value = '';
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

                if (output.total_results === 0) {
                    moviesContainer.innerHTML = `<div class="error">По вашему запросу ничего не найдено!</div>`;
                } else {
                    output.results.forEach(result => {
                        moviesContainer.innerHTML += `
                            <li class="movies-list__item">
                                <h2 class="movies-list__item-title">${result.name || result.title}</h2>
                                <div class="movies-list__item-about">
                                    <div>
                                        <p class="movies-list__item-original-title">Официальное название: <span>${result.original_title || result.original_name}</span></p>
                                        <p class="movies-list__item-mark">Средняя оценка: <span>${result.vote_average}</span></p>
                                        ${result.release_date ? `<p class="movies-list__item-release-date">Дата релиза: <span>${result.release_date}</span></p>` : ''}
                                    </div>
                                    ${result.poster_path ? 
                                    `<img class="movies-list__item-image" src="https://image.tmdb.org/t/p/w200${result.poster_path}" alt="Обложка фильма">` : ''}
                                </div>
                                ${result.overview ? `<p class="movies-list__item-overview"><span>Описание: </span>${result.overview}</p>` : ''}
                            </li>
                        `;
                    });
                }
            }

            if (request.status === 422) {
                moviesContainer.innerHTML = `<div class="error">По вашему запросу ничего не найдено!</div>`;
            }

            if (request.status !== 422 && request.status !== 200) {
                moviesContainer.innerHTML = `<div class="error">Упс... Ошибка ${request.status}. Попробуйте позже</div>`;
            }
        });
    }  
}

searchMovies();
