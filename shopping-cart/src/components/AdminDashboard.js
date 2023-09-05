import React, { useState, useEffect } from 'react';

function AdminDashboard() {
    // State for managing categories and products
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // Fetch categories and products from the backend on component load
    useEffect(() => {

        fetch('/api/categories')
          .then((response) => response.json())
          .then((data) => setCategories(data));



    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {/* Add category and product management UI here */}
            {/* Example: Create forms and tables for adding/editing categories and products */}
        </div>
    );
}

export default AdminDashboard;
