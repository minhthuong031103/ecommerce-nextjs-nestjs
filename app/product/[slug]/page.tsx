import Loader from '@/app/components/Loader';
import ProductDetailClient from '@/app/components/ProductDetailClient';
import ProductDetailRight from '@/app/components/ProductDetailRight';
import ProductDetailsCarousel from '@/app/components/ProductDetailsCarousel';
import RelatedProducts from '@/app/components/RelatedProducts';
import Wrapper from '@/app/components/Wrapper';
import axios from 'axios';
import React from 'react';

export const revalidate = 10;

export default async function ProductDetails({ params }: { params: any }) {
  var data;

  await axios
    .get(
      `https://ecommerce-nestjs-backend-production-5fc3.up.railway.app/product/view/${params.slug}`
    )
    .then((res) => {
      data = res.data;
    });
  if (!data) return <Loader />;
  return <ProductDetailClient data={data} />;
}
