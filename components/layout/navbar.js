import React from 'react';
import Link from 'next/link';
import { StyledNav } from '../../styles/navnar.styles/navbar.styles';

const Navbar = () => {
  return (
    <StyledNav>
      <section className='section-center'>
        <div>
          <Link href={`/`}>Home</Link>
        </div>
        <div>
          <Link href={`/`}>
            <p>
              <span>0</span>
              Cart
            </p>
          </Link>
        </div>
      </section>
    </StyledNav>
  );
};

export default Navbar;
