import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { useAppContext } from '../../context/context';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ListItem = ({ id, name, images, price }) => {
  const image = images[0];
  const { handleIncrement } = useAppContext();
  return (
    <li>
      <Link href={`/ids/${id}`}>
        <a className='image-link'>
          <img src={image.src} alt={image.alt} />
          <div className='backdrop'>
            <p>View image</p>
          </div>
        </a>
      </Link>
      <div className='product-short-info'>
        <p>{name}</p>
        <p>
          <strong>{price}</strong> Nok
        </p>
      </div>

      <Button
        className='add-to-cart-btn'
        data-id={id}
        onClick={() => handleIncrement(id)}
      >
        <div>
          <p>Add to cart</p>
          <AiOutlineShoppingCart />
        </div>
      </Button>
    </li>
  );
};

export default ListItem;
