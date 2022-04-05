// Any file inside the folder pages/api is mapped to /api/* and
// will be treated as an API endpoint instead of a page

import { GraphQLClient, gql } from 'graphql';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

// how we authenticate our graphql client from creating auth token from graphcms
export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: 'Bearer ${process.env.GRAPHCMS_TOKEN}'
    }
  })
  res.status(200).json({ name: 'John Doe'})
}

