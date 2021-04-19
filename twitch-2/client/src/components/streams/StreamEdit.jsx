import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    const { fetchStreamFunction, match } = this.props;
    fetchStreamFunction(match.params.id);
  }

  onSubmit = (formValues) => {
    const { match, editStreamFunction } = this.props;
    editStreamFunction(match.params.id, formValues);
  }

  render() {
    const { stream } = this.props;
    if (!stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchStreamFunction: fetchStream, editStreamFunction: editStream })(StreamEdit);
