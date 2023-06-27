'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../login/form.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useFormik } from 'formik';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql, useMutation, useQuery } from '@apollo/client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { redirect } from 'next/navigation';
const query = gql`
  mutation SignIn($input: SignInInput!) {
    signin(signInInput: $input) {
      accessToken
      refreshToken
      user {
        id
      }
    }
  }
`;

export default function LoginPanel() {
  // const [submit, { data }] = useMutation(query, {
  //   async onCompleted(data) {
  //     console.log(data);
  //     toast.success('Đăng nhập thành công');
  //   },
  //   async onError(error) {
  //     console.log(error.message);
  //     if (error.message === 'Invalid user')
  //       toast.error('Tài khoản hoặc mật khẩu không chính xác');
  //     else toast.error('Có lỗi xảy ra, vui lòng thử lại');
  //   },
  // });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit(values, formikHelpers) {
      onSubmit(values);
    },
  });
  // async function onSubmit(values) {
  //   console.log(values);
  //   const toastId = toast.loading('Đang xử lý...');
  //   await submit({
  //     variables: {
  //       input: {
  //         email: values.email,
  //         password: values.password,
  //       },
  //     },
  //   });

  //   toast.dismiss(toastId);
  // }
  async function onSubmit(values: any) {
    console.log(values);
    const toastId = toast.loading('Đang xử lý...');
    const res = await fetch(
      'https://ecommerce-nestjs-backend-production-5fc3.up.railway.app/auth/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    );
    let data = await res.json();
    if (data.message === 'Invalid user')
      toast.error('Tài khoản hoặc mật khẩu không chính xác');
    else {
      toast.success('Đăng nhập thành công');
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    }
    console.log(data);
    toast.dismiss(toastId);
  }
  const [show, setShow] = useState(false);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <section className="w-3/4 mx-auto text-center flex flex-col gap-10">
        <div className="">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">Alo xin chao cac ban</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 ">
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
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
              onChange={formik.handleChange}
              value={formik.values.password}
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
    </>
  );
}
type Repo = {
  redirect: {
    destination: string;
    permanent: boolean;
  };
  session: {
    accessToken: string;
    refreshToken: string;
  };
};
