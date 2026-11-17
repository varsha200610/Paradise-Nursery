
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";

const categories = [
  {
    name: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
      { id: 2, name: "Peace Lily", price: 20, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
      { id: 3, name: "Monstera", price: 25, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
      { id: 4, name: "Areca Palm", price: 18, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78" },
      { id: 5, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333" },
      { id: 6, name: "ZZ Plant", price: 22, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" }
    ]
  },
  {
    name: "Succulent Plants",
    plants: [
      { id: 7, name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 8, name: "Jade Plant", price: 14, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
      { id: 9, name: "Echeveria", price: 11, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 10, name: "Haworthia", price: 13, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a" },
      { id: 11, name: "String of Pearls", price: 16, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
      { id: 12, name: "Cactus", price: 9, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" }
    ]
  },
  {
    name: "Flowering Plants",
    plants: [
      { id: 13, name: "Rose Plant", price: 18, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e" },
      { id: 14, name: "Orchid", price: 24, image: "https://images.unsplash.com/photo-1566907225472-514a3d4e9e1b" },
      { id: 15, name: "Hibiscus", price: 17, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
      { id: 16, name: "Jasmine", price: 15, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e" },
      { id: 17, name: "Marigold", price: 8, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
      { id: 18, name: "Petunia", price: 12, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState("products");

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <div className="nursery">
      <nav>
        <h2>Paradise Nursery</h2>
        <button onClick={() => setPage("products")}>
          Plants
        </button>
        <button onClick={() => setPage("cart")}>
          Shopping Cart ({cartCount})
        </button>
      </nav>

      {page === "products" ? (
        <main>
          <h1>Our Beautiful Plants</h1>

          {categories.map((category) => (
            <section key={category.name}>
              <h2>{category.name}</h2>

              <div className="product-list">
                {category.plants.map((plant) => {
                  const inCart = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div className="product-card" key={plant.id}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        width="180"
                        height="150"
                      />

                      <h3>{plant.name}</h3>
                      <p>Price: ${plant.price}</p>

                      <button
                        disabled={inCart}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {inCart ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <div>
          <button onClick={() => setPage("products")}>
            Continue Shopping
          </button>
          <CartItem />
        </div>
      )}
    </div>
  );
}

export default ProductList;
