import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddMeeting from './AddMeeting';
import FreeRooms from './FreeRooms';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://smart-meeting.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = "a123gjhgjsdf6576";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const BUILDINGS = gql`
  query {
    Buildings {
      name
      meetingRooms{
        name
        floor
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <App query={BUILDINGS} />} />
        <Route path="/addmeeting" component={AddMeeting} />
        <Route path="/freeRooms" component={FreeRooms} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);




