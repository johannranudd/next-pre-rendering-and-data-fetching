import { getData } from '../../utils/utils';
import Button from '../../components/ui/Button';
import { useAppContext } from '../../context/context';

const url2 = `https://www.johann.one/wp-json/wc/v3/products?consumer_key=ck_665f152a7ef7923e561fd71862902f11f72672c9&consumer_secret=cs_bce68a8f771bf9355c3c48d304d3e50e530e2ae0`;
//   const url = `https://www.johann.one/wp-json/wc/v3/products/${paramId}?consumer_key=ck_665f152a7ef7923e561fd71862902f11f72672c9&consumer_secret=cs_bce68a8f771bf9355c3c48d304d3e50e530e2ae0`;

const ProductDetailPage = (props) => {
  const { handleClick } = useAppContext();

  const { loadedData } = props;
  const { id, name, images, categories, price } = loadedData;
  const image = images[0];

  return (
    <div>
      <section className='section-center'>
        <img src={image.src} alt={image.alt} />
        <p>{name}</p>
        <p>{categories[0].slug}</p>
        <p>{categories[0].slug}</p>
        <Button onClick={handleClick}>Add to Cart</Button>
      </section>
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productid;

  const data = await getData(url2);

  const product = data.find((product) => product.id === Number(productId));
  // console.log('PRODUCT:', product);
  //   console.log('data:', data);
  // console.log('parameters', params);
  // console.log('parID', productId);

  return {
    props: {
      loadedData: product,
      revalidate: 5,
      notFound: false,
    },
  };
}

export async function getStaticPaths(context) {
  const data = await getData(url2);
  // const itemId = data.map((item) => {
  //   return item.id;
  // });
  const paths = data.map((item) => {
    return { params: { productid: item.id.toString() } };
    // return { params: { ids: { productid: item.id.toString() } } };
  });

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export default ProductDetailPage;