import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = (e) => {
    const { saveCommentFunc } = this.props;
    const { comment } = this.state;
    e.preventDefault();
    saveCommentFunc(comment);
    this.setState({ comment: '' });
  }

  fetchComments() {

  }

  render() {
    const { comment } = this.state;
    const { fetchCommentsFunc } = this.props;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea onChange={this.handleChange} name="commentBody" value={comment} id="commentBody" cols="30" rows="10" />
            <div>
              <button type="submit">Submit Comment</button>
            </div>
          </form>
        </div>
        <button onClick={fetchCommentsFunc} type="button">Fetch Comments</button>
      </div>

    );
  }
}

export default connect(null, { saveCommentFunc: saveComment, fetchCommentsFunc: fetchComments })(CommentBox);
