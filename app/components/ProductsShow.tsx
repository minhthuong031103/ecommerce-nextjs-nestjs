'use client';

import { Row, Col } from 'react-bootstrap';
import ProductCard from './Product';
import { Product } from '@/graphql/types';
export default function ProductsShow({ data }: { data: any }) {
  return (
    <>
      <Row>
        {data?.products.map((product: Product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
