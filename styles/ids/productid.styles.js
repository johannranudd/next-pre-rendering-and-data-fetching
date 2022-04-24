import styled from 'styled-components';
import { colors, device } from '../app.styles';

export const StyledDiv = styled.div`
  .section-center {
    max-width: 400px;
    padding-bottom: 7rem;
    h2 {
      margin-bottom: 2rem;
    }
    img {
      margin-bottom: 1rem;
      box-shadow: ${colors.boxShadowImg};
    }
    h3 {
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
    .name-and-price {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${colors.lightGrey};
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
  }

  @media ${device.mobileM} {
    .section-center {
      width: 90%;
      p {
        font-size: 1rem;
      }
    }
  }
`;
