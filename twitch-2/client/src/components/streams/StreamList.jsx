import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    const { fetchStreamsFunction } = this.props;
    fetchStreamsFunction();
  }

  renderAdmin(stream) {
    const { currentUserId } = this.props;
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <button type="button" className="ui button primary">Edit</button>
          <button className="ui button negative" type="button">Delete</button>
        </div>
      );
    }
    return null;
  }

  renderList() {
    const { streams } = this.props;
    return streams.map((stream) => (
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">
            {stream.description}
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
});

export default connect(mapStateToProps, { fetchStreamsFunction: fetchStreams })(StreamList);
