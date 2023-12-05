import React from "react";

const ProductItem = ({ data, onAddToCart, isInCart }) => {
  const { color, description, id, image, name, price } = data;

  const handleAddToCartClick = () => {
    onAddToCart(data);
  };

  return (
    <div className="product-item">
      <div className="product-item-img" style={{ backgroundColor: color }}>
        <img src={image} alt="#" />
      </div>

      <div className="product-item-name">{name}</div>
      <div className="product-item-description">{description}</div>
      <div className="product-item-info">
        <div className="product-price">${price}</div>
        <div className="product-checked" onClick={handleAddToCartClick}>
          {isInCart ? <img src="/image/check.png" alt="" /> : "Add to cart"}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
