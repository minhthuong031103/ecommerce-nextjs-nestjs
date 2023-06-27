import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import productImage from '../../public/assets/product-1.webp';
import { getDiscountedPricePercentage } from '../utils/helper';
import numeral from 'numeral';
export default function ProductCard({ data }: { data: any }) {
  return (
    <Link
      className="transform overflow-hidden bg-white duration-200 
    hover:scale-105 cursor-pointer
    "
      href={`/product/${data.slug}`}
    >
      <Image
        width={700}
        height={700}
        src={data.image}
        priority
        quality={100}
        alt="product image"
      ></Image>
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{data.name}</h2>
        <div className="flex flex-wrap items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold ">
            {numeral(data.price).format('0,0')} VND
          </p>
          {data.original_price && (
            <p className="text-base font-medium line-through ">
              {numeral(data.original_price).format('0,0')} VND
            </p>
          )}
        </div>
        {data.original_price && (
          <p className="ml-auto text-base font-medium text-green-500">
            {' '}
            {getDiscountedPricePercentage(data.original_price, data.price)}% off
          </p>
        )}
      </div>
    </Link>
  );
}
