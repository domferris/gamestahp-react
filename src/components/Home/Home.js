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
          <a href='#'>Brick Breaker</a>
          <a href='#'>Minesweeper</a>
          <a href='#'>Snake</a>
        </nav>
      </div>
    );
  }
}

export default Home;
