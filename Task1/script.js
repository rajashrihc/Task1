const data = {
    "data": [
        {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        },
        {
            "name": "Household",
            "productList": [
                {
                    "name": "Laundry Detergent",
                    "price": 12
                },
                {
                    "name": "Dish Soap",
                    "price": 10
                }
            ]
        }
    ]
};

let cart = [];

function renderProducts() {
    const container = document.getElementById('app');
    container.innerHTML = '';

    data.data.forEach(categoryData => {
     
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryHeader = document.createElement('h2');
        categoryHeader.classList.add('category-header');
        categoryHeader.textContent = categoryData.name;
        categoryContainer.appendChild(categoryHeader);

      
        categoryData.productList.forEach(product => {
            const box = document.createElement('div');
            box.classList.add('product-box');

            const name = document.createElement('p');
            name.textContent = product.name;
            box.appendChild(name);

            const price = document.createElement('p');
            price.textContent = `$${product.price}`;
            box.appendChild(price);

            const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.classList.add('cart-btn');
            addToCartBtn.onclick = function() {
                cart.push(product);
                updateCart();
                console.log("Product Added to the cart.");
                console.log("List of product present in cart array:", cart);
            };
            box.appendChild(addToCartBtn);

            const removeFromCartBtn = document.createElement('button');
            removeFromCartBtn.textContent = 'Remove from Cart';
            removeFromCartBtn.classList.add('remove-btn');
            removeFromCartBtn.onclick = function() {
                const index = cart.indexOf(product);
                if (index !== -1) {
                    cart.splice(index, 1);
                    updateCart();
                    console.log("Product removed from the cart.");
                    console.log("List of product present in cart array:", cart);
                }
            };
            box.appendChild(removeFromCartBtn);

            categoryContainer.appendChild(box);
        });

        container.appendChild(categoryContainer); 
    });
}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(product => {
        const item = document.createElement('div');
        item.textContent = `${product.name} - $${product.price}`;
        cartContainer.appendChild(item);
        totalPrice += product.price;
    });

    const totalPriceElement = document.createElement('div');
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
    cartContainer.appendChild(totalPriceElement);
}


renderProducts();
