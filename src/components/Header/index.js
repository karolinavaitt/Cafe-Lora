import "./style.css";

export const Header = () => {
  const element = document.createElement("header");
  element.innerHTML = `
  <header>
  <div class="header__content container">
    <div class="site-logo"></div>

    <div class="navigation">
      <button class="nav-btn"></button>
      <nav class="rollout-nav nav-closed">
        <a href="#home">domů</a>
        <a href="#menu">menu</a>
        <a href="#gallery">galerie</a>
        <a href="#contact">kontakt</a>
      </nav>
    </div>

  </div>
</header>


  `;

  const navBtnElm = element.querySelector(".nav-btn");
  navBtnElm.addEventListener("click", () => {
    element.querySelector(".rollout-nav").classList.toggle("nav-closed");
  });

  element.querySelector(".rollout-nav").addEventListener("click", () => {
    element.querySelector(".rollout-nav").classList.add("nav-closed");
  });
  return element;
};
