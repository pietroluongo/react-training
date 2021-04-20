import React, { Component } from 'react';

const Context = React.createContext('en');

export class LanguageStore extends Component {
  constructor(props) {
    super(props);
    this.state = { language: 'en' };
  }

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {children}
      </Context.Provider>
    );
  }
}

export default Context;
