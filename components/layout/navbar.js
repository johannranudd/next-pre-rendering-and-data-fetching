import React from 'react';
import Link from 'next/link';
import { StyledNav } from '../../styles/navnar.styles/navbar.styles';
import { useAppContext } from '../../context/context';

const Navbar = () => {
  const { state } = useAppContext();
  return (
    <StyledNav>
      <section className='section-center'>
        <div>
          <Link href={`/`}>Home</Link>
        </div>
        <div>
          <Link href={`/cart`}>
            <p>
              <span>{state.amount}</span>
              Cart
            </p>
          </Link>
        </div>
      </section>
    </StyledNav>
  );
};

export default Navbar;
