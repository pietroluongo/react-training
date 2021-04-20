import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { language: 'en' };
  }

  onLanguageChange = (lang) => {
    this.setState({ language: lang });
  }

  render() {
    const { language } = this.state;
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
