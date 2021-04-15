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
      });
    });
  }

  renderAuthButton() {
    const { isSignedIn } = this.state;
    if (!isSignedIn || isSignedIn === null) {
      return <div>User Not Logged on</div>;
    }
    return <div>User Logged On</div>;
  }

  render() {
    return this.renderAuthButton();
  }
}

export default GoogleAuth;
