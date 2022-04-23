import React from 'react';
import { useAppContext } from '../../context/context';
import Button from '../../components/ui/Button';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledDiv } from '../../styles/cart-styles/cart.styles';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const Cart = () => {
  const {
    state,
    handleIncrement,
    handleDecrement,
    removeItemFromCart,
    clearCart,
  } = useAppContext();
  const { cart, total, amount } = state;

  const [ccInputValue, setccInputValue] = useState();
  const router = useRouter();

  const itemsInCart = cart.filter((item) => {
    return item.amountInCart > 0;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    router.push('../success/');
  };

  return (
    <StyledDiv>
      <section className='section-center'>
        <h1>Cart</h1>
        <ul>
          {itemsInCart.map((item) => {
            const { id, name, price, images, amountInCart } = item;
            const totalPerItems = amountInCart * price;
            return (
              <li key={id}>
                <img src={images[0].src} alt={images[0].alt} />
                <div className='product-btns-and-info-container'>
                  <div className='incr-decr-remove'>
                    <button onClick={() => handleIncrement(id)}>
                      <BsChevronUp />
                    </button>
                    <button onClick={() => handleDecrement(id)}>
                      <BsChevronDown />
                    </button>
                    <button onClick={() => removeItemFromCart(id)}>
                      remove
                    </button>
                  </div>

                  <div className='product-price-and-amount'>
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <p>
                      Items: <span>{amountInCart}</span>
                    </p>
                    <p>
                      Price: <span>{price},-</span>
                    </p>
                    <p>
                      Total: <strong>{totalPerItems},-</strong>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* totals */}

        <div className='totals'>
          <p>
            items in cart <strong>{amount}</strong>
          </p>
          <p>
            Total price <strong>{total}</strong>
          </p>
        </div>

        {/* form */}

        <form onSubmit={handleSubmit}>
          <label>Input Fake Creditcard:</label>
          <input
            name={ccInputValue}
            type='text'
            value={ccInputValue ?? ''}
            onChange={(e) => setccInputValue(e.target.value)}
          />
          <Button type='submit'>submit</Button>
        </form>
      </section>
    </StyledDiv>
  );
};

export default Cart;
