import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const ListItem = ({ id, name, images, price }) => {
  const image = images[0];

  return (
    <li>
      <Link href={`/ids/${id}`}>
        <img src={image.src} alt={image.alt} />
      </Link>
      <p>{name}</p>
      <p>{price}</p>
      <Button>Add to Cart</Button>
    </li>
  );
};

export default ListItem;
