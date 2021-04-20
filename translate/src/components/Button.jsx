import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button type="submit" className="ui button primary">Submit</button>;
  }
}

export default Button;
