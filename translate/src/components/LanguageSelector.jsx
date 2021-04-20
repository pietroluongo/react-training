import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    render() {
      const { onLanguageChange } = this.context;
      console.log(this.context);
      return (
        <div>
          Select a language:
          <i className="flag us" role="button" aria-label="US" onClick={() => onLanguageChange('en')} />
          <i className="flag br" role="button" aria-label="BR" onClick={() => onLanguageChange('br')} />
          <i className="flag nl" role="button" aria-label="NL" onClick={() => onLanguageChange('nl')} />
        </div>
      );
    }
}

export default LanguageSelector;
