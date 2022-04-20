import React from 'react';
import { useAppContext } from '../../context/context';
import Button from '../../components/ui/Button';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    // e.preventDefault();
    clearCart();
    // console.log('hanldesubmit');
    router.push('../success/');
  };

  return (
    <div>
      <section className='section-center'>
        <ul>
          {itemsInCart.map((item) => {
            const { id, name, price, images, amountInCart } = item;
            const totalPerItems = amountInCart * price;
            return (
              <li key={id}>
                <img src={images[0].src} alt={images[0].alt} />
                <p>{name}</p>
                <p>{price} kr</p>
                <p>{amountInCart} items of this kind</p>
                <p>{totalPerItems} for all items of this kind</p>
                <div className='incr-decr-remove'>
                  <Button onClick={() => handleIncrement(id)}>incr</Button>
                  <Button onClick={() => handleDecrement(id)}>decr</Button>
                  <Button onClick={() => removeItemFromCart(id)}>remove</Button>
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
    </div>
  );
};

export default Cart;
