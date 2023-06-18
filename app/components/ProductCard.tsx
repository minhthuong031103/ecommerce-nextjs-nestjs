import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import productImage from '../../public/assets/product-1.webp';
export default function ProductCard() {
  return (
    <Link
      className="transform overflow-hidden bg-white duration-200 
    hover:scale-105 cursor-pointer
    "
      href={'/product/1'}
    >
      <Image
        className="w-full"
        src={productImage}
        priority
        quality={100}
        alt="product image"
      ></Image>
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold ">$20.00</p>
          <p className="text-base font-medium line-through ">$25.00</p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
}