import React, { useEffect, useState } from "react";
import axios from 'axios';
import Pagination from './Pagination';
import Search from './SearchForm';
import CharacterCard from './CharacterCard';
import PageWrapper from './styles/InteractiveWrapper'
import CharacterWrapper from './styles/CharacterContainer';

export default function CharacterList(props) {
  const [currentChars, setChars] = useState([]);
  const [page, setPage] = useState(props.location.search.split('=')[1] || 1);

  const searchChars = query => {
    const result = currentChars.find(data => Object.keys(data).find(dataKey => data[dataKey] === query));
    return result ? setChars([result]) : alert('No Results Found');
  };

  useEffect(() => {
    console.log(props.location)
    axios.get(`https://rickandmortyapi.com/api/character/${props.location.search && props.location.search}`)
      .then(res => setChars(res.data.results))
      .catch(err => console.log(err));
  }, [page]);

  return (
    <PageWrapper>
      <Pagination page={page} setPage={setPage} />
      <Search findChar={searchChars} />
      <CharacterWrapper className="character-list">
        {currentChars && currentChars.map(char => <CharacterCard char={char} />)}
      </CharacterWrapper>
    </PageWrapper>
  );
}
