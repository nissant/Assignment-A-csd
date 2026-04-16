const coffeeMenu = [
  {
    name: "Espresso",
    price: "£3.00",
    description: "A rich and bold coffee made by forcing hot water through finely ground coffee beans. Our espresso has a thick golden crema and delivers an intense, full-bodied flavor with notes of dark chocolate and caramel.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cappuccino",
    price: "£4.50",
    description: "A classic Italian coffee drink made with equal parts espresso, steamed milk, and milk foam. Our cappuccino features a smooth, creamy texture with a delicate layer of foam art on top.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Caramel Latte",
    price: "£5.00",
    description: "A creamy latte blended with sweet caramel syrup and topped with a drizzle of caramel sauce. This smooth and indulgent drink combines the richness of espresso with the buttery sweetness of caramel.",
    image:
      "https://plus.unsplash.com/premium_photo-1664970900098-2676029e6a99?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Americano",
    price: "£3.80",
    description: "A classic coffee made by adding hot water to espresso, creating a smooth and mellow drink. Our Americano has a rich aroma with a clean, bold taste similar to drip coffee but with more depth and complexity.",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vanilla Cold Brew",
    price: "£4.90",
    description: "Cold brewed for 20 hours for an exceptionally smooth and sweet coffee. Infused with real vanilla syrup and served over ice for a refreshing, silky-smooth experience.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mocha",
    price: "£5.25",
    description: "A delicious combination of espresso, chocolate, and steamed milk. Our mocha features rich cocoa notes perfectly blended with creamy milk and a hint of vanilla.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Flat White",
    price: "£4.25",
    description: "A smooth and velvety coffee made with espresso and steamed milk, featuring a higher coffee-to-milk ratio than a latte. Perfectly balanced with a creamy texture and rich espresso flavor.",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hazelnut Latte",
    price: "£5.25",
    description: "A creamy latte infused with the nutty, aromatic flavor of hazelnut syrup. This delightful blend combines the smoothness of milk foam with the rich taste of roasted hazelnuts.",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iced Americano",
    price: "£4.00",
    description: "A refreshing cold version of the classic Americano, made with espresso shots and cold water served over ice. Perfect for warm days with a crisp, clean coffee flavor.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Macchiato",
    price: "£3.75",
    description: "A bold espresso with a small amount of steamed milk and foam. The word 'macchiato' means 'marked' in Italian, referring to the milk that marks the espresso.",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hot Chocolate",
    price: "£4.50",
    description: "A rich and indulgent blend of premium chocolate and steamed milk, topped with whipped cream and a sprinkle of cocoa. A comforting treat for chocolate lovers.",
    image:
      "https://images.unsplash.com/photo-1637572815755-c4b80092dce1?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const coffeeList = document.getElementById("coffeeList");
const modal = document.getElementById("coffeeModal");
const modalTitle = document.getElementById("coffeeModalTitle");
const modalImage = document.getElementById("coffeeModalImage");
const modalPrice = document.getElementById("coffeeModalPrice");
const modalDescription = document.getElementById("coffeeModalDescription");

if (coffeeList) {
  coffeeMenu.forEach((coffee) => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-4";
    col.innerHTML = `
      <article class="coffee-item h-100" style="cursor: pointer;">
        <img src="${coffee.image}" alt="${coffee.name}" />
        <div class="coffee-content">
          <h3 class="h6 mb-1">${coffee.name}</h3>
          <p class="coffee-price mb-0">${coffee.price}</p>
        </div>
      </article>
    `;

    col.querySelector(".coffee-item").addEventListener("click", () => {
      modalTitle.textContent = coffee.name;
      modalImage.src = coffee.image;
      modalImage.alt = coffee.name;
      modalPrice.textContent = coffee.price;
      modalDescription.textContent = coffee.description;
      
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    });

    coffeeList.appendChild(col);
  });
}