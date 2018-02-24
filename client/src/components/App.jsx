import React, { Component } from 'react';

//const Header = () => <h2>Header</h2>;
import Table from './Table.jsx';
import Button from './Button.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Table />
        <Button />
      </div>
    );
  }
}

export default App;
