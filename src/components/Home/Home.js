import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Home'>
        <a href='#'>Brick Breaker</a>
        <a href='#'>Minesweeper</a>
        <a href='#'>Snake</a>
      </div>
    );
  }
}

export default Home;
