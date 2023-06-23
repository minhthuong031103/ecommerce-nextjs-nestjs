import React from 'react';
import Header from './Header';
import axios from 'axios';

export default async function HeaderWrap() {
  var data;
  await axios
    .get('https://shoe-store-le7s.onrender.com/product/category')
    .then((res) => {
      data = res.data;
    });
  return <Header data={data} />;
}
