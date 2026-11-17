import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {!showProducts ? (
        <div className="welcome-page">
          <h1>Welcome to Paradise Nursery!</h1>
          <p>
            Bring nature into your home with our beautiful
            collection of indoor and outdoor plants.
          </p>

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
