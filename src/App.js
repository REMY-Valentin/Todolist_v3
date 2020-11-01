import React from 'react';
import Header from './componnents/header';
import Footer from './componnents/footer';
import Main from './componnents/main';


class App extends React.Component {

  render() {
    return (
      <div className="container"> 
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
