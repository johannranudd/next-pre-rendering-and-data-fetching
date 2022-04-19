import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { useAppContext } from '../../context/context';

const ListItem = ({ id, name, images, price }) => {
  const image = images[0];
  const { handleClick } = useAppContext();
  return (
    <li>
      <Link href={`/ids/${id}`}>
        <img src={image.src} alt={image.alt} />
      </Link>
      <p>{name}</p>
      <p>{price}</p>
      <Button onClick={handleClick}>Add to Cart</Button>
    </li>
  );
};

export default ListItem;
