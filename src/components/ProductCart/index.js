import React from "react";

const ProductCart = ({
  cartItems,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
}) => {
  const getTotalPrice = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <div className="product-card-container">
      <div className="product-logo">
        <img src="/image/nike.png" alt="#" />
      </div>
      <div className="product-title">
        Your Cart <span style={{ float: "right" }}>${getTotalPrice()}</span>
      </div>
      <div className="product-body">
        {cartItems.length === 0 ? (
          <div className="cart-empty" style={{ fontSize: "14px" }}>
            Your Cart is empty
          </div>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-left">
                  <div
                    className="cart-item-img"
                    style={{ background: item.color }}
                  >
                    <div className="cart-item-image">
                      <img src={item.image} alt="#" />
                    </div>
                  </div>
                </div>
                <div className="cart-item-right">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price}</div>
                  <div className="cart-item-action">
                    <div className="cart-item-increase">
                      <div
                        className="cart-item-button"
                        onClick={() => onIncreaseQuantity(index)}
                      >
                        +
                      </div>
                      <div className="cart-item-count">{item.quantity}</div>
                      <div
                        className="cart-item-button"
                        onClick={() => onDecreaseQuantity(index)}
                      >
                        -
                      </div>
                    </div>
                    <div
                      className="cart-item-remove"
                      onClick={() => onRemoveFromCart(index)}
                    >
                      <img src="/image/trash.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
