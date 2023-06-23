'use client';

import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import numeral from 'numeral';
import { updateCart } from '../redux/slice/cartSlice';
export default async function CartItem({ data }) {
  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      value: key === 'quantity' ? parseInt(e.target.value) : e.target.value,
      id: data.id,
      selectedSize: data.selectedSize,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image src={data.image} alt={data.name} width={120} height={120} />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {data.name}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {data.subtitle}
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            {numeral(data.price).format('0,0')} VND
          </div>
        </div>
        <div className="text-sm md:text-md font-medium text-black/[0.5] hidden md:block">
          {data.subtitle}
        </div>
        <div className="flex items-center flex-wrap justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1 flex-wrap">
              <div className="font-semibold">Size:</div>
              {data.selectedSize}
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, 'quantity')}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] 
          hover:text-black text-[16px] md:text-[20px] sm:mt-4
          "
          />
        </div>
      </div>
    </div>
  );
}
