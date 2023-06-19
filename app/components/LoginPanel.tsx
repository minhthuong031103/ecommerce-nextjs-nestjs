'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../login/form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
export default function LoginPanel() {
  const [show, setShow] = useState(false);
  return (
    <section className="w-3/4 mx-auto flex flex-col gap-10">
      <div className="">
        <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
        <p className="w-3/4 mx-auto text-gray-400">Alo xin chao cac ban</p>
      </div>
      <form className="flex flex-col gap-5 ">
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="email"
            name="email"
            placeholder="Email"
          ></input>
          <span className="icon flex items-center px-4 ">
            <HiAtSymbol size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type={`${show ? 'text' : 'password'}`}
            name="password"
            placeholder="Password"
          ></input>
          <span
            onClick={() => setShow(!show)}
            className="icon flex items-center px-4 "
          >
            <HiFingerPrint size={25} />
          </span>
        </div>

        <div className="input-button">
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
        <div className="input-button">
          <button className={styles.button_custom} type="button">
            Sign in with Google{' '}
            <Image
              alt="google"
              src="/assets/google.svg"
              width={20}
              height={20}
            />
          </button>
        </div>
      </form>

      <p className="text-center text-gray-400 ">
        Dont have account yet? {''}
        <Link className="text-blue-700" href={'/register'}>
          Sign up
        </Link>
      </p>
    </section>
  );
}
