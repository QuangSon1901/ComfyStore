import formatPrice from "../../../ulti/fortmat.js";
import html from "../../core.js";
import { connect } from "../../store.js";

function ProductDetail({ products }) {
    const params = new URLSearchParams(window.location.search)
    const product = products.find(product => product.id === params.get('id'))

    const { id } = product
    const { name, price, company, description, colors } = product.fields
    const { url } = product.fields.image[0]
    return html`
    <section class="single-product">
        <div class="section-center single-product-center">
            <img src="${url}" class="single-product-img img" alt="${name}" />
            <article class="single-product-info">
                <div>
                    <h2 class="single-product-title">${name}</h2>
                    <p class="single-product-company text-slanted">
                        by ${company}
                    </p>
                    <p class="single-product-price">${formatPrice(price)}</p>
                    <div class="single-product-colors">
                        ${colors.map(color => html`
                            <span class="product-color" style="background-color: ${color};"></span>
                        `)}
                    </div>
                    <p class="single-product-desc">
                        Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. 
                        Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. 
                        Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
                    </p>
                    <button class="addToCartBtn btn" onclick="dispatch('addProductCart', '${id}')" data-id="id">
                        add to cart
                    </button>
                </div>
            </article>
        </div>
    </section>
    `
}

export default connect()(ProductDetail)