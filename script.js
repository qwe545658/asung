const cards=document.querySelector('.section1_cards');
const navButtom=document.querySelector(".header-2_nav-list-cater")
const home=document.querySelector(".home");
const women=document.querySelector(".women");
const men=document.querySelector(".men");
const electro=document.querySelector(".elecro");
const lifestyle=document.querySelector(".lifestyle")



console.log(cards)



async function add() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Ошибка загрузки");
    const data = await response.json();
    console.log(data)

    diplayProduct(data);
  } catch (error) {
    cards.innerHTML = `<p>${error.message}</p>`;
  }
}

function diplayProduct(products) {
  products.forEach(element => {
    const card = document.createElement("article");
    card.classList.add('section1_cards_card')
    const Delete = document.createElement("button");
    card.innerHTML = `
            <img src="${element.image}" alt="${element.title}" width='auto' height='300px'>
            <h3>${element.title}</h3>  
            <p>price ${element.price}</p>
            <p>rate ${element.rating.rate}</p>
            <p>count ${element.rating.count}</p>
    `;
    Delete.textContent = "del";
    Delete.classList.add("delete-btn");
    Delete.addEventListener("click", () => {deletePriduct(element.id)
      card.remove();
    });

    card.appendChild(Delete);
    cards.appendChild(card);
  });
}

function deletePriduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then(data => {
      alert(`Товар удалён: ${data.title}`);
      
    });
}

add()


home.addEventListener("click",()=>{
  navButtom.classList.remove("on");
  home.classList.add("on");
  window,location.href="index.html"
})

women.addEventListener("click",()=>{
  navButtom.classList.remove("on");
  women.classList.add("on")
  cards.innerHTML=""
  fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      diplayProduct(data)
    })

})