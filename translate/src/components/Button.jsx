import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
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
    return (
      <button type="submit" className="ui button primary">
        <LanguageContext.Consumer>
          {(lang) => {
            switch (lang) {
              case 'nl':
                return 'Voorleggen';
              case 'br':
                return 'Enviar';
              default:
                return 'Submit';
            }
          }}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
