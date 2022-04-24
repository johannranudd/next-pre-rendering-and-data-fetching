import Head from 'next/head';

import Image from 'next/image';
import { StyledDiv } from '../styles/index.styles';
import List from '../components/list/List';
import { getData } from '../utils/utils';
import CategoryButtons from '../components/ui/CategoryButtons';

const url2 = `https://www.johann.one/wp-json/wc/v3/products?consumer_key=ck_665f152a7ef7923e561fd71862902f11f72672c9&consumer_secret=cs_bce68a8f771bf9355c3c48d304d3e50e530e2ae0`;

export default function Home(props) {
  // const { loadedData } = props;

  return (
    <StyledDiv>
      <section className='section-center'>
        <h1>The Coffee Mug Store</h1>
        <CategoryButtons {...props} />
        <List {...props} />
      </section>
    </StyledDiv>
  );
}

export async function getStaticProps(context) {
  const data = await getData(url2);

  const sortById = data.sort((a, b) => {
    if (Number(a.id) > Number(b.id)) {
      return 1;
    } else {
      return -1;
    }
  });

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  return {
    props: {
      loadedData: sortById,
      revalidate: 60,
      notFound: false,
    },
  };
}
