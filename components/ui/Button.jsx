import Link from 'next/link';
import styled from 'styled-components';

const StyledA = styled.a`
  border: 2px solid black;
  padding: 0.2rem 2rem 0.3rem;
  display: inline-block;
  cursor: pointer;
  :hover {
    color: #39a;
    border: 2px solid #39a;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
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
