import React, { useState, useEffect } from 'react';

function UserShoppingPage() {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/product/')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (productId) => {
        const productToAdd = products.find((product) => product.id === productId);
        if (productToAdd) {
            setCart([...cart, productToAdd]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
    };

    return (
        <div>
            <h2>User Shopping Page</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} $
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>


            <h3>Shopping Cart</h3>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} $
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>

            <button>Checkout</button>
        </div>
    );
}

export default UserShoppingPage;
