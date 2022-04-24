import styled from 'styled-components';
import { colors } from '../app.styles';

export const StyledNav = styled.nav`
  .section-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    div {
      .logo {
        cursor: pointer;
        font-size: 2rem;
      }
      button {
        font-size: 1.5rem;

        p {
          position: relative;
          top: 16px;
          left: -12px;
          display: flex;
          justify-content: center;
          align-self: center;
          min-height: 22px;
          min-width: 22px;
          padding: 3px 6px;
          border-radius: 50%;
          background: ${colors.clrOrange};
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
        }
      }
    }
  }
`;
// cart - btn;
