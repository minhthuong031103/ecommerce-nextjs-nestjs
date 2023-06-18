'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import banner1 from '../../public/assets/slide-1.png';
import banner2 from '../../public/assets/slide-2.png';
import banner3 from '../../public/assets/slide-3.png';
import { BiArrowBack } from 'react-icons/bi';
export default function HeroBanner() {
  return (
    <div
      className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto
  
  "
    >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px]
                h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer
                hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px]
                  h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer
                  hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <Image
            priority
            quality={100}
            src={banner1}
            className="aspect-[16/10] md:aspect-auto object-cover"
            alt="banner1"
          ></Image>
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px]
bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
text-[15px] md:text-[30px] uppercase font-semibold cursor-pointer hover:opacity-90
"
          >
            Shop Now
          </div>
        </div>
        <div>
          <Image
            quality={100}
            priority
            src={banner2}
            className="aspect-[16/10] md:aspect-auto object-cover"
            alt="banner1"
          ></Image>
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px]
bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
text-[15px] md:text-[30px] uppercase font-semibold cursor-pointer hover:opacity-90
"
          >
            Shop Now
          </div>
        </div>
        <div>
          <Image
            quality={100}
            priority
            src={banner3}
            className="aspect-[16/10] md:aspect-auto object-cover"
            alt="banner1"
          ></Image>
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px]
bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
text-[15px] md:text-[30px] uppercase font-semibold cursor-pointer hover:opacity-90
"
          >
            Shop Now
          </div>
        </div>
      </Carousel>
    </div>
  );
}
