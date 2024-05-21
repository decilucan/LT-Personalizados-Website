document.addEventListener('DOMContentLoaded', function() {
    const featuredProducts = document.getElementById('featured-products');
    const searchInput = document.querySelector('#search-bar input');
    let products = [
        {name: 'Stanley Branca', price: 80, size:'750mL', imageSrc: 'Garrafas/Stanley-Branca.png'},
        {name: 'Stanley Preta', price: 80, size:'750mL', imageSrc: 'Garrafas/Stanley-Preta.png'},
        {name: 'Stanley Vermelha', price: 80, size:'750mL', imageSrc: 'Garrafas/Stanley-Vermelha.png'},
        {name: 'Stanley Rosa Claro', price: 80, size:'750mL', imageSrc: 'Garrafas/Stanley-RosaClaro.png'},
        {name: 'Stanley Azul Claro', price: 80, size:'750mL', imageSrc: 'Garrafas/Stanley-AzulClaro.png'},
        {name: 'Stanley Verde-Água', price: 80, size:'750mL', imageSrc: 'Garrafas/Stanley-VerdeAgua.png'},
        {name: 'Stanley c/ Display Branca', price: 60, size:'500mL', imageSrc: 'Garrafas/StanleyDisplay-Branca.png'},
        {name: 'Stanley c/ Display Preta', price: 60, size:'500mL', imageSrc: 'Garrafas/StanleyDisplay-Preta.png'},
        {name: 'Stanley c/ Display Vermelha', price: 60, size:'500mL', imageSrc: 'Garrafas/StanleyDisplay-Vermelha.png'},
        {name: 'Garrafa c/ Display Rosa', price: 60, size:'500mL', imageSrc: 'Garrafas/Display-Rosa.png'},
        {name: 'Garrafa c/ Display Rosa e Azul', price: 60, size:'500mL', imageSrc: 'Garrafas/Display-RosaEAzul.png'},
        {name: 'Stanley Pequena Bege', price: 60, size:'420mL', imageSrc: 'Garrafas/Stanley-Pequena-Bege.png'},
        {name: 'Stanley Pequena Verde Clara', price: 60, size:'420mL', imageSrc: 'Garrafas/Stanley-Pequena-VerdeClara.png'},
        {name: 'Stanley Pequena Roxo Claro', price: 60, size:'420mL', imageSrc: 'Garrafas/Stanley-Pequena-RoxoClaro.png'},
        // Adicione mais objetos de produtos aqui
    ];

    const renderProducts = (filteredProducts) => {
        featuredProducts.innerHTML = '';
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.imageSrc}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Preço: R$${product.price.toFixed(2)}</p>
                <p>Tamanho: ${product.size}</p>
            `;
            featuredProducts.appendChild(productItem);
        });
    };

    const filterProducts = (criteria) => {
        let filteredProducts;
        if (criteria.filter) {
            filteredProducts = products.filter(product => product.name.toLowerCase().includes(criteria.filter.toLowerCase()));
        } else if (criteria.size) {
            filteredProducts = products.filter(product => product.size === criteria.size);
        } else if (criteria.price) {
            filteredProducts = [...products].sort((a, b) => criteria.price === 'asc' ? a.price - b.price : b.price - a.price);
        } else {
            filteredProducts = products;
        }
        renderProducts(filteredProducts);
    };

    document.querySelectorAll('#navbar ul li a[data-filter]').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.getAttribute('data-filter');
            filterProducts({ filter });
        });
    });

    document.querySelectorAll('#navbar ul li ul.dropdown li a[data-size]').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const size = event.target.getAttribute('data-size');
            filterProducts({ size });
        });
    });

    document.querySelectorAll('#navbar ul li ul.dropdown li a[data-price]').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const price = event.target.getAttribute('data-price');
            filterProducts({ price });
        });
    });

    searchInput.addEventListener('input', (event) => {
        const searchText = event.target.value;
        filterProducts({ filter: searchText });
    });

    document.querySelector('#navbar ul li a[href="#"]').addEventListener('click', (event) => {
        event.preventDefault();
        renderProducts(products);
    });

    // Render all products by default
    renderProducts(products);
});