import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import BrickBreaker from './components/games/BrickBreaker/BrickBreaker';
import Minesweeper from './components/games/Minesweeper/Minesweeper';
import Snake from './components/games/Snake/Snake';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main className='App'>
      <Switch>
        <Route path='/brick-breaker' component={BrickBreaker} />
        <Route path='/minesweeper' component={Minesweeper} />
        <Route path='/snake' component={Snake} />
        <Route path='/' component={Home} />
      </Switch>
    </main>
  );
}

export default App;
