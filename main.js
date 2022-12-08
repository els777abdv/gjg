function setElem(element) {
    let products_basket = (window.localStorage.getItem("elem")) ? JSON.parse(window.localStorage.getItem("elem")) : [];
    let parent = element.closest('.item');
    console.log(products_basket[parent.dataSet.id]);
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
 
