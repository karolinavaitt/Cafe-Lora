import { Header } from "./components/Header/index.js";
import { Footer } from "./components/Footer/index.js";
import { Banner } from "./pages/Banner/index.js";
import { Gallery } from "./pages/Gallery/index.js";
import { Menu } from "./pages/Menu/index.js";
import { Contact } from "./pages/Contact";
import "./style.css";

const pageElement = document.createElement("div");
pageElement.classList.add("page");

const main = document.createElement("main");
main.append(Banner(), Menu({ drinks: "loading" }), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector("#app").append(pageElement);
