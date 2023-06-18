import { Product as ProductType } from '@/graphql/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <Card>
      <Link href={`/product/${product.id}`}>
        <Image
          src={`${product.image}`}
          alt={product.name}
          width={200}
          height={200}
        ></Image>
        <p>
          {product.name} - {product.price}USD
        </p>
      </Link>
    </Card>
  );
}
