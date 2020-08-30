import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Home'>
        <nav className='Home-game-selection'>
          <Link to='/brick-breaker'>
            <button>Brick Breaker</button>
          </Link>
          <Link to='/minesweeper'>
            <button>Minesweeper</button>
          </Link>
          <Link to='/snake'>
            <button>Snake</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Home;
