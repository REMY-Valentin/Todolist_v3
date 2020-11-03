import React from 'react';
import Header from './componnents/header';
import Main from './componnents/main';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container"> 
        <Header />
        <Main />
        
      </div>
    );
  }
}

export default App;
