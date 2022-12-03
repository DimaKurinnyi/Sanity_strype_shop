import React from 'react';

import { FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

function Home({ products, bannerDate }) {
  console.log(products);
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>More tecnologis sniker in the world</p>
      </div>

      <div className="products-container">{products?.map((product) => product.name)}</div>

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
