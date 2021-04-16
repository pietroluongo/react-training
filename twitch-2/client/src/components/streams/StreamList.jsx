import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    const { fetchStreamsFunction } = this.props;
    fetchStreamsFunction();
  }

  render() {
    return <div>StreamList</div>;
  }
}

export default connect(null, { fetchStreamsFunction: fetchStreams })(StreamList);
