'use client';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';
import styles from '../login/form.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { gql, useMutation } from '@apollo/client';
export default function RegisterPanel() {
  const query = gql`
    mutation SignUp($input: SignUpInput!) {
      signup(signUpInput: $input) {
        message
      }
    }
  `;

  const [register] = useMutation(query, {
    onCompleted(data) {
      console.log(data);
      if (data.signup.message === 'User created successfully') {
        toast.success('Đăng ký thành công');
      } else if (data.signup.message === 'User creation failed') {
        toast.error('Đăng ký thất bại, vui lòng thử lại');
      }
    },
    onError(error) {
      console.log(error);
      if (error.message === 'Phone number already exists') {
        toast.error('Số điện thoại đã tồn tại');
      }
      if (error.message === 'Email already exists') {
        toast.error('Email đã tồn tại');
      }
    },
  });

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      confirmPassword: '',
    },
    async onSubmit(values, formikHelpers) {
      if (
        values.name === '' ||
        values.email === '' ||
        values.password === '' ||
        values.confirmPassword === '' ||
        values.phone === '' ||
        values.address === ''
      ) {
        toast.error('Vui lòng điền đầy đủ thông tin');
        return;
      }
      if (/\d/.test(values.name)) {
        toast.error('Tên không hợp lệ');
        return;
      }
      if (!/^0\d{9}$/.test(values.phone)) {
        toast.error('Số điện thoại không hợp lệ');
        return;
      }
      if (values.password !== values.confirmPassword) {
        toast.error('Mật khẩu không khớp');
        return;
      }
      console.log(values);
      const { confirmPassword, ...rest } = values;
      const toastId = toast.loading('Đang đăng ký');
      await register({ variables: { input: rest } });
      toast.dismiss(toastId);
    },
  });
  return (
    <section className="text-center w-3/4 h-auto mx-auto flex flex-col gap-10">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="title">
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
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
          <span className="icon flex items-center px-4 ">
            <HiOutlineUser size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          ></input>
          <span className="icon flex items-center px-4 ">
            <AiOutlinePhone size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="text"
            name="address"
            placeholder="Address"
            onChange={formik.handleChange}
            value={formik.values.address}
          ></input>
          <span className="icon flex items-center px-4 ">
            <FaRegAddressBook size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type={`${show ? 'text' : 'password'}`}
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          ></input>
          <span
            onClick={() => setShow(!show)}
            className="icon flex items-center px-4 "
          >
            <HiFingerPrint size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type={`password`}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          ></input>
        </div>

        <div className="input-button">
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>

      <p className="text-center text-gray-400 ">
        Dont have account yet? {''}
        <Link className="text-blue-700" href={'/login'}>
          Sign in
        </Link>
      </p>
    </section>
  );
}
