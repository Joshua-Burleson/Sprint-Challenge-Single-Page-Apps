import React from "react";
import CharacterDiv from './styles/CharacterStyle';

export default function CharacterCard(props) {
  return (
    <CharacterDiv key={`${props.char.name}${props.char.id}`}>
      <img src={props.char.image} />
      <h3>{props.char.name}</h3>
      <p>{`Status: ${props.char.status}`}</p>
    </CharacterDiv>
  );
}