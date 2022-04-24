import styled from 'styled-components';
import { device, colors } from '../app.styles';

export const StyledDiv = styled.div`
  section {
    h1 {
      padding: 3rem 0;
    }
    p {
      font-size: 0.9rem;
    }
    ul {
      display: grid;
      grid-gap: 4rem;
      place-items: center;
      max-width: 700px;
      margin: auto;
      margin-bottom: 3rem;
      li {
        display: grid;
        grid-gap: 1rem;
        img {
          max-width: 300px;
          box-shadow: ${colors.boxShadowImg};
        }
        .product-btns-and-info-container {
          display: flex;
          justify-content: space-between;
          height: 8rem;
          .incr-decr-remove {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            button {
              color: ${colors.blue};
              font-size: 1rem;
              transform: scale(1);
              transition: 0.2s;
              display: flex;
              justify-content: center;
              align-items: center;
              :hover {
                opacity: 0.7;
              }
              span {
                transition: 0.2s;
                :active {
                  transform: scale(0.9);
                }
              }
              svg {
                :active {
                  transform: scale(0.9);
                }
              }
            }
          }
          .product-price-and-amount {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            height: 100%;
            h4 {
              border-bottom: 1px solid ${colors.lightGrey};
              margin-bottom: 0.3rem;
              font-size: 0.9rem;
            }
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

    /* totals */

    .totals {
      max-width: 300px;
      margin: auto;
      margin-bottom: 3rem;
      p {
        line-height: 2rem;
      }
    }

    /* form */
    form {
      max-width: 300px;
      margin: auto;
      padding-bottom: 10rem;
      .inputAlert {
        background: ${colors.alertDanger};
        color: ${colors.white};
        padding: 0 0.5rem;
      }
      .input-and-button {
        display: flex;
        flex-direction: column;
        input {
          margin: 0.5rem 0;
          padding: 0.2rem;
        }
      }
    }
  }

  /* MEDIA */

  @media ${device.mobileL} {
    section {
      ul {
        li {
          .product-btns-and-info-container {
            .product-price-and-amount {
              h4 {
                font-size: 1rem;
              }
            }
          }
        }
      }

      p {
        font-size: 1rem;
      }
      form {
        .input-and-button {
          flex-direction: row;
          align-items: center;
          input {
            margin-right: 5px;
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    section {
      ul {
        li {
          align-items: end;
          grid-template-columns: 46% 54%;
          width: 100%;
          grid-gap: 0;
          img {
            place-self: center;
            max-width: 180px;
          }
          .product-btns-and-info-container {
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

      /* totals */
      .totals {
        max-width: 560px;
      }

      /* form */
      form {
        max-width: 560px;
        .inputAlert {
          max-width: 70%;
          text-align: center;
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
