//Declaração para facilitar o queryselector//
const qs = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelector(el);

//Adicionando as pizzas nos items
pizzaJson.map((pizza, index) => {
    let pizzaItem = qs('.models .pizza-item').cloneNode(true); //método cloneNode clona os items do html

    qs('.pizza-area').append(pizzaItem);
}); 