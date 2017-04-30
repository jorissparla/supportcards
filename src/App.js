import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SmallCards from './components/smallcard';
import { SmallCard } from './components/smallcard';
import SearchBar from './components/searchbar';
import AccountListWithData from './components/accountlist';
import SupportCardWithData from './components/supportcard';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://localhost:55555/graphql'
});
const client = new ApolloClient({
  networkInterface
});

class App extends Component {
  state = { searchTerm: '' };

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.this.setState({
      searchTerm: ''
    });
  }
  handleSearch(e) {
    this.setState({ searchTerm: e });
  }
  render() {
    console.log('render');
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={getMuiTheme}>
          <div>
            <SearchBar onChange={this.handleSearch} />
            <Div>
              <SupportCardWithData filter={this.state.searchTerm} />
            </Div>
            <AccountListWithData />
          </div>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
