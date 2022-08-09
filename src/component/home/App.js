import html from "../../core.js"
import Cart from "../Cart.js"
import Navbar from "../Navbar.js"
import Sidebar from "../Sidebar.js"
import Featured from "./Featured.js"
import Hero from "./Hero.js"

function App() {
    return html`
        ${Navbar()}
        ${Hero()}
        ${Sidebar()}
        ${Cart()}
        ${Featured()}
    `
}

export default App