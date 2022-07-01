// <<<<<<< areas-of-conservation
// import '../styles/globals.css'
// // import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// //apollo clients
// // const client = new ApolloClient({
// //   uri: 'http://localhost:1337/graphql',
// //   cache: new InMemoryCache(),
// // });

// function MyApp({ Component, pageProps }) {
//   return (
//     // <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     // </ApolloProvider>
//   )
// =======
// import "../styles/globals.css";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// //apollo clients
// const client = new ApolloClient({
//   uri: "http://localhost:1337/graphql",
//   cache: new InMemoryCache()
// });

// function MyApp({ Component, pageProps }) {
//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// >>>>>>> main
// }

// export default MyApp;

// import "../styles/globals.css";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// //apollo clients
// const client = new ApolloClient({
//   uri: "http://localhost:1337/graphql",
//   cache: new InMemoryCache()
// });

// function MyApp({ Component, pageProps }) {
//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }

// export default MyApp;

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";
const user = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={user}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;