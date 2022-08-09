import html from "../../core.js"
import { connect } from "../../store.js"
import formatPrice from "../../../ulti/fortmat.js";

function Featured({ products }) {
    return html`
    <section class="section featured">
        <div class="title">
            <h2><span>/</span> featured</h2>
        </div>
        <div class="featured-center section-center">
            <!-- <h2 class="section-loading">
                loading...
            </h2> -->
            <!-- single product -->
            ${products.map((product, index) => {
                if (index > 2) {
                    return
                }
                const { id } = product
                const { name, price } = product.fields
                const { url } = product.fields.image[0]
                return html`
                    <article class="product">
                        <div class="product-container">
                            <img src="${url}" class="product-img img" alt="${name}" />

                            <div class="product-icons">
                                <a href="product-detail.html?id=${id}" class="product-icon">
                                    <i class="fas fa-search"></i>
                                </a>
                                <button class="product-cart-btn product-icon" onclick="dispatch('addProductCart', '${id}')" data-id="${id}">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                        <footer>
                            <p class="product-name">${name}</p>
                            <h4 class="product-price">${formatPrice(price)}</h4>
                        </footer>
                    </article>
                `
            })}
            <!-- end of single product -->
        </div>
        <a href="products.html" class="btn">
            all products
        </a>
    </section>
    `
}

export default connect()(Featured)