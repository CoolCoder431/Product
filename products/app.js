const Container = document.querySelector('.container');

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    render(data.products);
  })
  .catch((error) => console.error('Error fetching products:', error));

function render(products) {
  Container.innerHTML = ''; // Clear existing content
  products.forEach((product) => {
    const card = document.createElement('a');
    card.classList.add('card');
    card.href = `product.html?id=${product.id}`; // Use 'id' to pass product details
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" />
      <div class="card-text">
        <h3 class="card-title">${product.title}</h3>
        <p><b>Price: </b>$${product.price}</p>
        <p><b>Category: </b>${product.category}</p>
        <p><b>Rating: </b>${product.rating}</p>
      </div>
    `;
    Container.appendChild(card); // Append the card to the container
  });
}
