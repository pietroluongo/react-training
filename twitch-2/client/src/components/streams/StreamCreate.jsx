import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  onSubmit(formValues) {
    console.log(formValues);
  }

  renderInput({ input, label }) {
    return (
      <div className="field">
        <label htmlFor={input.name}>{label}</label>
        <input {...input} />

      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)} className="ui form">
          <Field name="title" component={this.renderInput} label="Enter Title" />
          <Field name="description" component={this.renderInput} label="Enter Description" />
          <button type="submit" className="ui button primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
