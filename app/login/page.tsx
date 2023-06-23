'use client';

import React, { useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import styles from './login.module.css';
import LoginPanel from '../components/LoginPanel';
import { gql } from '@apollo/client';
import { redirect } from 'next/navigation';
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('accessToken');
  if (token) redirect('/');
}
export default function Page() {
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
