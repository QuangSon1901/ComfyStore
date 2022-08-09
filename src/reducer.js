import fetchProducts from "../ulti/fetchAPI.js"
import getProducts from "../ulti/fetchAPI.js"
import storage from "../ulti/storage.js"

const CART_STORAGE_KEY = 'cart'
const PRODUCTS_STORAGE_KEY = 'products'

const init = {
    products: storage.get(PRODUCTS_STORAGE_KEY),
    cart: storage.get(CART_STORAGE_KEY),
    openCart: false,
    filter: 'all',
    filterPrice: null,
    searchValue: ""
}

const actions = {
    // Cart
    openCart(state) {
        state.openCart = !state.openCart
    },
    cartItemIncrease({ cart }, id) {
        id && cart.find(item => item.id === id).amount++
        storage.set(CART_STORAGE_KEY, cart)
    },
    cartItemDecrease({ cart }, id) {
        if (id) {
            if (cart.find(item => item.id === id).amount > 1) {
                cart.find(item => item.id === id).amount--
                storage.set(CART_STORAGE_KEY, cart)
            }
        }
    },
    cartItemRemove({ cart }, id) {
        if (id) {
            const index = cart.indexOf(cart.find(item => item.id === id));
            cart.splice(index, 1)
            storage.set(CART_STORAGE_KEY, cart)
        }
    },
    addProductCart(state, id) {
        if (id) {
            const checkCart = state.cart.find(item => item.id === id)

            if (checkCart) {
                checkCart.amount++
            } else {
                const getProduct = state.products.find(item => item.id === id)
                const { id: productID } = getProduct
                const { name, price, company, featured, colors } = getProduct.fields
                const { url } = getProduct.fields.image[0]

                const newProduct = {
                    id: productID,
                    featured: featured || false,
                    name: name,
                    price: price,
                    company: company,
                    colors: colors,
                    image: url,
                    amount: 1
                }

                state.cart.push(newProduct)
            }
            storage.set(CART_STORAGE_KEY, state.cart)
            state.openCart = !state.openCart
        }
    },

    // Filter
    switchFilter(state, filter) {
        if (filter) {
            state.filter = filter
            state.searchValue = ''
        }
    },
    priceFilter(state, price) {
        if (price) {
            state.filterPrice = Number(price)
            state.searchValue = ''
        }
    },
    searchProducts(state, value) {
        if (value) {
            state.filter = 'all'
            state.filterPrice = null
            state.searchValue = value
        } else {
            state.filter = 'all'
            state.filterPrice = null
            state.searchValue = ''
        }
    }
}

function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}

export default reducer