import styled from 'styled-components';

export const StyledDiv = styled.div`
  h1 {
    padding: 2rem 0;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
    margin-bottom: 3rem;
    li {
      margin: auto;
      img {
        max-width: 300px;
      }
    }
  }
  .category-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    grid-gap: 0.5rem;
    max-width: 300px;
    margin: auto;
    margin-bottom: 2rem;
    button {
      width: 100%;
      background: transparent;
      border: 1px solid black;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
    }
  }
`;
