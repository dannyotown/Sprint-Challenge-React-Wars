import React, {useState,useEffect} from 'react';
import './App.css';
import { CharCard } from './components/CharacterCards/CharacterCards';
import axios from "axios";
import styled from 'styled-components';

const BodyContain = styled.div`
    margin: 0 auto;
    margin-top: 2%;
    width: 80%;
    margin-bottom: 2%;
`;
const FlexDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const App = () => {
  const [charNames, updateCharNames] = useState([]);
  
  useEffect(()=>{
    axios.get('https://swapi.co/api/people/')
    .then(res=>updateCharNames(res.data.results))
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <BodyContain>
        <FlexDiv>
            {charNames.map((charName, index)=>{
              return <CharCard name={charName.name} height={charName.height} weight={charName.mass}
              haircolor={charName.hair_color} skincolor ={charName.skin_color} gender={charName.gender}
              Key={index}></CharCard>;
            })}
        </FlexDiv>
      </BodyContain>
    </div>
  );
}

export default App;
