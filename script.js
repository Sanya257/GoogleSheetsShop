$(document).ready(() => {
    $.getJSON('https://spreadsheets.google.com/feeds/list/1nHYiEKT5AY_tkgmauVL0OXDVDMEQCMciH7EqqJLca78/1/public/full?alt=json',
        (data) => {
            data = data['feed']['entry'];
            var out = '';
            var banner='';
            for (var i = 0; i < data.length; i++) {
                out += `<div class="item"><img width="150" height="180" src="${data[i]['gsx$img']['$t']}">
                    <h4 class='name'>${data[i]['gsx$name']['$t']}</h4>
                   <h3 class='price'>Цена:${data[i]['gsx$price']['$t']}грн</h3>
                    <button class="buy" data="${data[i]['gsx$id']['$t']}">Купить</button></div>`
            }
            for (var i = 0; i < 3; i++) {
                banner+=`<img src="${data[i]['gsx$banner']['$t']}">`;
            }
            console.log(data);
            $('.shop-list').html(out);
            $('.slides').html(banner);
            let cart = {};
            $('.buy').on('click', function (e) {
                if (e.target.attributes.data.nodeValue) {
                    addToCart(e.target.attributes.data.nodeValue);
                }
            });

            function addToCart(elemId) {
                if (cart[elemId] !== undefined) {
                    cart[elemId]++;
                } else {
                    cart[elemId] = 1;
                }
                localStorage.setItem('cart',JSON.stringify(cart));
showCart();
            }
            function loadCartFromStorage() {
                if(localStorage.getItem('cart')!=null){
                    cart=JSON.parse(cart=localStorage.getItem('cart'));
                }
            };
            loadCartFromStorage();
            function showCart() {
                let li = '';
                for (let key in cart) {
                    li += `<li>${data[key]['gsx$name']['$t']}</li>`;
                    li += cart[key];
                    $('.cart').html(li);
                }

            }
            showCart();
        });
});