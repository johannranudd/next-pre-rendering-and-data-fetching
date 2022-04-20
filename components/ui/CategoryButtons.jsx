import React from 'react';
import Button from './Button';
import { useAppContext } from '../../context/context';

const CategoryButtons = ({ loadedData }) => {
  const { handleSortByCategory } = useAppContext();
  //   console.log(loadedData);
  const categories = loadedData.reduce(
    (total, value) => {
      //   console.log(value.categories[0].slug);
      if (!total.includes(value.categories[0].slug)) {
        total.push(value.categories[0].slug);
      }
      return total;
    },
    ['all']
  );
  //   console.log(categories);
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
