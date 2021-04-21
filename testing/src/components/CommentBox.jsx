import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    const { comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} name="commentBody" value={comment} id="commentBody" cols="30" rows="10" />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
