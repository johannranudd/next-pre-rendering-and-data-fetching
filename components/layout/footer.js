import styled from 'styled-components';
import { colors } from '../../styles/app.styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        This website is a school project and is for demonstration purposes only
      </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  padding: 2rem;
  border-top: 1px solid ${colors.lightGrey};

  text-align: center;
`;

// rgba(0, 0, 0, 0.153);
