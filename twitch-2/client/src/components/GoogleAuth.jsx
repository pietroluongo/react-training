import React, { Component } from 'react';

class GoogleAuth extends Component {
  constructor() {
    super();
    this.state = { isSignedIn: null };
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '705590120582-fc0hh7i09p2cmua03l7tmn29d5n760u0.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    const { isSignedIn } = this.state;
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} type="button" className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button onClick={this.onSignInClick} type="button" className="ui red google button">
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }

  render() {
    return this.renderAuthButton();
  }
}

export default GoogleAuth;
