// Any file inside the folder pages/api is mapped to /api/* and
// will be treated as an API endpoint instead of a page

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

// how we authenticate our graphql client from creating auth token from graphcms
export default async function comments(req, res) {
  console.log({graphcmsToken})
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: 'Bearer ${graphcmsToken}'
    }
  })
  // connecting comment, name, email to specific post that the user commented on
  // once we run query, it will create comment in graph cms dashboard
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slugL String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug }}}) {id}
    }
  `
  try {
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result);
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
}

