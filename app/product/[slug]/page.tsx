import ProductDetailRight from '@/app/components/ProductDetailRight';
import ProductDetailsCarousel from '@/app/components/ProductDetailsCarousel';
import RelatedProducts from '@/app/components/RelatedProducts';
import Wrapper from '@/app/components/Wrapper';
import React from 'react';

export default function ProductDetails() {
  return (
    <div className="w-full md:py-20">
      <Wrapper className="">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left column START */}
          <div
            className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0
"
          >
            <ProductDetailsCarousel />
          </div>
          {/* left column End */}

          {/* right column start */}
          <ProductDetailRight />
          {/* right column end */}
        </div>

        <RelatedProducts />
      </Wrapper>
    </div>
  );
}
