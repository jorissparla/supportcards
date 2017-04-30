import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import { blue500 } from 'material-ui/styles/colors';

import Divider from 'material-ui/Divider';

const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  width: 22%;
  margin: 5px;
  
`;
const TeamSpan = styled.div`
  width: 20%;
  color: orange;
  margin-right: 5px;
  margin-left: 10px;
  margin-top: 10px;
  flex-grow: 1;
`;

const Title = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 800;
  padding: 2px;
  flex-grow:0;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  justify-content: space-between;
`;

const BottomStyle = styled.div`
  display:flex;
  flex-direction: row;
  width:100%;
  flex-grow: 0;
  justify-content: center;
`;

const StyledBody = styled.p`
  margin: 5px;
  margin-bottom: 20px;
    font-size: 15px;
    flex-grow: 1;
`;
const Footer = styled.div`
  margin: 5px;
`;

const Outer = styled.div`
  display: flex;
  flex-wrap:wrap;
`;
const paperStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '22%',
  margin: '5px',
  minWidth: '200px'
};

const SmallCard = ({
  title = 'Procedure',
  text = 'Papier Und KartonFabrik',
  buttonText = 'Modify',
  category = 'Cloud',
  link = 'http://www.google.com',
  likes = 1,
  action = null
}) => {
  return (
    <Paper style={paperStyle} zDepth={3}>
      <Title>{title}</Title>
      <StyledBody>
        {text.slice(0, 100)}
      </StyledBody>
      <Divider />
      <BottomStyle>
        <IconButton>
          <ThumbsUp color={blue500} />{likes}
        </IconButton>
        <TeamSpan>{category}</TeamSpan>
        <FlatButton primary={true} onClick={() => window.open(link)}>
          {buttonText.toUpperCase()}{' '}
        </FlatButton>
      </BottomStyle>

    </Paper>
  );
};

export default () => {
  return (
    <Outer>
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </Outer>
  );
};

export { SmallCard };
