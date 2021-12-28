import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// export const client = new ApolloClient({
//   uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
//   // uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache(),
// });

// client
//   .query({
//     query: gql`
//       query GetUser {
//         user {
//             id
//             firstName
//             lastName
//             email
//             role
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
});

const authLink = setContext((_, { headers }) => {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDI0MjI1OTMsImlhdCI6MTY0MDAwMzM5MywiaXNzIjoiY2hhdGx5IiwianRpIjoiNTlmM2I5YTQtMDVhZi00NjBhLTg5MDctNzU1YzZhYjE5Y2Q1IiwibmJmIjoxNjQwMDAzMzkyLCJzdWIiOiJiMmM4MWJiMy0zODE1LTQ4ODgtYjJhMy05NzY3OGIxZTRjNmQiLCJ0eXAiOiJhY2Nlc3MifQ.AxFgh4D5Lj4k494VH-bY1G1HDJ6JAg3i_7WdGdGP2m_i4f7_90mn6jPnenH6MkKKIE_OhqRyWOd8PsTb_BhLNg';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
