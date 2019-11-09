import React, { useEffect, useState } from "react";
import axios from 'axios';
import Search from './SearchForm';
import CharacterCard from './CharacterCard';
import CharacterWrapper from './styles/CharacterContainer';

export default function CharacterList(props) {
  const [currentChars, setChars] = useState([]);
  const page = 1;

  const searchChars = query => {
    const result = currentChars.find(data => Object.keys(data).find(dataKey => data[dataKey] === query));
    console.log(result);
    return setChars([result]);
  };

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => setChars(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <section>
      <Search findChar={searchChars} />
      <CharacterWrapper className="character-list">
        {currentChars && currentChars.map(char => <CharacterCard char={char} />)}
      </CharacterWrapper>
    </section>
  );
}
