import React from 'react';
import { gql, graphql } from 'react-apollo';

const AccountListQuery = gql`
  query AccountListQuery {
    account {
      fullname
    }
  }
`;

const AccountList = ({ data: { loading, error, account } }) => {
  console.log('loading');
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <ul>
      {account.map((ch, index) => <li key={index}>{ch.fullname}</li>)}
    </ul>
  );
};

export default graphql(AccountListQuery)(AccountList);
