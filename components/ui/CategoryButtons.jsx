import React from 'react';
import Button from './Button';
import { useAppContext } from '../../context/context';

const CategoryButtons = ({ loadedData }) => {
  const { handleSortByCategory } = useAppContext();

  const categories = loadedData.reduce(
    (total, value) => {
      if (!total.includes(value.categories[0].slug)) {
        total.push(value.categories[0].slug);
      }
      return total;
    },
    ['all']
  );

  return (
    <ul>
      {categories.map((category, index) => {
        return (
          <Button onClick={() => handleSortByCategory(category)} key={index}>
            {category}
          </Button>
        );
      })}
    </ul>
  );
};

export default CategoryButtons;
