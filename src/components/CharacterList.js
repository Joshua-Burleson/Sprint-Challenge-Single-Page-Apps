import React, { useEffect, useState } from "react";
import axios from 'axios';
import Pagination from './Pagination';
import Search from './SearchForm';
import CharacterCard from './CharacterCard';
import PageWrapper from './styles/InteractiveWrapper'
import CharacterWrapper from './styles/CharacterContainer';

export default function CharacterList(props) {
  const [currentChars, setChars] = useState([]);
  const [searchType, setSearchType] = useState(props.location.search.split('=')[0].slice(1) || 'page');
  const [page, setPage] = useState(props.location.search.split('page=')[1] || 1);

  const searchChars = query => {
    const result = currentChars.find(data => Object.keys(data).find(dataKey => data[dataKey] === query));
    return result ? setChars([result]) : alert('No Results Found');
  };

  const stretchSearch = query => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(res => {
        setChars(res.data.results || res.data);
        props.history.push(`/characters/?name=${query}`);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    console.log(searchType);
    console.log(searchType === 'page' ? props.location.search : page)
    console.log(props.match)
    console.log(props.location)
    axios.get(`https://rickandmortyapi.com/api/character/${searchType === 'character' ? page : props.location.search}`)
      .then(res => setChars(res.data.results || [res.data]))
      .catch(err => console.log(err));
  }, [page]);

  return (
    <PageWrapper>
      <Pagination page={page} setPage={setPage} />
      <Search findChar={stretchSearch} />
      <CharacterWrapper className="character-list">
        {currentChars && currentChars.map(char => <CharacterCard char={char} />)}
      </CharacterWrapper>
    </PageWrapper>
  );
}
