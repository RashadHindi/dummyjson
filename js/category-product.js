const getProducts = async () => {
    const response = await axios.get(`https://dummyjson.com/products`);

    const products = response.data.products;

    const result = products.map((ele) =>
        `
        <div class='product'>
            <img src="${ele.thumbnail}"/>
            <h2>${ele.title}</h2>
            <a href='product_details.html'>details</a>
        </div>
        `
    ).join('');

    document.querySelector(".products-container").innerHTML = result;
}

getProducts();
