import html from "../../core.js"
import Cart from "../Cart.js"
import Navbar from "../Navbar.js"
import Sidebar from "../Sidebar.js"
import About from "./About.js"
import HeroAbout from "./HeroAbout.js"

function AppAbout() {
    return html`
    ${Navbar()}
    ${HeroAbout()}
    ${Sidebar()}
    ${Cart()}
    ${About()}
    `
}

export default AppAbout