import styled from 'styled-components';
import { colors } from '../app.styles';

export const StyledDiv = styled.div`
  background: #def;

  section {
    max-width: 500px;
    img {
      /* max-width: 500px; */
      margin-bottom: 1rem;
    }
    h2 {
      margin-bottom: 1rem;
    }
    .product-info {
      p {
      }
    }
    button {
      display: flex;
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
            /* font-family: Arial, Helvetica, sans-serif */
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
`;

// display: flex;
//       a {
//         position: relative;
//         display: inline-block;
//         overflow: hidden;
//         height: 30px;
//         width: 100%;
//         border: 2px solid ${colors.clrOrange};
//         transition: 0.2s;
//         transform: scale(1);
//         box-shadow: ${colors.boxShadowBtns};

//         :active {
//           transform: scale(0.9);
//         }
//         div {
//           transition: 0.3s;
//           display: flex;
//           flex-direction: column-reverse;
//           align-items: center;
//           background: transparent;
//           width: 100%;
//           transform: translateY(-40px);
//           :hover {
//             transform: translateY(0px);
//           }
//           p {
//             /* font-family: Arial, Helvetica, sans-serif */
//             padding: 0.2rem 2rem 0.3rem;
//             margin-top: 10px;
//             width: 100%;
//             height: 30px;
//           }
//           svg {
//             padding: 0.2rem 2rem 0.3rem;
//             font-size: 1.2rem;
//             background: ${colors.clrOrange};
//             width: 100%;
//             height: 30px;
//             color: white;
//           }
//         }
//       }
