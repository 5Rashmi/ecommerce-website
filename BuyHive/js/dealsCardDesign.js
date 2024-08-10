function TopDeals() {
  const products = [
    {
      img: "../img/kitkat.png",
      name: "KitKat",
      discount: "40% Off",
      price: "$5",
      originalPrice: "$8",
    },
    {
      img: "../img/kitkat.png",
      name: "Kit",
      discount: "40% Off",
      price: "$5",
      originalPrice: "$8",
    },
    {
      img: "../img/kitkat.png",
      name: "Kat",
      discount: "40% Off",
      price: "$5",
      originalPrice: "$8",
    },
    {
      img: "../img/kitkat.png",
      name: "Kt",
      discount: "40% Off",
      price: "$5",
      originalPrice: "$8",
    },
    {
      img: "../img/kitkat.png",
      name: "Kkkt",
      discount: "40% Off",
      price: "$2",
      originalPrice: "$8",
    },
    {
      img: "../img/kitkat.png",
      name: "Kcatt",
      discount: "40% Off",
      price: "$5",
      originalPrice: "$8",
    },
    {
      img: "../img/kitkat.png",
      name: "Kkissit",
      discount: "40% Off",
      price: "$5",
      originalPrice: "$10",
    },
    {
      img: "../img/kitkat.png",
      name: "Kaaat",
      discount: "40% Off",
      price: "$5",
      originalPrice: "$8",
    },
  ];

  const cardContainer = document.querySelector(".cardContainer");
  const cardTemplate = document.getElementById("cardTemplate");

  products.forEach((product) => {
    const cardClone = cardTemplate.cloneNode(true);
    cardClone.style.display = "block";
    cardClone.querySelector(".dealsCardImgBx img").src = product.img;
    cardClone.querySelector(".dealsCardImgBx img").alt = product.name;
    cardClone.querySelector("h2").textContent = product.name;
    cardClone.querySelector(".discPercent").textContent = product.discount;
    cardClone.querySelector("h4").textContent = product.price;
    cardClone.querySelector("span strike").textContent = product.originalPrice;

    cardContainer.appendChild(cardClone);
  });

  const dealsPrev = document.querySelector(".dealsPrev");
  const dealsNext = document.querySelector(".dealsNext");

  dealsNext.addEventListener("click", function () {
    const firstCard = cardContainer.firstElementChild;
    cardContainer.appendChild(firstCard);
  });
  dealsPrev.addEventListener("click", function () {
    const lastCard = cardContainer.lastElementChild;
    cardContainer.prepend(lastCard);
  });
}
document.addEventListener("DOMContentLoaded", TopDeals);
