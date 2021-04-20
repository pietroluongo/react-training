import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
    static contextType = LanguageContext;

    getLabelText() {
      switch (this.context) {
        case 'br':
          return 'Nome';
        case 'nl':
          return 'Naam';
        default:
          return 'Name';
      }
    }

    render() {
      return (
        <div className="ui field">
          <label htmlFor="name">{this.getLabelText()}</label>
          <input name="name" />
        </div>
      );
    }
}

export default Field;
