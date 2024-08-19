import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../utils';
import { Stack } from 'expo-router';
import {
  View
} from 'react-native';
import { LayoutNavegacao } from '@front-end/layout';


const Layout = () => (
  <ApolloProvider client={client}>
      <LayoutNavegacao />
    </ApolloProvider>
);


export default Layout;