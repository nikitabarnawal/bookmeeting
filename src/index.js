import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddMeeting from '../src/Component/AddMeeting';
import FreeRooms from './Component/FreeRooms';
import SavedRoom from './Component/SavedRoom';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://smart-meeting.herokuapp.com',
});

const authLink = setContext((_, { headers }) => {
  const token = "Nepal";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: token ? `Bearer${token}` : '',
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
      id
      name
      meetingRooms{
        id
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
        <Route path="/savedRoom" component={SavedRoom} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);




