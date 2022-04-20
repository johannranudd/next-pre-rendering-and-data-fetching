import ListItem from './ListItem';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/context';

const List = ({ loadedData }) => {
  const { displayByCategory } = useAppContext();
  const [arrayToLoop, setArrayToLoop] = useState();

  useEffect(() => {
    if (displayByCategory === undefined) {
      setArrayToLoop(loadedData);
    } else {
      setArrayToLoop(displayByCategory);
    }
  }, [displayByCategory]);

  console.log(arrayToLoop);

  return (
    <StyledUl>
      {loadedData.map((item) => {
        return <ListItem key={item.id} {...item} />;
      })}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: grid;

  margin: 4rem 0;
  li {
    margin: auto;
    /* display: grid; */
    /* place-items: center; */
    max-width: 300px;
    img {
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export default List;
