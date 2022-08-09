import formatPrice from "../../ulti/fortmat.js";
import html from "../core.js";
import { connect } from "../store.js";
import CartItem from "./CartItem.js";

function Cart({ cart, openCart }) {
    return html`
    <div class="cart-overlay ${openCart && 'show'}">
        <aside class="cart">
            <button class="cart-close" onclick="dispatch('openCart')">
                <i class="fas fa-times"></i>
            </button>
            <header>
                <h3 class="text-slanted">your bag</h3>
            </header>
            <div class="cart-items">
                ${cart.map(cartItem => CartItem({ cartItem }))}
            </div>
            <footer>
                <h3 class="cart-total text-slanted">
                    total : ${formatPrice(CartTotal(cart))}
                </h3>
                <button class="cart-checkout btn">checkout</button>
            </footer>
        </aside>
    </div>
    `
}

function CartTotal(cart) {
    let total = 0
    cart.forEach(cartItem => {
        total += cartItem.price * cartItem.amount
    });
    return total
}

export default connect()(Cart)