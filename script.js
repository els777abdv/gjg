
function total(){
    let sum = 0;                                     
let price = document.querySelectorAll(".price"); 
let amount = document.querySelectorAll(".menu-kol");  
for (let i = 0; i < price.length; i++) {         
    sum = sum + parseInt(price[i].innerHTML) * parseInt(amount[i].innerHTML);
}                                                
document.getElementById("total").innerHTML = sum; 
}
function add(element) {
    let num = element.closest(".chet");
    num.querySelector('.menu-kol').innerHTML =
        parseInt(num.querySelector('.menu-kol').innerHTML) + 1;
    total();
}

function minus(element) {
    let num = element.closest(".chet");
    num.querySelector('.menu-kol').innerHTML =
        parseInt(num.querySelector('.menu-kol').innerHTML) - 1;
    total();
}

