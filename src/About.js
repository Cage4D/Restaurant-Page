export function About() {
  tabGen();
}

function tabGen() {
  const container = document.querySelector("#content");
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.classList.add("about");
  const head = document.createElement("div");
  const body = document.createElement("div");

  head.classList.add("H1");
  body.classList.add("B2");

  head.textContent = "About";
  body.textContent =
    "Welcome to Tropical Twist Café, nestled at 2005 Kalia Rd, Honolulu, HI 96815, where we bring the flavors of the tropics to your table. Our passion for fresh, vibrant ingredients and warm hospitality creates a beachside paradise experience you'll want to return to again and again.";

  tab.append(head, body);
  container.appendChild(tab);
}