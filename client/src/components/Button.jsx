import React, {
  Component,
  PropTypes
} from 'react';

import css from '../../../public/css/Button.css';

class Button extends Component {
  render () {
    return (
      <div className='btn'>
        <a href='#'>New Button</a>
      </div>
    );
  }
}

export default Button
