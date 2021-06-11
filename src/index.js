import React from 'react';
import { render } from 'react-dom';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'http://smart-meeting.herokuapp.com/',
  cache: new InMemoryCache()
});

const BUILDINGS = gql`
  query {
    Buildings {
      name
      meetingRooms{
        name
        meetings{
          title
          date
          startTime
          endTime
        }
      }
    }
  }
`;

render(
  <ApolloProvider client={client}>
    <App query={BUILDINGS} />
  </ApolloProvider>,
  document.getElementById('root'),
);

