'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useState, useEffect } from 'react';

const useFetch = (query) => {
  const { data, error } = useSuspenseQuery<Response>(query);
  console.log(data, error);
  return { data, error };
};

export default useFetch;
