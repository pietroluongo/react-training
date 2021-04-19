import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    const { createStreamFunc } = this.props;
    createStreamFunc(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStreamFunc: createStream })(StreamCreate);
