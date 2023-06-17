import { gql } from 'graphql-tag';

export const CreateCheckoutSession = gql`
  mutation CreateCheckoutSession($items: [CreateSessionInput!]!) {
    createCheckoutSession(items: $items) {
      url
    }
  }
`;
