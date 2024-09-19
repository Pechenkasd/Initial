document.getElementById("main_action_button").onclick = function(){
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
}
const links = document.querySelectorAll(".menu_item > a");
for(let i = 0 ; i < links.length; i++){
    links[i].onclick = function(){
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"})};
}
const buttons = document.querySelectorAll(".product_item .button");
for(let i = 0 ; i < buttons.length; i++){
    buttons[i].onclick = function(){
    document.getElementById("order").scrollIntoView({behavior:"smooth"})};
}
const prices = document.getElementsByClassName("product_item_price")
document.getElementById("change_currency").onclick = function(e){
    const currentCurency = e.target.innerText;
    let newCurrency = "$"
    let coefficent = 1 
    if(currentCurency === "$"){
        newCurrency = "₽"
        coefficent = 90
    }else if(currentCurency === "₽"){
        newCurrency = "BYN"
        coefficent = 3
    }else if (currentCurency === 'BYN') {
        newCurrency = '€';
        coefficent = 0.9;
    } else if (currentCurency === '€') {
        newCurrency = '¥';
        coefficent = 6.9;
}
    
    e.target.innerText = newCurrency
    for(let i = 0; i < prices.length; i++){
        prices[i].innerText = (prices[i].getAttribute("data-base-price") * coefficent).toFixed(1) + " " + newCurrency
    }
}
const product = document.getElementById("product")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
document.getElementById("order_action").onclick = function(){
    let hasError = false
    [product,name,phone].forEach(item =>{
        if(!item.value){
            item.style.borderColor = "red"
            hasError = true
        }else{
            item.style.borderColor = ""
        }
    })
    if(!hasError){
        [product,name,phone].forEach(item =>{
            item.value = ""
        })
    alert("Спасибо за заказ! Мы скоро свяжимся с вами!")
    }
}