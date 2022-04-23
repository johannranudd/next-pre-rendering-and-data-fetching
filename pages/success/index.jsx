import styled from 'styled-components';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <StyledDiv>
      <h1>Success!</h1>
      <div>
        <p>Thank you for your purchase</p>
        <Link href={`/`}>Continue shopping</Link>
      </div>
    </StyledDiv>
  );
};

export default SuccessPage;

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  div {
    text-align: center;
    a {
      text-decoration: underline;
    }
  }
`;
