'use strict';

const getRequest = (method, url) => {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send();

    return request;
};

const createErrorMessageHTML = errorMessage => {
    return `<div class="error">${errorMessage}</div>`;
};

const showMoviesOrErrorMessage = request => {
    const moviesContainer = document.querySelector('.movies-list');

    const createMovieCardHTML = data => {
        const {name, title, original_title: originalTitle, original_name: originalName, vote_average: voteAverage,
            release_date: releaseDate, poster_path: posterPath, overview} = data;
        const releaseDateBlock =
            `<p class="movies-list__item-release-date">Дата релиза: <span>${releaseDate}</span></p>`;
        const filmImage =
            `<img class="movies-list__item-image" src="https://image.tmdb.org/t/p/w200${posterPath}" 
                alt="Обложка фильма">`;
        const filmOverviewBlock = `<p class="movies-list__item-overview"><span>Описание: </span>${overview}</p>`;

        return `
            <li class="movies-list__item">
                <h2 class="movies-list__item-title">${name || title}</h2>
                <div class="movies-list__item-about">
                    <div>
                        <p class="movies-list__item-original-title">
                            Официальное название: <span>${originalTitle || originalName}</span>
                        </p>
                        <p class="movies-list__item-mark">
                            Средняя оценка: <span>${voteAverage}</span>
                        </p>
                        ${releaseDate ? releaseDateBlock : ''}
                    </div>
                    ${posterPath ? filmImage : ''}
                </div>
                ${overview ? filmOverviewBlock : ''}
            </li>
        `;
    };

    const handleReadyStateChangeOnRequest = () => {
        const {readyState, status: requestStatus} = request;

        if (readyState !== 4) {
            return;
        }

        if (requestStatus === 422) {
            moviesContainer.innerHTML = createErrorMessageHTML('По вашему запросу ничего не найдено!');
            return;
        }

        if (requestStatus !== 422 && requestStatus !== 200) {
            moviesContainer.innerHTML =
                createErrorMessageHTML(`Упс... Ошибка ${requestStatus}. Попробуйте позже`);
            return;
        }

        const output = JSON.parse(request.response);
        const {total_results: totalResultsCount, results} = output;

        if (totalResultsCount === 0) {
            moviesContainer.innerHTML = createErrorMessageHTML('По вашему запросу ничего не найдено!');
            return;
        }

        results.forEach(result => {
            moviesContainer.innerHTML += createMovieCardHTML(result);
        });
    };

    request.addEventListener('readystatechange', handleReadyStateChangeOnRequest);
};

const searchMovies = () => {
    const form = document.querySelector('.header__form');
    const input = document.querySelector('.header__input');
    const moviesContainer = document.querySelector('.movies-list');
    const url = 'https://api.themoviedb.org/3/search/multi?api_key=0c338acec6e7a56980348e8eb1f13c62&language=ru&query=';

    const handleSubmitOnForm = e => {
        e.preventDefault();

        if (!input.value) {
            moviesContainer.innerHTML = createErrorMessageHTML('Input search text first');
            return;
        }

        const fullUrl = `${url}${input.value}`;
        const request = getRequest('get', fullUrl);

        moviesContainer.innerHTML = '';
        input.value = '';
        showMoviesOrErrorMessage(request);
    };

    form.addEventListener('submit', handleSubmitOnForm);
};

searchMovies();
