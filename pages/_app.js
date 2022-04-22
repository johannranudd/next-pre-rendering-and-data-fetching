import Layout from '../components/layout/layout';
import { AppWrapper } from '../context/context';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
