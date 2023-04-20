import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import styled, { keyframes } from "styled-components";

function blinkingEffect() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
}
const AnimatedComponent = styled.div`
  animation: ${blinkingEffect} 1s linear infinite;
`;
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[null]);
  const [amount, setAmaount] = useState(1);

  const increase = () => {
    let newNum = amount + 1;
    if (newNum <= stock) {
      return setAmaount(newNum);
    } else {
      return stock;
    }
  };

  const decrease = () => {
    let newNum = amount - 1;
    if (newNum < 1) {
      return setAmaount(1);
    } else {
      return setAmaount(newNum);
    }
  };

  const message = "please choose color";
  return (
    <Wrapper>
      <div className="colors">
        <span>Colors:</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}{" "}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        {mainColor && (
          <Link
            to="/cart"
            className="btn"
            onClick={() => addToCart(id, mainColor, amount, product)}
          >
            add to cart
          </Link>
        )}
        {!mainColor && (
          <h5 style={{ color: "red " }}>
            <AnimatedComponent>{message}</AnimatedComponent>
          </h5>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
