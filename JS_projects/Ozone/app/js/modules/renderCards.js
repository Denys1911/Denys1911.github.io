export default function renderCards(data) {
    const goodsWrapper = document.querySelector('.goods');

    data.goods.forEach(good => {
        const {category, sale, price, title} = good;

        goodsWrapper.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card" data-category="${category}">
                    ${sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url(${good.img})"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price" style="${sale ? 'color: red;' : ''}">${price} ₽</div>
                        <h5 class="card-title">${title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            </div>
        `;
    });
}
