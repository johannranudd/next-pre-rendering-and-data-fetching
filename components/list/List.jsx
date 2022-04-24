import ListItem from './ListItem';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/context';
import { colors } from '../../styles/app.styles';
import { fonts } from '../../styles/app.styles';

const List = ({ loadedData }) => {
  const { displayByCategory } = useAppContext();
  const [arrayToLoop, setArrayToLoop] = useState();

  useEffect(() => {
    if (!displayByCategory) {
      setArrayToLoop(loadedData);
    } else {
      setArrayToLoop(displayByCategory);
    }
  }, [displayByCategory]);

  // console.log('a2:', arrayToLoop);

  if (arrayToLoop) {
    return (
      <StyledUl className='product-list'>
        {arrayToLoop.map((item) => {
          return <ListItem key={item.id} {...item} />;
        })}
      </StyledUl>
    );
  }
};

// **styles**

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem;
  margin-bottom: 3rem;
  /* font-family: ${fonts.nunito}; */
  li {
    margin: 0 auto;
    .image-link {
      position: relative;
      display: grid;
      img {
        max-width: 300px;
        box-shadow: ${colors.boxShadowImg};
      }
      .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.3s;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        color: white;
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        :hover {
          opacity: 1;
        }
      }
    }
    .product-short-info {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      min-height: 70px;
      width: 100%;
      .name {
        width: 70%;
      }
      .price {
        /* width: 70%; */
      }
    }
  }

  //   @media (min-width: 768px) {
  //     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  //   }
`;

export default List;
