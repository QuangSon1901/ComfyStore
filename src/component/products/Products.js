import formatPrice from "../../../ulti/fortmat.js";
import html from "../../core.js";
import { connect } from "../../store.js";
import Product from "./Product.js";

function Products({ products, filter, filterPrice, searchValue }) {
    const arr = []
    products.map(product => arr.push(product.fields.company))
    const arrFilter = arr.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur)
        }
        return acc
    }, ['all'])
    
    let list = []
    if (searchValue) {
        list = products
            .filter(product => product.fields.name.startsWith(searchValue))
    } else {
        list = products
            .filter(product => filter === 'all' && true || product.fields.company === filter)
            .filter(product => filterPrice === null && true || product.fields.price <= filterPrice)
    }

    return html`
    <section class="products">
        <!-- filters -->
        <div class="filters">
            <div class="filters-container">
                <!-- search -->
                <div class="input-form">
                    <input type="text" onkeyup="event.keyCode === 13 && dispatch('searchProducts', this.value)" onblur="dispatch('searchProducts', this.value)" value="${searchValue || ''}" class="search-input" placeholder="search..." />
                </div>
                <!-- categories -->
                <h4>Company</h4>
                <article class="companies">
                    ${arrFilter.map(type => html`
                        <button class="company-btn" onclick="dispatch('switchFilter', '${type}')">${type}</button>
                    `)}
                </article>
                <!-- price -->
                <h4>Price</h4>
                <form class="price-form">
                    <input type="range" onchange="dispatch('priceFilter', this.value)" class="price-filter" min="0" value="${filterPrice || 10000}" max="10000" />
                </form>
                <p class="price-value">Value: ${filterPrice && formatPrice(filterPrice) || formatPrice(10000)}</p>
            </div>
        </div>
        <!-- products -->
        <div class="products-container">
            ${list.map(product => html`
                ${Product({ product })}
            `)}
        </div>
    </section>
    `
}

export default connect()(Products)