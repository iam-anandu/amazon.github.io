import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image_URL, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket=>>>", basket);
  const addToBasket = () => {
    // Dispatch the item into the Data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image_URL: image_URL,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image_URL} alt="lean-startup" />
      <button className="product__button" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
