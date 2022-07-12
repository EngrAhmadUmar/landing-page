import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from "../src/Components/constant";


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  // headers: {
  //   "Allow-Control-Allow-Origin": "*",
  // },
});



function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;