import React, { Component } from 'react';
import css from '../../../public/css/Table.css';

const headers = ['Title', ' Year', ' Rating', ' Comments'];

class Table extends Component {
  render () {
    return (
      <div className='table'>
        {headers}
      </div>
    );
  }
}

export default Table;
