import React from "react";
import styled from 'styled-components';


const CharacterCard = styled.div`
    margin: 0 auto;
    width: 30%;
    height: 325px;
    text-align:center; 
    border: white 1px solid;
    background-color: #443e3e;
    color: white;
    font-size: 1 rem;
    margin-top: 2%;
    opacity: 0.7;
    padding: 1%;
    border-radius: 5px;
    @media (max-width: 768px) {
        width: 75%;
        margin-bottom: 5%;
    }
`;
const CharacterName = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
`;
const NewH3 = styled(CharacterName)`
    font-size: 1.25rem;
    text-align: Center;
`;
const Attributes = styled.p`
    text-align: left;
    font-size: 1rem;
    margin-left: 5%;
`;
const Span = styled.span`
    font-weight: bold;
`;
export function CharCard(props) {
    return (
            <CharacterCard>
                <CharacterName>
                    <p>{props.name}</p>
                </CharacterName>
                <hr/>
                <NewH3>Attributes</NewH3>
                    <Attributes>
                        <Span>Gender: </Span>{props.gender}
                    </Attributes>
                    <Attributes>
                        <Span>Height: </Span>{props.height}
                    </Attributes>
                    <Attributes>
                        <Span>Weight: </Span>{props.weight}
                    </Attributes>
                    <Attributes>
                        <Span>Hair Color: </Span>{props.haircolor}
                    </Attributes>
                    <Attributes>
                        <Span>Skin Color: </Span>{props.skincolor}
                    </Attributes>
            </CharacterCard>
    );
}