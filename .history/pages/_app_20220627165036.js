import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//apollo clients
const client = new ApolloClient({
  uri: 'https://ggv-backend.herokuapp.com//graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
