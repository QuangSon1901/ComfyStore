import html from "../../core.js"

function Hero() {
    return html`
    <section class="hero">
        <div class="hero-container">
            <h1 class="text-slanted">
                rest, relax, unwind
            </h1>
            <h3>Embrace your choices - we do</h3>
            <a href="products.html" class="hero-btn">
                show now
            </a>
        </div>
    </section>
    `
}

export default Hero