
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDecrease = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      alert("Thank you for shopping at Paradise Nursery!");
    }
  };

  return (
    <div className="shopping-cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button
            className="continue-shopping-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item-card" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">
                    Price: ${item.price}
                  </p>

                  <div className="quantity-controls">
                    <button
                      className="decrease-button"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>

                    <span className="item-quantity">
                      {item.quantity}
                    </span>

                    <button
                      className="increase-button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <p className="item-subtotal">
                    Subtotal: ${item.price * item.quantity}
                  </p>

                  <button
                    className="remove-item-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="cart-total">Total: ${total}</h2>

          <div className="cart-actions">
            <button
              className="checkout-button"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <button
              className="continue-shopping-button"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
