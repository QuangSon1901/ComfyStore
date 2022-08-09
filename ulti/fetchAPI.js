const productsAPI = "https://course-api.com/javascript-store-products"
const productAPI = 'https://course-api.com/javascript-store-single-product?id='

// function getProducts(callback) {
//     fetch(productsAPI)
//         .then(res => res.json())
//         .then(callback)
// }

const fetchProducts = async () => {
    const response = await fetch(productsAPI).catch((err) => console.log(err));
    if (response) {
      return response.json();
    }
    return response;
  };

export default fetchProducts