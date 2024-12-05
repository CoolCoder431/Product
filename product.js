const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
        console.log(product);
      const productDetails = document.getElementById('product-details');
      productDetails.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" style="max-width: 300px; border-radius: 10px;" />
      <h1>${product.title}</h1>
        <p>Price: $${product.price}</p><br>
        <p>Brand : ${product.brand}</p><br>
        <p>Description:${product.description}</p><br>
        <p>Category:${product.category}</p><br>
        <p>Rating:${product.rating}</p><br>
        <p>tags : ${product.tags}</p><br>
        <a href="index.html" style="text-decoration: none; color: grey;">Go Back</a>
      `;
    })
    .catch((error) => {
      console.error('Error fetching product:', error);
      document.getElementById('product-details').innerHTML =
        '<p>Error fetching product details. Please try again later.</p>';
    });
} else {
  document.getElementById('product-details').innerHTML =
    '<p>No product ID found in the URL.</p>';
}
