import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductScreen.css';
import Navbar from "./Navbar";

export default function ProductScreen(props) {

    const [products, setProducts] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    // setSelectedCategoryId(categoryID)
    useEffect(() => {
        fetch('http://localhost:8080/product/')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    // Function to filter products by category ID
    const filteredProducts = selectedCategoryId
        ? products.filter((product) => product.category.id === selectedCategoryId)
        : products;

    return (
        <>
            <Navbar onSelectCategory={setSelectedCategoryId} />

            <div className="product-screen-container">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        productName={product.name}
                        productDescription={product.description}
                        productPrice={product.price}
                        productCode={product.code}
                        averageRating = {product.averageRating}
                        manufacturer = {product.manufacturer}
                        stockQuantity = {product.stockQuantity}
                        imageUrl = {product.imageUrl}
                        numberOfReviews = {product.numberOfReviews}
                        dateAdded = {product.dateAdded}
                    />
                ))}
            </div>
        </>
    );
}
