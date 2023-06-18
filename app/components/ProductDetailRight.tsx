'use client';

import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';

export default function ProductDetailRight() {
  return (
    <div className="flex-[1] py-3">
      {/* Product Title */}
      <div className="text-[34px] font-semibold mb-2 leading-tight">
        Jordan retro 6 G
      </div>

      {/* Product Subtitle */}
      <div className="text-lg font-semibold mb-5">Men&apos;s Golf Shoes</div>

      {/* Product Price */}
      <div className="text-lg font-semibold ">1.000.000 VND</div>
      <div className="text-md font-medium text-black/[0.5] ">include taxes</div>
      <div className="text-md font-medium text-black/[0.5] mb-20 ">
        {`(Also available in 3 installments of 333.333 VND)`}
      </div>

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
          <div
            className="border-2 rounded-md text-center py-2.5 font-medium
                   hover:bg-slate-300 
                     cursor-pointer "
          >
            UK 6
          </div>
          <div
            className="border-2 rounded-md text-center py-2.5 font-medium
                   hover:bg-slate-300 
                     cursor-pointer "
          >
            UK 6
          </div>
          <div
            className="border-2 rounded-md text-center py-2.5 font-medium
                   hover:bg-slate-300 
                     cursor-pointer "
          >
            UK 6
          </div>
          <div
            className="border-2 rounded-md text-center py-2.5 font-medium
                   hover:bg-slate-300 
                     cursor-pointer "
          >
            UK 6
          </div>
          <div
            className="border-2 rounded-md text-center py-2.5 font-medium
                   hover:bg-slate-300 
                     cursor-pointer "
          >
            UK 6
          </div>
          <div
            className="border-2 rounded-md text-center py-2.5 font-medium
                   hover:bg-slate-300 
                     cursor-pointer "
          >
            UK 6
          </div>
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
        <div className="text-md mb-5">
          You've got the hops and the speed—lace up in shoes that enhance what
          you bring to the court. The latest AJ is all about take-offs and
          landings, with multiple Air units to get you off the ground. The upper
          is made with strong, reinforced leno-weave fabric that'll keep you
          contained and leave your game uncompromised. This low-top model is
          designed for playing on outdoor courts.
        </div>
      </div>
    </div>
  );
}
