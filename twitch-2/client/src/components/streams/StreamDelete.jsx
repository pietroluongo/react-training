import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    const { match, fetchStreamFunction } = this.props;
    fetchStreamFunction(match.params.id);
  }

  renderActions() {
    const { deleteStreamFunc, match } = this.props;
    return (
      <>
        <button onClick={() => deleteStreamFunc(match.params.id)} type="button" className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    const { stream } = this.props;
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete the stream "${stream.title}"?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchStreamFunction: fetchStream, deleteStreamFunc: deleteStream })(StreamDelete);
