import { getClient } from '@/lib/client';
import { getProducts } from '@/graphql/getProducts.query';

import ProductsShow from './components/ProductsShow';
export default async function Home() {
  const client = getClient();
  const { data, error, loading } = await client.query({ query: getProducts });

  return (
    <div>
      <ProductsShow data={data} />
    </div>
  );
}
