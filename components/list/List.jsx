import ListItem from './ListItem';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/context';
import { colors } from '../../styles/app.styles';

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

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem;
  margin-bottom: 3rem;
  li {
    margin: auto;
    .image-link {
      position: relative;
      display: grid;
      img {
        max-width: 300px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
      padding: 1rem 0;
    }
    button {
      display: flex;
      a {
        position: relative;
        display: inline-block;
        overflow: hidden;
        height: 30px;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: 2px solid ${colors.clrOrange};
        transition: 0.2s;
        transform: scale(1);
        :active {
          transform: scale(0.9);
        }
        div {
          transition: 0.3s;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          background: transparent;
          width: 100%;
          transform: translateY(-37px);
          :hover {
            transform: translateY(0px);
          }
          p {
            padding: 0.2rem 2rem 0.3rem;
            margin-top: 10px;
            width: 100%;
            height: 30px;
          }
          svg {
            padding: 0.2rem 2rem 0.3rem;
            font-size: 1.2rem;
            background: ${colors.clrOrange};
            width: 100%;
            height: 30px;
            color: white;
          }
        }
      }
    }
  }

  //   @media (min-width: 768px) {
  //     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  //   }
`;

export default List;
