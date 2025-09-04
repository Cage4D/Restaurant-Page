export function Menu() {
  tabGen();
  menuContent();
}

function tabGen() {
  let check = 1;
  for (let i = 0; i < 9; i++) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.classList.add("menu");
    tab.classList.add(`menu-tab${check}`);
    check++;
    Dom().container.appendChild(tab);
  }
}

function Dom() {
  const container = document.querySelector("#content");
  container.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)";
  const menu = document.querySelectorAll(".menu");

  return { container, menu };
}

function menuContent() {
  const menu = Dom().menu;
  menu.forEach((menu) => {
    const head = document.createElement("div");
    const body = document.createElement("div");
    const price = document.createElement("div");

    head.classList.add("head");
    body.classList.add("body");
    price.classList.add("price");

    menu.append(head, body, price);
  });

  const selectors = [];

  for (let i = 1; i < 10; i++) {
    const head = document.querySelector(`.menu-tab${i} > .head`);
    const body = document.querySelector(`.menu-tab${i} > .body`);
    const price = document.querySelector(`.menu-tab${i} > .price`);
    selectors.push(head, body, price);
  }

  const [
    h1,
    b1,
    p1,
    h2,
    b2,
    p2,
    h3,
    b3,
    p3,
    h4,
    b4,
    p4,
    h5,
    b5,
    p5,
    h6,
    b6,
    p6,
    h7,
    b7,
    p7,
    h8,
    b8,
    p8,
    h9,
    b9,
    p9,
  ] = selectors;

  h1.textContent = "Mango Salsa Bites";
  b1.textContent =
    " Fresh mango chunks with a zesty kick, served with crispy tortilla chips.";
  p1.textContent = "$6.50";

  h2.textContent = "Coconut Shrimp";
  b2.textContent =
    "Succulent shrimp coated in shredded coconut, lightly fried to perfection.";
  p2.textContent = "$8.00";

  h3.textContent = "Hawaiian Poke Bowl";
  b3.textContent = "Marinated raw tuna with rice, avocado, and seaweed salad.";
  p3.textContent = "$12.50";

  h4.textContent = "Pineapple Grilled Chicken";
  b4.textContent =
    "Juicy chicken breast glazed with sweet pineapple sauce, served with veggies.";
  p4.textContent = "$11.00";

  h5.textContent = "Tropical Curry";
  b5.textContent =
    "Creamy coconut curry with mixed seafood and fragrant spices.";
  p5.textContent = "$13.75";

  h6.textContent = "Plantain Fries";
  b6.textContent = "Crispy fried plantains with a hint of sweetness, perfect for sharing.";
  p6.textContent = "$4.25";

  h7.textContent = "Cucumber Mint Salad";
  b7.textContent = "Refreshing cucumbers with a cool mint dressing, light and crisp.";
  p7.textContent = "$3.50";

  h8.textContent = "Passion Fruit Cheesecake";
  b8.textContent = "Silky cheesecake topped with tangy passion fruit glaze.";
  p8.textContent = "$6.00";

  h9.textContent = "Coconut Macaroons";
  b9.textContent = "Chewy coconut treats baked to golden perfection.";
  p9.textContent = "$4.75";
}
