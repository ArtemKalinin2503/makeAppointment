import { ApolloClient, InMemoryCache } from '@apollo/client';

// url сервера
const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
    cache: new InMemoryCache()
});

export default client;
  
  