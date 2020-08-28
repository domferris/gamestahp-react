import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Home'>
        <nav className='Home-game-selection'>
          <button href='#'>Brick Breaker</button>
          <button href='#'>Minesweeper</button>
          <button href='#'>Snake</button>
        </nav>
      </div>
    );
  }
}

export default Home;
