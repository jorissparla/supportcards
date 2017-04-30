import React from 'react';
import { gql, graphql } from 'react-apollo';
import { SmallCard } from './smallcard';
import styled from 'styled-components';

const cardColors = ['#FFAB40', '#80D8FF', '#8E24AA', '#607D8B'];

const Div = styled.div`
  display: flex;
    justify-content: flex-start;
  flex-wrap: wrap;
`;

const SupportCardQuery = gql`
  query SupportCardQuery {
      supportcards {
      id
      title
      description
      category
      link
    } 
  }
`;

const SupportCards = ({ data: { loading, error, supportcards }, filter }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  console.log('filter', filter);
  const filteredCards = supportcards.filter(card =>
    card.category.includes(filter)
  );
  return (
    <Div>
      {filteredCards.map(({ id, title, description, category, link }, i) => (
        <SmallCard
          key={id}
          title={title}
          text={description}
          category={category}
          buttonText="Open"
          link={link}
          canEdit={true}
        />
      ))}
    </Div>
  );
};

export default graphql(SupportCardQuery)(SupportCards);
