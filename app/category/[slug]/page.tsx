import ProductCard from '@/app/components/ProductCard';
import Wrapper from '@/app/components/Wrapper';
import React from 'react';

export default function page() {
  return (
    <div className="w-full md:py-20">
      <Wrapper className="">
        <div
          className="text-center max-w-[800px] mx-auto mt-8 md:mt-0
        
        "
        >
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running shoes
          </div>
        </div>
        {/* Product grid start */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
        my-14 px-5 md:px-0
        "
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* 
        Product grid end */}
      </Wrapper>
    </div>
  );
}
