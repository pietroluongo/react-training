import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  getButtonText(language) {
    switch (language) {
      case 'nl':
        return 'Voorleggen';
      case 'br':
        return 'Enviar';
      default:
        return 'Submit';
    }
  }

  renderButton() {
    return (
      <button type="submit" className="ui button primary">
        <LanguageContext.Consumer>
          {({ language }) => this.getButtonText(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return this.renderButton();
  }
}

export default Button;
