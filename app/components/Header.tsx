'use client';

import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import Link from 'next/link';
import Menu from './Menu';

import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import MenuMobile from './MenuMobile';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
      }
    } else {
      setShow('translate-y-0');
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  });

  return (
    <header
      className={`w-full h-[50px] md:h-[80px]
  bg-white flex items-center justify-between z-20
  sticky top-0 transition-transform duration-300
  ${show}
  `}
    >
      <Wrapper className="h-[60px] md:px-5 !px-3 flex justify-between items-center">
        <Link href={'/'}>
          <Image
            alt="logo"
            width={60}
            src={logo}
            className=" xs:w-[40px] md:w-[60px]"
          ></Image>
        </Link>
        <Menu showCatMenu={showCatMenu} setShowcatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowcatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div
          className="flex items-center gap-2
        text-black
        "
        >
          {/* Icon start */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
                  items-center hover:bg-black/[0.05] cursor-pointer relative
"
          >
            <IoMdHeartEmpty className="text-[25px] md:text-[28px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] 
            md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 
            md:left-7 text-white text-[10px] md:text-[12px] 
            flex justify-center items-center px-[2px] md:px-[5px]
            "
            >
              20
            </div>
          </div>
          {/* Icon end */}
          {/* Icon start */}
          <Link href={'/cart'}>
            <div
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
                  items-center hover:bg-black/[0.05] cursor-pointer relative
"
            >
              <BsCart className="text-[23px] md:text-[25px]" />
              <div
                className="h-[14px] md:h-[18px] min-w-[14px] 
            md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 
            md:left-7 text-white text-[10px] md:text-[12px] 
            flex justify-center items-center px-[2px] md:px-[5px]
            "
              >
                5
              </div>
            </div>
          </Link>

          {/* Icon end */}

          {/* 
          Mobile Icon start */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 md:hidden rounded-full flex justify-center
                  items-center hover:bg-black/[0.05] cursor-pointer
                  -mr-2
                  relative"
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[25px]"
                onClick={() => setMobileMenu(false)}
              ></VscChromeClose>
            ) : (
              <BiMenuAltRight
                className="text-[25px]"
                onClick={() => setMobileMenu(true)}
              ></BiMenuAltRight>
            )}
          </div>
          {/* Mobile Icon end  */}
        </div>
      </Wrapper>
    </header>
  );
}
