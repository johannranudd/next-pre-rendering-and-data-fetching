import Navbar from './navbar';
import { GlobalStyle } from '../../styles/app.styles';
const Layout = (props) => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
