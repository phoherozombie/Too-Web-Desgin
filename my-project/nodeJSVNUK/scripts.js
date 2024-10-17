async function fetchProducts() {
    const response = await fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products');
    const data = await response.json();
    displayProducts(data);
}

function displayProducts(products) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    products.forEach(product => {
        const card = `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: $${product.price}</p>
                        <p class="card-text">Description: ${product.description}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

fetchProducts();