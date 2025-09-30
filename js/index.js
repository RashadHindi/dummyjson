const getCategories = async ()=>{

    const response = await axios.get("https://dummyjson.com/products/category-list"); 
    console.log(response);

    const categories = response.data; 

    const result = categories.map( (ele) =>
        `
            <div class="category">
                    ${ele}
            </div>
        `

    ).join('');

    document.querySelector(".categories-container").innerHTML = result; 
}

getCategories(); 

const getProducts = async () => {
const response = await axios.get("https://dummyjson.com/products?limit=5");

    const products = response.data.products;
    console.log(products);

    const result = products.map( (ele) =>
        `  
            <div class="product">
                <img src="${ele.thumbnail}" />
                <h2>${ele.title}<h2>
            </div>
        `


    ).join('');

    document.querySelector(".products-container").innerHTML = result;

}

getProducts();