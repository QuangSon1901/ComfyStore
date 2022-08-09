import html from "../../core.js"
import Cart from "../Cart.js"
import Navbar from "../Navbar.js"
import Sidebar from "../Sidebar.js"
import HeroProductDetail from "./HeroProductDetail.js"
import ProductDetail from "./ProductDetail.js"

function AppProductDetail() {
    return html`
    ${Navbar()}
    ${HeroProductDetail()}
    ${Sidebar()}
    ${Cart()}
    ${ProductDetail()}
    `
}

export default AppProductDetail