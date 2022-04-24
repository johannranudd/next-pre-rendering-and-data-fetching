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
    <StyledDiv className='category-list'>
      <h4>Categories</h4>
      <ul>
        {categories.map((category, index) => {
          return (
            <button onClick={() => handleSortByCategory(category)} key={index}>
              {category}
            </button>
          );
        })}
      </ul>
    </StyledDiv>
  );
};

export default CategoryButtons;

const StyledDiv = styled.div`
  h4 {
    text-align: center;
    margin-bottom: 1rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    grid-gap: 1rem;
    max-width: 300px;
    margin: auto;
    margin-bottom: 4rem;
    button {
      transition: 0.3s;
      background: transparent;
      box-shadow: ${colors.boxShadowBtns};
      border: 2px solid ${colors.black};
      padding: 0.35rem 0.5rem;
      border-radius: 5px;
      text-transform: capitalize;
      :hover {
        box-shadow: ${colors.boxShadowBtns},
          inset 10rem 0rem 1rem ${colors.clrOrange};
        color: ${colors.white};
        border: 2px solid ${colors.clrOrange};
      }
    }
  }

  /* @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  } */
`;
