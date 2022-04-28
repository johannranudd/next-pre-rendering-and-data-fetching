import { getData } from '../../utils/utils';
import Button from '../../components/ui/Button';
import { useAppContext } from '../../context/context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledDiv } from '../../styles/ids/productid.styles';

const url2 = `https://www.johann.one/wp-json/wc/v3/products?consumer_key=ck_665f152a7ef7923e561fd71862902f11f72672c9&consumer_secret=cs_bce68a8f771bf9355c3c48d304d3e50e530e2ae0`;
//   const url = `https://www.johann.one/wp-json/wc/v3/products/${paramId}?consumer_key=ck_665f152a7ef7923e561fd71862902f11f72672c9&consumer_secret=cs_bce68a8f771bf9355c3c48d304d3e50e530e2ae0`;

const ProductDetailPage = (props) => {
  const { handleIncrement } = useAppContext();

  const { loadedData } = props;
  const { id, name, images, dimensions, weight, categories, price } =
    loadedData;
  const image = images[0];

  const radiusNum = Number(dimensions.width / 2);
  const heightNum = Number(dimensions.height);
  const volumeCalc = Math.PI * radiusNum * radiusNum * heightNum;
  const volume = parseFloat(volumeCalc.toFixed());
  const dl = volume / 100;

  return (
    <StyledDiv>
      <section className='section-center'>
        <h2>Details</h2>
        <img src={image.src} alt={image.alt} />
        <h3>Product info</h3>
        <div className='name-and-price'>
          <h4>
            <strong>{name}</strong>
          </h4>
          <h4 className='price'>
            <strong>kr {price}</strong>
          </h4>
        </div>

        <div className='object-info'>
          <div className='dimensions'>
            <p>
              Length: <strong>{dimensions.length}cm</strong>
            </p>
            <p>
              Width: <strong>{dimensions.width}cm</strong>
            </p>
            <p>
              Height: <strong>{dimensions.height}cm</strong>
            </p>
          </div>
          <div className='other'>
            <p>
              Weight: <strong>{weight} kg</strong>
            </p>
            <p>
              Material: <strong>{categories[0].name}</strong>
            </p>
            <p>
              Volume: <strong>{dl} dl</strong>
            </p>
          </div>
        </div>
        <Button
          className='add-to-cart-btn'
          data-id={id}
          onClick={() => handleIncrement(id)}
        >
          <div className='animation-container'>
            <p>Add to cart</p>
            <div className='icon'>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </Button>
      </section>
    </StyledDiv>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productid;

  const data = await getData(url2);

  const product = data.find((product) => product.id === Number(productId));

  return {
    props: {
      loadedData: product,
      revalidate: 60,
      notFound: false,
    },
  };
}

export async function getStaticPaths(context) {
  const data = await getData(url2);
  const paths = data.map((item) => {
    return { params: { productid: item.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default ProductDetailPage;
