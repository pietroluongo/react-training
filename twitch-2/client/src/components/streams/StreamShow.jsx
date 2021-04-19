import React, { Component } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { fetchStreamFunc, match } = this.props;
    fetchStreamFunc(match.params.id);
  }

  render() {
    const { stream } = this.props;
    if (!stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <video style={{ width: '100%' }} controls ref={this.videoRef} />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchStreamFunc: fetchStream })(StreamShow);
