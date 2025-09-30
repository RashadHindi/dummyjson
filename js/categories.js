const getCategories = async ()=>{

    const response = await axios.get("https://dummyjson.com/products/category-list"); 
    console.log(response);

    const categories = response.data; 

    const result = categories.map( (ele) =>
        `
            <div class="category">
                    <h3>${ele} <h3>
                    <a href="./category-product.html?name=${ele}"> Details </a>
            </div>
        `

    ).join('');

    document.querySelector(".categories-container").innerHTML = result; 
}

getCategories(); 