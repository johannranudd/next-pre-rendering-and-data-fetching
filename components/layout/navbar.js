import React from 'react';
import Link from 'next/link';
import { StyledNav } from '../../styles/navnar.styles/navbar.styles';
import { useAppContext } from '../../context/context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from '../ui/Button';
import { GiCoffeeBeans } from 'react-icons/gi';

const Navbar = () => {
  const { state } = useAppContext();
  return (
    <StyledNav>
      <section className='section-center'>
        <div>
          <Link href={`/`}>
            <h2 className='logo'>
              <GiCoffeeBeans />
            </h2>
          </Link>
        </div>
        <div className='cart'>
          <Link href={`/cart`}>
            <button>
              <p>
                <span>{state.amount}</span>
              </p>
              <AiOutlineShoppingCart />
            </button>
          </Link>
        </div>
      </section>
    </StyledNav>
  );
};

export default Navbar;
