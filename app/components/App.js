import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
  opacity: 0;
  animation: ${fadeIn} 0.5s 0.1s ease-in forwards;
  color: white;
  font-size: ${props => props.big ? '1.55em' : '1em'};
  max-width: 30em;
  min-width: 10em;
  ${props => props.big ? 'text-align: center; font-weight: bold' : ''};
  

  .code {
    background-color: #2e2e2e;
    padding: 0.5em;
    border-radius: 6px;
  }

  @media (max-width: 420px) {
    font-size: ${props => props.big ? '1.35em' : '0.8em'};
    max-width: 25em;
    min-width: 8em;
  }

`;

/* the main page for the index route of this app */
const App = () =>  {
    const example = JSON.stringify({"unix":1517011200,"natural":"January 27, 2018"});
    return ( 
      <Container>
        <TextContainer big>
          <p>This is a unix timestamp microservice.</p>
        </TextContainer>
        <TextContainer>
          <p>Example usage:</p>
          <p className='code'>https://microtime52.glitch.me/January 27, 2018</p>
          <p className='code'>https://microtime52.glitch.me/1517011200</p>
          <p>Sample output:</p>
          <p className='code'>{ example }</p>
        </TextContainer>
      </Container>
    )
}

export default App;