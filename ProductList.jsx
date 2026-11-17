import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor" },
  { id: 4, name: "Spider Plant", price: 12, category: "Indoor" },
  { id: 5, name: "Cactus", price: 8, category: "Succulent" },
  { id: 6, name: "Rose Plant", price: 18, category: "Outdoor" }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Our Plants</h1>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>

            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
