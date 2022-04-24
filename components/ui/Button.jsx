import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../../styles/app.styles';

const StyledA = styled.a``;

const StyledButton = styled.button`
  border: 1px solid black;
  background: transparent;
  overflow: hidden;
  height: 30px;
  border: 2px solid ${colors.clrOrange};
  transform: scale(1);
  box-shadow: ${colors.boxShadowBtns};
  transition: 0.2s;

  :active {
    transform: scale(0.9);
  }

  .animation-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    transform: translateY(-52%);

    transition: 0.3s;
    :hover {
      transform: translateY(0);
    }
    p {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      height: 30px;
      padding: 0 1rem;
    }
    .icon {
      height: 30px;
      font-size: 1.3rem;
      background: ${colors.clrOrange};
      color: ${colors.white};
      width: 100%;
    }
  }
`;

// border: 2px solid ${colors.clrOrange};
//         transition: 0.2s;
//         transform: scale(1);
//         box-shadow: ${colors.boxShadowBtns};
const Button = (props) => {
  // if (props.link) {
  //   return (
  //     <Link href={props.link}>
  //       <StyledA>{props.children}</StyledA>
  //     </Link>
  //   );
  // }
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
