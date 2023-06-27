'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

import Image from 'next/image';
export default function ProductDetailsCarousel({ data }: { data: any }) {
  const [images, setImages] = useState();
  console.log(data.Thumbnail[0].id);
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
        {data.Thumbnail.map((item: any) => {
          return (
            <div key={item.id}>
              <img src={item.url} alt="Picture of the author" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
