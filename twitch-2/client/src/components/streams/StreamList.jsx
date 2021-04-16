import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  renderCreate() {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to="/streams/new">Create Stream</Link>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
          {this.renderCreate()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { fetchStreamsFunction: fetchStreams })(StreamList);
