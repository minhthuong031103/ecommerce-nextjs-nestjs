import React from 'react';
import Wrapper from '../components/Wrapper';
import styles from './login.module.css';
import LoginPanel from '../components/LoginPanel';
export default function page() {
  return (
    <div className="h-screen">
      <div
        className="m-auto bg-slate-50 rounded-md w-3/5
  h-3/4 grid lg:grid-cols-2 
  "
      >
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="right flex flex-col justify-evenly ">
          <div className="text-center py-10">
            <LoginPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
