'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

import pic1 from '../../public/assets/p1.png';
import pic2 from '../../public/assets/p2.png';
import pic3 from '../../public/assets/p3.png';
import pic4 from '../../public/assets/p4.png';
import pic5 from '../../public/assets/p5.png';
import pic6 from '../../public/assets/p6.png';
import pic7 from '../../public/assets/p7.png';
import Image from 'next/image';
export default function ProductDetailsCarousel() {
  return (
    <div
      className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]
    "
    >
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img
          src="https://res.cloudinary.com/dci8dhaps/image/upload/v1687101450/shoe/p1_beib5g.png"
          alt="banner1"
        ></img>
        <img
          src="https://res.cloudinary.com/dci8dhaps/image/upload/v1687101450/shoe/p1_beib5g.png"
          alt="banner1"
        ></img>
        {/* <img src={pic2} alt="banner1"></img>

        <img src={pic3} alt="banner1"></img>

        <img src={pic3} alt="banner1"></img>

        <img src={pic4} alt="banner1"></img>

        <img src={pic5} alt="banner1"></img>

        <img src={pic6} alt="banner1"></img>

        <img src={pic7} alt="banner1"></img> */}
      </Carousel>
    </div>
  );
}
