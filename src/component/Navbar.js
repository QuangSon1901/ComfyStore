import html from "../core.js"
import { connect } from "../store.js"

function Navbar({cart}) {
    return html`
    <nav class="navbar ${window.location.pathname.split('/').includes('index.html') || 'page'}">
        <div class="nav-center">
            <div>
                <button class="toggle-nav">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="nav-links">
                    <li>
                        <a href="index.html" class="nav-link">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="products.html" class="nav-link">
                            products
                        </a>
                    </li>
                    <li>
                        <a href="about.html" class="nav-link">
                            about
                        </a>
                    </li>
                </ul>
            </div>
            <img src="${window.location.pathname.split('/').includes('index.html') && '/images/logo-white.svg' || '/images/logo-black.svg'}" class="nav-logo" alt="logo" />
            <!-- cart icon -->
            <div class="toggle-container">
                <button class="toggle-cart" onclick="dispatch('openCart')">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <span class="cart-item-count">${cart.length}</span>
            </div>
        </div>
    </nav>
    `
}

export default connect()(Navbar)