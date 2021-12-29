import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'dotenv/config';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.APOLLO_TOKEN;
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
