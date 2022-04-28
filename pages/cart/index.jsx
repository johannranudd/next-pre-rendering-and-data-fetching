import React from 'react';
import { useAppContext } from '../../context/context';
import Button from '../../components/ui/Button';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledDiv } from '../../styles/cart-styles/cart.styles';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { BiChevronsRight } from 'react-icons/bi';

const Cart = () => {
  const {
    state,
    handleIncrement,
    handleDecrement,
    removeItemFromCart,
    clearCart,
  } = useAppContext();
  const { cart, total, amount } = state;

  const inputRef = useRef();
  const [ccInputValue, setccInputValue] = useState();
  const [inputAlert, setInputAlert] = useState(false);
  const router = useRouter();

  const itemsInCart = cart.filter((item) => {
    return item.amountInCart > 0;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(ccInputValue) && ccInputValue.length === 4) {
      clearCart();
      router.push('../success/');
    } else {
      setInputAlert(true);
    }
    setccInputValue('');
    inputRef.current.focus();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [inputAlert]);

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
                      <FaChevronUp />
                    </button>
                    <button onClick={() => handleDecrement(id)}>
                      <FaChevronDown />
                    </button>
                    <button onClick={() => removeItemFromCart(id)}>
                      <span>Remove</span>
                    </button>
                  </div>

                  <div className='product-price-and-amount'>
                    <h4>{name}</h4>
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
            items in cart: <strong>{amount}</strong>
          </p>
          <p>
            Total price: <strong>{total} kr</strong>
          </p>
        </div>

        {/* form */}

        <form onSubmit={handleSubmit}>
          <label>Fake card number (4 digits)</label>
          <p className='inputAlert'>
            {inputAlert && 'Fake credit card number must be four digits'}
          </p>
          <div className='input-and-button'>
            <input
              ref={inputRef}
              name={ccInputValue}
              type='text'
              value={ccInputValue ?? ''}
              placeholder='1234'
              onChange={(e) => setccInputValue(e.target.value)}
            />
            <Button type='submit' className='add-to-cart-btn'>
              <div className='animation-container'>
                <p>Pay Now</p>
                <div className='icon'>
                  <BiChevronsRight />
                </div>
              </div>
            </Button>
          </div>
        </form>
      </section>
    </StyledDiv>
  );
};

export default Cart;
