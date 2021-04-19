import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    const { match, fetchStreamFunction } = this.props;
    fetchStreamFunction(match.params.id);
  }

  renderActions() {
    return (
      <>
        <div className="ui button negative">
          Delete
        </div>
        <div className="ui button">
          Cancel
        </div>
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

export default connect(mapStateToProps, { fetchStreamFunction: fetchStream })(StreamDelete);
