import React, { Component } from 'react';

const Header = () => <h2>Header</h2>;
//import Header from './Header.jsx';
import Table from './Table.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
