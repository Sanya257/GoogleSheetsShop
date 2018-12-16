$(document).ready(() => {
    $.getJSON('https://spreadsheets.google.com/feeds/list/1nHYiEKT5AY_tkgmauVL0OXDVDMEQCMciH7EqqJLca78/1/public/full?alt=json',
        (data) => {
console.log(data.feed.entry);
            var out = '';
            for (var i = 0; i < data.length; i++) {
                out += `<div class="item"><img width="200" height="200" src="${data[i].img}">
                    <h2 class='name'>${data[i].feed.entry.gsx$name}</h2>
                    <h3 class='price'>Цена:${data[i].price}грн</h3>
                    <button class="buy" data="${data[i].id}">Купить</button>
</div>`
            }
            $('.shop-list').html(out);
            var cart={};
         $('.buy').on('click',function (e) {
             if(e.target.attributes.data.nodeValue){
             addToCart(e.target.attributes.data.nodeValue);
             console.log(cart);
                 }
         });
         function addToCart(elem) {
             if(cart[elem]!==undefined){
                 cart[elem]++;
             }else {
             cart[elem]=1;
             }

             }

        });
});