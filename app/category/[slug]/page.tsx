import Loader from '@/app/components/Loader';
import ProductCard from '@/app/components/ProductCard';
import Wrapper from '@/app/components/Wrapper';
import axios from 'axios';
import React from 'react';

export default async function page() {
  const res = await fetch(
    'https://shoe-store-le7s.onrender.com/product/category/1',
    {
      next: { revalidate: 60 },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  let data = await res.json();
  if (!data) return <Loader />;
  return (
    <div className="w-full md:py-20">
      <Wrapper className="">
        <div
          className="text-center max-w-[800px] mx-auto mt-8 md:mt-0
        
        "
        >
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {data.name}
          </div>
        </div>
        {/* Product grid start */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
        my-14 md:px-0
        "
        >
          {' '}
          {data.Product.map((product) => (
            <ProductCard key={product?.slug} data={product} />
          ))}
        </div>
        {/* 
        Product grid end */}
      </Wrapper>
    </div>
  );
}
