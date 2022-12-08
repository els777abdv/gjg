let basket = (window.localStorage.getItem("card"))? JSON.parse(window.localStorage.getItem("card")) : [];
console.log(basket);
basket.forEach(element => {
    if (element) {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img src="${element.source}" alt="" class="img-img">
            <div class="row">
                <span class="muzikk">${element.name}</span>
                <p class="textt">${element.description}</p>
                <p>Price : <span class="price">${element.cost}</span>$</p>
                <button class="minus" onclick="add(this)">+</button>
                <div class="menu-kol">${element.count}</span>
                <button class="minus"  onclick="minus(this)">-</button>
            </div>
        `;
        document.querySelector('.wrapper').append(div);
    }
})




function myFunction() {
    var x = document.getElementById("minmenu");

    x.style.display = "block";
}


function setElem(element) {
   let products_basket = (window.localStorage.getItem("elem")) ? JSON.parse(window.localStorage.getItem("elem")) : [];
   let parent = element.closest('.item');
   console.log(products_basket[parent.dataset.id]);
   if (products_basket[parent.dataset.id]) {
       products_basket[parent.dataset.id].count++;
   } else {
       products_basket[parent.dataset.id] = {
           name: parent.querySelector('h4').textContent,
           description: parent.querySelector('.benefits-text').textContent,
           cost: parent.querySelector('.price').textContent,
           source: parent.querySelector('img').getAttribute('src'),
           count: 1
       };
   }

   window.localStorage.setItem("elem", JSON.stringify(products_basket));
};





class localStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    getProducts() {
        const localStorageUtil = localStorage.getItem(this.keyName);
        if (localStorageUtil !== null) {
            return JSON.parse(localStorageUtil);
        }
        return[];
    }

    putProducts(id){
        let products = this.getProducts();
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
        }else {
            products.splice(index, 1);
        }

        products.push(id);
        localStorage.setItem(this.keyName, JSON.stringify(products));

    }
}

const localStorageUtil = new localStorageUtil();

localStorageUtil.putProducts('she1');



let basket = (window.localStorage.getItem("card"))? JSON.parse(window.localStorage.getItem("card")) : [];
console.log(basket);
basket.forEach(element => {
    if (element) {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img src="${element.source}" alt="" class="img-img">
            <div class="row">
                <span class="muzikk">${element.name}</span>
                <p class="textt">${element.description}</p>
                <p>Price : <span class="price">${element.cost}</span>$</p>
                <button class="minus" onclick="add(this)">+</button>
                <div class="menu-kol">${element.count}</span>
                <button class="minus"  onclick="minus(this)">-</button>
            </div>
        `;
        document.querySelector('.wrapper').append(div);
    }
})




let cart = {
    'she1':{
        "name":"GTA5",
        "count":0,
    },
    'he12':{
        "name":"GTA5",
        "count":0,
    },
    'they1':{
        "name":"GTA5",
        "count":0,
    },
};





document.onclick = event => {
    console.log(event.target.classList);
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}

const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}

const minusFunction = id => {
    if (cart[id]['count']-1 == 0){
        renderCart(id);
        return true;

    }
    cart[id]['count']--;
    renderCart();
}


const deliteFunction = id => {
    delete cart[id];
    renderCart();
}


const renderCart = () => {
    console.log(cart);
}
renderCart();