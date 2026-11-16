import { useState } from "react";
import "./App.css";

function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 30000 },
    { id: 2, name: "Phone", category: "Electronics", price: 15000 },
    { id: 3, name: "Notebook", category: "Stationery", price: 100 },
    { id: 4, name: "Headphones", category: "Accessories", price: 1200 }
  ]);

  return (
    <div className="product-card">
      <h2>Product List</h2>
      <p className="subtitle">Available Products</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price (Rs.)</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;