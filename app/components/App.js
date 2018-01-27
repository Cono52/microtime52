import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  font-family: 'Nunito', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  color: white;
  font-size: ${props => props.big ? '1.45em' : '1em'};
  width: 50%;
`;

/* the main page for the index route of this app */
const App = () =>  {
    return ( 
      <Container>
        <TextContainer big>
          <p>This is a unix time stamper microservice.</p>
        </TextContainer>
        <TextContainer>
          <p>Example usage:</p>
          <p>https://microtime52.glitch.me/February 1 2017</p>
          <p>https://microtime52.glitch.me/1485951634</p>
        </TextContainer>
      </Container>
    )
}

export default App;