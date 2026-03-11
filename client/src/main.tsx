// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import "./index.css";
import App from "./App.tsx";

const client = new ApolloClient({
  link: new HttpLink({
    // uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
    uri: "/graphql",
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
