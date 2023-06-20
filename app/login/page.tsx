'use client';

import React from 'react';
import Wrapper from '../components/Wrapper';
import styles from './login.module.css';
import LoginPanel from '../components/LoginPanel';
import { gql } from '@apollo/client';

export default function page() {
  return (
    <div className="flex">
      <div
        className="m-auto bg-slate-50 rounded-md w-full grid lg:grid-cols-2 
  "
      >
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="right flex flex-col justify-evenly ">
          <div className=" py-10">
            <LoginPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
