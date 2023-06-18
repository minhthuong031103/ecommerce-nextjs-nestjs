// import { getProductById } from '@/graphql/getProdcutById.query';

// import { getClient } from '@/lib/client';

// export default async function ProductDetailPage({ params }: { params: any }) {
//   const client = getClient();
//   const { data } = await client.query({
//     query: getProductById,
//     variables: { id: Number(params.id) },
//   });
//   const product = data.product;
//   return <div>{params.id}</div>;
// }
