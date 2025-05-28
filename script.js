const product = document.querySelector('.products');
const countCart = document.querySelector('.countCart');

//fetch('http://localhost:3000/products')
//  .then(response => {
//    return response.json()
//  })
//  .then(data => {
//      localStorage.setItem('product', JSON.stringify(data));
//      const products = JSON.parse(localStorage.getItem('product')) || [];

//function renderProduct() {
//    product.innerHTML = '';
//    const cardStorege = localStorage.getItem('carts') || '[]';
//    let carts = JSON.parse(cardStorege);
//    countCart.textContent = carts.length;

//    products.forEach((item, index) => {
//        let {id, img, price, title, quantity = 1} = item;
//        let priceString = price.toLocaleString('kk-KZ') + ' ₸';
//        let card = document.createElement('div');
//        card.setAttribute('class', 'card');
//        card.setAttribute('id', id);
//        card.innerHTML = `
//        <div class="center-img">
//            <img src="${img}" alt="product" class="imgCard">
//            </div>
//            <p class="title">${title}</p>
//            <span class="price">${priceString}</span>
//            <p class="mpre-detaole">More details</p>
//            <button  data-index="${index}" class="btnAdd">+</button>
//        `;

//        product.appendChild(card);
        
//    })

//}

//renderProduct();

//product.addEventListener('click', (e) => {
//    if(e.target.classList.contains('btnAdd')) {
//        let card = e.target.closest('.card');
//        let id = card.id;
//        let img = card.querySelector('.imgCard').src;
//        let title = card.querySelector('.title').textContent;
//        let prices = card.querySelector('.price').textContent;
//        let priceNumb = parseInt(prices.replace(/\s/g, ''), 10);
//        let cart = {id, img, title, priceNumb, quantity: 1};
//        const cardStorege = localStorage.getItem('carts') || '[]';
//        let carts = JSON.parse(cardStorege);
//        const existId = carts.findIndex((item) => item.id === id);
//        if(existId !== -1) {
//            alert('Такой товар уже добавлен!');
//        }else {
//            carts.push(cart);
//        }

//        localStorage.setItem('carts', JSON.stringify(carts));
//        countCart.textContent  = carts.length;
//    }

//})

//});

const btnProduct = document.querySelector('.btnProduct');

btnProduct.addEventListener('click', () => {
    document.querySelector('.section-products').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
});

                    // Локальный вывод

const cardStorege = JSON.parse(localStorage.getItem('carts')) || [];
countCart.textContent = cardStorege.length;

product.addEventListener('click', (e) => {
    if(e.target.classList.contains('btnAdd')) {
        let card = e.target.closest('.card');
        let id = card.id;
        let img = card.querySelector('.imgCard').src;
        let title = card.querySelector('.title').textContent;
        let prices = card.querySelector('.price').textContent;
        let priceNumb = parseInt(prices.replace(/\s/g, ''), 10);
        //let priceString = priceNumb.toLocaleString('kk-Kz') + ' ₸';
        let cart = {id, img, title, priceNumb, quantity: 1};
        const cardStorege = localStorage.getItem('carts') || '[]';
        let carts = JSON.parse(cardStorege);
        const existId = carts.findIndex((item) => item.id === id);
        if(existId !== -1) {
            alert('Такой товар уже добавлен!');
        }else {
            carts.push(cart);
        }
        localStorage.setItem('carts', JSON.stringify(carts));
        countCart.textContent = carts.length;
    }

});
