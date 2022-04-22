import React from 'react';
import Link from 'next/link';
import { StyledNav } from '../../styles/navnar.styles/navbar.styles';
import { useAppContext } from '../../context/context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from '../ui/Button';

const Navbar = () => {
  const { state } = useAppContext();
  return (
    <StyledNav>
      <section className='section-center'>
        <div>
          <Link href={`/`}>
            <h2>Logo</h2>
          </Link>
        </div>
        <div>
          <Link href={`/cart`}>
            <Button>
              <span>{state.amount}</span>
              <AiOutlineShoppingCart />
            </Button>
          </Link>
        </div>
      </section>
    </StyledNav>
  );
};

export default Navbar;
