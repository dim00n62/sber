import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Home } from './components/Home';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

function App(): any {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}

export default App;
