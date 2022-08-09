import html from "../../core.js"
import Cart from "../Cart.js"
import Navbar from "../Navbar.js"
import Sidebar from "../Sidebar.js"
import HeroProducts from "./HeroProduct.js"
import Products from "./Products.js"

function AppProducts() {
    return html`
    ${Navbar()}
    ${HeroProducts()}
    ${Sidebar()}
    ${Cart()}
    ${Products()}
    `
}

export default AppProducts