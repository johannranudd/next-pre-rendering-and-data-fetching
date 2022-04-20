import React from 'react';
import Button from './Button';
import { useAppContext } from '../../context/context';
import styled from 'styled-components';

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
    <ul className='category-list'>
      {categories.map((category, index) => {
        return (
          <button onClick={() => handleSortByCategory(category)} key={index}>
            {category}
          </button>
        );
      })}
    </ul>
  );
};

export default CategoryButtons;

const StyledUl = styled.ul`
  /* max-width: 500px;
  margin: auto;
  background: #def;
  display: flex;
  li {
    width: 20px;
    button {
    }
  } */
  /* @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  } */
`;
