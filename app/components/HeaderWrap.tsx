import React from 'react';
import Header from './Header';
import axios from 'axios';

export default async function HeaderWrap() {
  var data;
  await axios.get('http://localhost:4000/product/category').then((res) => {
    data = res.data;
  });
  return <Header data={data} />;
}
