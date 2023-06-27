import React from 'react';
import Header from './Header';
import axios from 'axios';

export default async function HeaderWrap() {
  var data;
  await axios
    .get(
      'https://ecommerce-nestjs-backend-production-5fc3.up.railway.app/product/category'
    )
    .then((res) => {
      data = res.data;
    });
  return <Header data={data} />;
}
