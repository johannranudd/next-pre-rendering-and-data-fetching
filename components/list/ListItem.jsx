import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { useAppContext } from '../../context/context';

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
      <p>{name}</p>
      <p>{price}</p>
      <Button data-id={id} onClick={() => handleIncrement(id)}>
        Add to Cart
      </Button>
    </li>
  );
};

export default ListItem;
