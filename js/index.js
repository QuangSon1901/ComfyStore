import AppAbout from "../src/component/about/AppAbout.js";
import App from "../src/component/home/App.js";
import AppProducts from "../src/component/products/AppProducts.js";
import AppProductDetail from "../src/component/product_detail/AppProductDetail.js";
import { attach } from "../src/store.js";
import fetchProducts from "../ulti/fetchAPI.js";
import storage from "../ulti/storage.js";

const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const PRODUCTS_STORAGE_KEY = 'products'

const init = async () => {
    const products = await fetchProducts();
    if (products) {
        // add products to the store
        storage.set(PRODUCTS_STORAGE_KEY, products)
    }
};

window.addEventListener('DOMContentLoaded', init);

const root = $('#root')
root && attach(App, root)

const rootProducts = $('#root-products')
rootProducts && attach(AppProducts, rootProducts)

const rootAbout = $('#root-about')
rootAbout && attach(AppAbout, rootAbout)

const rootProductDetail = $('#root-product-detail')
rootProductDetail && attach(AppProductDetail, rootProductDetail)