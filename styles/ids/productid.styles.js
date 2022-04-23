import styled from 'styled-components';
import { colors } from '../app.styles';

export const StyledDiv = styled.div`
  section {
    max-width: 500px;
    img {
      margin-bottom: 1rem;
    }
    h3 {
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    .name-and-price {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.153);
      margin-bottom: 1rem;
      .price {
        color: ${colors.clrOrange};
      }
    }

    .object-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      p {
        line-height: 1.8rem;
      }
      .dimensions {
        p {
          display: flex;
          justify-content: space-between;
          width: 100px;
        }
      }
      .other {
        p {
          display: flex;
          justify-content: space-between;
          width: 140px;
        }
      }
    }

    button {
      width: 100%;
    }

    /* button */
    /* button {
      display: flex;
      width: 100%;
      a {
        position: relative;
        display: inline-block;
        overflow: hidden;
        height: 30px;
        width: 100%;
        border: 2px solid ${colors.clrOrange};
        transition: 0.2s;
        transform: scale(1);
        box-shadow: ${colors.boxShadowBtns};

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
          transform: translateY(-40px);
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
    } */
  }
`;
