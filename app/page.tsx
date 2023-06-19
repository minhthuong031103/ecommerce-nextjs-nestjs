import { getClient } from '@/lib/client';
import { getProducts } from '@/graphql/getProducts.query';
import HeroBanner from './components/HeroBanner';
import Wrapper from './components/Wrapper';
import ProductCard from './components/ProductCard';
import axios from 'axios';

export default async function Home() {
  var data;
  // const client = getClient();
  // const { data, error, loading } = await client.query({ query: getProducts });
  await axios.get('http://localhost:4000/product/all').then((res) => {
    data = res.data;
  });
  // const res = await fetch('http://localhost:4000/product/all', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // let kk = await res.json();
  // console.log(kk);
  //Nhu nay thi duoc!
  return (
    <main>
      <HeroBanner />
      <Wrapper className="">
        {/* Heading and paragraph start */}
        <div
          className="text-center max-w-[800px] mx-auto my-[50px]
        md:my-[80px]
        "
        >
          <div
            className="text-[28px] md:text-[34px] mb-5 font-semibold
          leading-tight
          "
          >
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight and responsive foam cushioning that provides a
            supportive feel.
          </div>
        </div>
        {/* Heading and paragraph end */}

        {/* Product grid start */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
        my-14 
        "
        >
          {data &&
            data.map((product) => (
              <ProductCard key={product?.slug} data={product} />
            ))}
          {!data && <div>Loading...</div>}
        </div>
        {/* 
        Product grid end */}
      </Wrapper>
    </main>
  );
}
