import React from 'react';
import Button from './Button';
import { useAppContext } from '../../context/context';
import styled from 'styled-components';
import { colors } from '../../styles/app.styles';

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
    <StyledUl className='category-list'>
      {categories.map((category, index) => {
        return (
          <button onClick={() => handleSortByCategory(category)} key={index}>
            {category}
          </button>
        );
      })}
    </StyledUl>
  );
};

export default CategoryButtons;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-gap: 0.5rem;
  max-width: 300px;
  margin: auto;
  margin-bottom: 2rem;
  button {
    transition: 0.3s;
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1px solid ${colors.black};
    padding: 0.25rem 0.5rem;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
        inset 10rem 0rem 1rem ${colors.clrOrange};
      color: ${colors.white};
      border: 1px solid ${colors.clrOrange};
    }
  }
  /* @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  } */
`;
