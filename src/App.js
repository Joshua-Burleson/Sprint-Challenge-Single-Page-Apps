import React from "react";
import {Route, Link, NavLink} from 'react-router-dom';
import Header from "./components/Header.js";
import Welcome from './components/WelcomePage';
import CharacterList from './components/CharacterList';
// import Search from './components/SearchForm';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={Welcome} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
