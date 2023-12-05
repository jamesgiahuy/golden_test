import React from "react";
import ProductItem from "../ProductItem";
import shoes from "../../shoedata";

const ProductList = ({ onAddToCart, cartItems }) => {
  const handleAddToCartClick = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="product-card-container">
      <div className="product-logo">
        <img src="/image/nike.png" alt="#" />
      </div>
      <div className="product-title">Our Products</div>
      <div className="product-body">
        <div>
          {shoes.map((product) => (
            <ProductItem
              key={product.id}
              data={product}
              color={product.color}
              onAddToCart={handleAddToCartClick}
              isInCart={cartItems.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
