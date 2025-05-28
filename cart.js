const cardStorege = JSON.parse(localStorage.getItem('carts')) || [];
const countCart = document.querySelector('.countCart');
const cartProduct = document.querySelector('.cartProduct');
const totalPrice = document.querySelector('.totalPrice');
const titlecart = document.querySelector('.titlecart');
const cartbg = document.querySelector('.cartbg');
const totals = document.querySelector('.totals');
countCart.textContent = cardStorege.length;

function quantityPrice() {
    let total = cardStorege.reduce((pre, item) => {
         return pre + item.priceNumb * item.quantity;
    },0);

    let priceString = total.toLocaleString('kk-kZ') + ' ₸';
    totalPrice.textContent = priceString;

};

function renderCard() {
    cartProduct.innerHTML = '';
    if(cardStorege.length <= 0) {
        titlecart.textContent = 'Yuor cart is empty!';
        totals.style.display = 'none';
        cartProduct.style.display = 'none';
        const btnShop = document.createElement('a');
        btnShop.setAttribute('class', 'btnShop');
        btnShop.setAttribute('href', 'index.html');
        btnShop.textContent = 'Shop';

        cartbg.appendChild(btnShop);
    }
    if(cardStorege) {
        cardStorege.forEach((item, index) => {
          let {id, img, title, priceNumb, quantity = 1} = item;
          let priceQuantity = priceNumb * quantity;
          let priceStrings = priceQuantity.toLocaleString('kk-kZ') + ' ₸';
          let card = document.createElement('div');
          card.setAttribute('class', 'card');
          card.setAttribute('id', id);
          card.innerHTML = `
           <div class="center-img">
                <img src="${img}" alt="product" class="imgCard">
            </div>
            <p class="title">${title}</p>
            <span class="price">${priceStrings}</span>
            <div class="counters">
                <button data-index="${index}" class="btnMinus">-</button>
                <input data-index="${index}" class="inputCount" value="${quantity}" type="text">
                <button data-index="${index}" class="btnPlus">+</button>
            </div>
            <button data-index="${index}" class="btnDelet">X</button>
          `;

          cartProduct.appendChild(card);

        });
    }
    quantityPrice();
};

cartProduct.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if(e.target.classList.contains('btnDelet')) {
        cardStorege.splice(index, 1);
    }
    else if(e.target.classList.contains('btnMinus')) {
        cardStorege[index].quantity--;
        if(cardStorege[index].quantity <= 0) {
            cardStorege[index].quantity = 1;
        }
    }
    else if(e.target.classList.contains('btnPlus')) {
        cardStorege[index].quantity++;
    }
    localStorage.setItem('carts', JSON.stringify(cardStorege));
    countCart.textContent = cardStorege.length;
    renderCard();
});

renderCard();



