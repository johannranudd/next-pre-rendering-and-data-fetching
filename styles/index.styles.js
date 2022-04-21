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
      .image-link {
        position: relative;
        display: grid;
        img {
          max-width: 300px;
          /* position: absolute; */
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
      button {
        border: none;
        a {
          position: relative;
          display: inline-block;
          overflow: hidden;
          height: 30px;
          div {
            transition: 0.3s;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            background: transparent;
            width: 100%;
            padding: 0.2rem 2rem 0.3rem;
            transform: translateY(-27px);
            :hover {
              transform: translateY(0);
            }
            p {
              margin-top: 10px;
            }
            svg {
              font-size: 1.2rem;
            }
          }
          border: 2px solid black;
          /* padding: 0.2rem 2rem 0.3rem; */
        }
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
    }
  }
`;
