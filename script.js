const cards=document.querySelector('.section1_cards');
console.log(cards)



async function add() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Ошибка загрузки");
    const data = await response.json();
    console.log(data)

    diplayProduct(data);
  } catch (error) {
    cards.innerHTML = `<p> ${error.message}</p>`;
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
            <p>${element.price}</p>
            <p>rate ${element.rating.rate}</p>
            <p>count ${element.rating.count}</p>
    `;
    Delete.textContent = "del";
    Delete.classList.add("delete-btn");
    Delete.addEventListener("click", () => {deletePriduct(element.id)});

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

add();
