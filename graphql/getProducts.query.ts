import { gql } from 'graphql-tag';

export const getProducts = gql`
  query GetAllProducts {
    products {
      id
      name
      price
      description
      image
      quantity
      createdAt
      updatedAt
    }
  }
`;
