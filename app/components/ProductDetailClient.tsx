import React from 'react';
import Wrapper from './Wrapper';
import ProductDetailsCarousel from './ProductDetailsCarousel';
import RelatedProducts from './RelatedProducts';
import ProductDetailRight from './ProductDetailRight';
import { ToastContainer } from 'react-toastify';

export default function ProductDetailClient({ data }: { data: any }) {
  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper className="">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left column START */}
          <div
            className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full lg:mx-0
"
          >
            <ProductDetailsCarousel data={data} />
          </div>
          {/* left column End */}

          {/* right column start */}
          {/* <ProductDetailRight /> */}
          {/* right column end */}
          <ProductDetailRight data={data} />
        </div>

        <RelatedProducts data={data} />
      </Wrapper>
    </div>
  );
}
