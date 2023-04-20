import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee, VAT } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <article>
       
        <h5>
          subtotal:<span>{formatPrice(total_amount)}</span>{" "}
        </h5>
        <p>
          {" "}
          shipping:<span>{formatPrice(shipping_fee)}</span>
        </p>
        <p>
          {" "}
          VAT:<span>{formatPrice(VAT)}</span>
        </p>
        <hr />
        <h4>
          order Total:
          <span>{formatPrice(shipping_fee + total_amount + VAT)}</span> {myUser ? (
          <Link to="/Checkout" className="btn">
            proceed to Checkout
          </Link>
        ) : (
          <button type="button" className="btn" onClick={loginWithRedirect}>
            login
          </button>
        )}
        </h4>
      </article>
       
       
     
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  Wrapper,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  Wrapper {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
