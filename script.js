const cards=document.querySelector('.section1_cards');
const navButtom=document.querySelector(".header-2_nav-list-cater")
const home=document.querySelector(".home");
const women=document.querySelector(".women");
const men=document.querySelector(".men");
const electro=document.querySelector(".electro");
const lifestyle=document.querySelector(".jewelery")
const down=document.querySelector(".section1_download")


mass=[];
massMen=[];
massWomen=[];
massElecro=[]
massLife=[]

console.log(cards)


down.addEventListener("click",()=>{
   let num1=6
  let num2=12;
  
  

  
}
)


async function add() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=6");
    if (!response.ok) throw new Error("Ошибка загрузки");
    const data = await response.json();
    console.log(data)
     
    diplayProduct(data);
  } catch (error) {
    cards.innerHTML = `<p>${error.message}</p>`;
  }
}

function diplayProduct(products) {
         
   products.forEach((element) => {
    

      const card = document.createElement("article");
    card.classList.add('section1_cards_card')
    const Delete = document.createElement("button");
    card.innerHTML = `
            <img loading="lazy" src="${element.image}" alt="${element.title}" width='auto' height='300px'>
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
  })};
      
  
    


function deletePriduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then(data => {
      alert(`Товар удалён: ${data.title}`);
      
    })
    .catch(error=>
      alert(error)
    )
}

add()


home.addEventListener("click",()=>{
  
 
  window.location.href="index.html"
})

women.addEventListener("click",()=>{
  women.classList.add("on")
  home.classList.remove("on");
   men.classList.remove("on");
   electro.classList.remove("on");
   lifestyle.classList.remove("on");
  cards.innerHTML=""
  fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      diplayProduct(data)
    })
    .catch(error=>
      alert(error)
    )

})


men.addEventListener("click",()=>{
  men.classList.add("on");
   home.classList.remove("on");
   women.classList.remove("on");
   electro.classList.remove("on");
   lifestyle.classList.remove("on");

  cards.innerHTML=""
  fetch("https://fakestoreapi.com/products/category/men's clothing")
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
    massMen=data
    diplayProduct(massMen)
  })
  .catch(error=>
    alert(error)
  )
})

electro.addEventListener("click",()=>{
  electro.classList.add("on")
  home.classList.remove("on");
   women.classList.remove("on");
   men.classList.remove("on")
   lifestyle.classList.remove("on");
   cards.innerHTML=""
   fetch("https://fakestoreapi.com/products/category/electronics")
   .then(response=>response.json())
   .then(data=>{
    console.log(data)
    diplayProduct(data)
   }).catch(error=>alert(error))
})

lifestyle.addEventListener("click",()=>{
  lifestyle.classList.add("on")
  women.classList.remove("on")
  men.classList.remove("on")
  electro.classList.remove("on")
  fetch("https://fakestoreapi.com/products/category/jewelery")
   .then(response=>response.json())
   .then(data=>{
    console.log(data)
    cards.innerHTML=""
    diplayProduct(data)
   }).catch(error=>alert(error))
})