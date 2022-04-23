import styled from 'styled-components';
import { device } from '../app.styles';

export const StyledDiv = styled.div`
  section {
    h1 {
      padding: 3rem 0;
    }
    ul {
      display: grid;
      grid-gap: 2rem;
      place-items: center;
      max-width: 700px;
      margin: auto;
      li {
        display: grid;
        grid-gap: 1rem;
        img {
          max-width: 300px;
        }
        .product-btns-and-info-container {
          display: flex;
          justify-content: space-between;
          height: 8rem;
          /* display: grid; */
          /* grid-template-columns: repeat(2, 1fr); */
          .incr-decr-remove {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            //!dfrgdr
            /* display: grid;
            grid-template-rows: repeat(3, 1fr);
            button:nth-child(1) {
              align-self: start;
            }
            button:nth-child(3) {
              align-self: end;
            } */
            //!dfrgdr
          }
          .product-price-and-amount {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            p {
              display: flex;
              justify-content: space-between;
              strong {
              }
            }
          }
        }
      }
    }
  }

  /* MEDIA */

  @media ${device.tablet} {
    section {
      ul {
        li {
          /* place-items: center; */
          align-items: end;
          grid-template-columns: 46% 54%;
          width: 100%;
          grid-gap: 0;
          img {
            place-self: center;
            max-width: 180px;
          }
          .product-btns-and-info-container {
            /* width: 70%; */
            .incr-decr-remove {
              button {
              }
            }
            .product-price-and-amount {
              p {
                strong {
                }
              }
            }
          }
        }
      }
    }
  }
`;

//   @media ${device.tablet} {
//     section {
//       ul {
//         li {
//           grid-template-columns: repeat(2, 1fr);
//           justify-items: center;
//           align-items: end;
//           img {
//             max-width: 180px;
//           }
//           .product-btns-and-info-container {
//             /* grid-template-columns: repeat(30%, 70%); */
//             display: grid;
//             grid-template-columns: 30% 70%;
//             grid-gap: 2rem;
//             align-items: end;
//             .incr-decr-remove {
//               button {
//                 margin-top: 1rem;
//               }
//             }
//             .product-price-and-amount {
//               p {
//                 strong {
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
