import { FooterBanner, HeroBanner, Product } from '../components';
import { client } from '../lib/client';

function Home({ products, bannerDate }) {
  return (
    <>
      <HeroBanner heroBanner={bannerDate.length && bannerDate[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>More tecnologis sniker in the world</p>
      </div>

      <div className="products-container">
        {products?.map((product) => 
          <Product key={product._id} product={product} />
        )}
      </div>

      <FooterBanner />
    </>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerDate = await client.fetch(bannerQuery);

  return {
    props: { products, bannerDate },
  };
};

export default Home;
