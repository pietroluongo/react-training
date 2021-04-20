import React, { Component } from 'react';
import UserCreate from './UserCreate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { language: 'en' };
  }

  onLanguageChange = (lang) => {
    this.setState({ language: lang });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" role="button" aria-label="US" onClick={() => this.onLanguageChange('en')} />
          <i className="flag br" role="button" aria-label="BR" onClick={() => this.onLanguageChange('br')} />
          <i className="flag nl" role="button" aria-label="NL" onClick={() => this.onLanguageChange('nl')} />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
