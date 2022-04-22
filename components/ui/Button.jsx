import Link from 'next/link';
import styled from 'styled-components';

const StyledA = styled.a``;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <StyledA>{props.children}</StyledA>
      </Link>
    );
  }
  return (
    <StyledButton onClick={props.onClick}>
      <StyledA>{props.children}</StyledA>
    </StyledButton>
  );
};

export default Button;
