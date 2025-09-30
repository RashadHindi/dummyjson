const getProduct = async () => {

  const params = new URLSearchParams(location.search);

  const productId = params.get("prodId");

  const response = await axios.get(`https://dummyjson.com/products/${productId}`);

  const product = response.data;
  document.querySelector(".product").innerHTML = `
    <h2>${product.title}</h2>
    <span>price : ${product.price}</span>
  `;

  const result = product.reviews.map((ele) => `
  <div class='review'>
    <h3>name : ${ele.reviewerName}</h3>
    <p>${ele.comment}</p>
  </div>
`).join('');

document.querySelector(".reviews").innerHTML += result;

};

getProduct();
