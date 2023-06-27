'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Wrapper from '../components/Wrapper';
import CartItem from '../components/CartItem';
import emptyCart from '../../public/assets/empty-cart.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import numeral from 'numeral';
import Loader from '../components/Loader';
import { loadCart } from '../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
export default function Page() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state: any) => state.cart);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch('http://localhost:4000/cart', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // 'Authorization':`Bearer ${localStorage.getItem('accessToken')}`
  //       },
  //       body: JSON.stringify({ userId: 46 }),
  //     });
  //     const data = await res.json();

  //     setLoading(false);
  //   }
  //   fetchData();
  // }, []);
  const subTotal = useMemo(() => {
    return cartItems.reduce((total: any, val: any) => total + val.price, 0);
  }, [cartItems]);
  return (
    <div className="w-full md:py-20">
      <Wrapper className="">
        {loading ? (
          <Loader />
        ) : (
          <div>
            {cartItems.length > 0 && (
              <>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                  <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Shopping Cart
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 py-10">
                  <div className="flex-[2]">
                    <div className="text-lg font-bold ">Cart Items</div>
                    {cartItems.map((item: any) => (
                      <CartItem key={item.id} data={item} />
                    ))}
                  </div>
                  <div className="flex-[1]">
                    <div className="text-lg font-bold ">Summary</div>
                    <div className="p-3 my-3 bg-black/[0.05] rounded-xl">
                      <div className="flex justify-between gap-3 flex-wrap ">
                        <div className="uppercase text-md md:text-lg font-medium text-black">
                          Subtotal
                        </div>
                        <div className="text-md md:text-lg font-medium text-black">
                          {numeral(subTotal).format('0,0')} VND
                        </div>
                      </div>
                      <div className="text-sm md:text-md py-5 border-t mt-5">
                        The subtotal reflects the total price of your order,
                        including duties and taxes, before any applicable
                        discounts. It does not include delivery costs and
                        international transaction fees.
                      </div>
                    </div>

                    <button
                      className="w-full py-3 rounded-full bg-black text-white
text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75
"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
            {cartItems.length <= 0 && (
              <>
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14 ">
                  <Image
                    src={emptyCart}
                    width={300}
                    height={300}
                    className="w-[300px] md:w-[400px]"
                    alt="empty"
                  ></Image>
                  <span className="text-xl font-bold">Your cart is empty</span>
                  <span className="text-center mt-4">
                    Looks like you have not added anything in your cart.
                    <br />
                    Go ahead and explore some of our popular products.
                  </span>
                  <Link
                    href="/"
                    className="py-3 px-8 rounded-full mt-4 bg-black text-white text-sm md:text-lg
        font-medium transition-transform active:scale-95 mb-3 hover:opacity-75
        "
                  >
                    Continue Shopping
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </Wrapper>
    </div>
  );
}
