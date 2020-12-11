import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';
import styled from 'styled-components'

const StyledApp = styled.div`
  background-color: #C2CAD0;
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledIMG = styled.img`
  margin: 100px 0px 50px 0px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setCharacters(res.data.results);
    })
    .catch(err => {
      console.log('ERROR: ', err);
    })
  }, [])

  return (
    <StyledApp className="App">
      <StyledIMG src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' /> 
      <Character key={characters.id} characters = {characters} />
    </StyledApp>
  );
}

export default App;
