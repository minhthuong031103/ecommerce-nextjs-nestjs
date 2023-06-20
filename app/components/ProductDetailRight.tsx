'use client';

import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { getDiscountedPricePercentage } from '../utils/helper';
import ReactMarkdown from 'react-markdown';
import numeral from 'numeral';

export default function ProductDetailRight({ data }) {
  const [selectedSize, setSizeSelected] = React.useState(-1);
  return (
    <div className="flex-[1] py-3">
      {/* Product Title */}
      <div className="text-[34px] font-semibold mb-2 leading-tight">
        {data.name}
      </div>

      {/* Product Subtitle */}
      <div className="text-lg font-semibold mb-5">{data.subtitle}</div>

      {/* Product Price */}
      <div className="text-lg font-semibold ">
        {numeral(data.price).format('0,0')} VND
      </div>

      {data.original_price && (
        <div>
          <p className="text-base font-medium line-through ">
            {numeral(data.original_price).format('0,0')} VND
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            {' '}
            {getDiscountedPricePercentage(data.original_price, data.price)}% off
          </p>
        </div>
      )}
      <div className="text-md font-medium text-black/[0.5] ">{`(include taxes)`}</div>

      {/* Product size */}

      <div className="mb-10">
        {/* Heading */}
        <div className="flex justify-between mb-2">
          <div className="text-md font-semibold">Select size</div>
          <div className="text-md font-medium text-black/[0.5] cursor pointer">
            Select guide
          </div>
        </div>
        {/* Heading */}

        {/* Size start */}
        <div className="grid grid-cols-3 gap-2">
          {data.size.data.map((size, index) => (
            <div
              onClick={
                size.number > 0 ? () => setSizeSelected(size.size) : () => {}
              }
              key={index}
              className={`border-2 rounded-md text-center py-2.5 font-medium
        hover:bg-slate-300 
          cursor-pointer ${
            size.number > 0
              ? 'hover:border-black cursor-pointer'
              : 'cursor-not-allowed disabled bg-black/[0.1] opacity-50'
          } ${selectedSize === size.size ? 'border-black' : ''} `}
            >
              {size.size}
            </div>
          ))}
        </div>
        {/* Size end */}

        {/* Show error */}
        <div className="text-red-600 mt-1">Size selection is required</div>
        {/* Show error */}
      </div>

      {/* Product size */}

      <button
        className="w-full py-4 rounded-full bg-black text-white text-lg
                    font-medium transition-transform active:scale-95 mb-3 hover:opacity-75
                    "
      >
        Add to cart
      </button>
      <button
        className="w-full py-4 rounded-full border border-black
            text-lg font-medium transition-transform active:scale-95 flex items-center
            justify-center gap-2 hover:opacity-75 mb-10
                    "
      >
        Wish List
        <IoMdHeartEmpty size={20} />
      </button>

      <div>
        <div className="text-lg font-bold mb-5">Product Details</div>
        <div className="markdown text-md mb-5">
          <ReactMarkdown>{data.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
