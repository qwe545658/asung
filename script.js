const cards=document.querySelector('.section1_cards');
console.log(cards)


async function server() {
  try {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json()})
      .then((res) => {
        console.log(res);
        res.forEach((el) => {
            const card=document.createElement("div");
            card.classList="section1_cards_card"
         card.innerHTML=`<img class="cards_card_img" src="${el.image}">
          <p>${el.title}</p>
          <p>${el.price}</p>

          `
          


               cards.appendChild(card);
        }); 
      })
      .catch(console.error(`Ошибка ${error}`));
  } catch (error) {
    console.log(error);
  }
}  

server();

/*category
: 
"men's clothing"
description
: 
"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id
: 
1
image
: 
"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price
: 
109.95
rating
: 
{rate: 3.9, count: 120}
title
: 
 "Fjallraven - Folds*/