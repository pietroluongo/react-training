import React, { Component } from 'react';

class LanguageSelector extends Component {
  render() {
    const { onLanguageChange } = this.props;
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
