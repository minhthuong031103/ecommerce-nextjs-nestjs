'use client';

import React from 'react';
import RegisterPanel from './RegisterPanel';
import styles from '../login/login.module.css';
export default function page() {
  return (
    <div className="flex ">
      <div
        className="m-auto bg-slate-50 rounded-md w-full grid lg:grid-cols-2 
  "
      >
        <div className={styles.imgStyle1}>
          <div className={styles.cartoonImg1}></div>
        </div>
        <div className="right flex flex-col justify-evenly ">
          <div className="py-10">
            <RegisterPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
