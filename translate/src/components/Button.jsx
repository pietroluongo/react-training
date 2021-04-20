import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;

  getButtonText() {
    switch (this.context) {
      case 'nl':
        return 'Voorleggen';
      case 'br':
        return 'Enviar';
      default:
        return 'Submit';
    }
  }

  render() {
    console.log(this.context);
    return <button type="submit" className="ui button primary">{this.getButtonText()}</button>;
  }
}

export default Button;
