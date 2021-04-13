import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, lng: null, errorMessage: null };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({ lat: pos.coords.latitude });
      this.setState({ lng: pos.coords.longitude });
    }, (err) => { this.setState({ errorMessage: err.message }); });
  }

  render() {
    const { lat, lng, errorMessage } = this.state;
    if (lat && lng) {
      return <SeasonDisplay lat={lat} lng={lng} />;
    }
    if (errorMessage) {
      return (
        <div>
          <h1>ERROR</h1>
          <p>{errorMessage}</p>
        </div>
      );
    }
    return null;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
