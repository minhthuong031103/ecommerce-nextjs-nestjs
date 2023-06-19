'use client';

import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsShow({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
      {products?.data?.map((product) => (
        <ProductCard key={product?.id} data={product} />
      ))}
    </div>
  );
}
