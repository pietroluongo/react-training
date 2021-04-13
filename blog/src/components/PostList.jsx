import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    const { fetchPostsFunction } = this.props;
    fetchPostsFunction();
  }

  render() {
    return (<div>PostList</div>);
  }
}

export default connect(null, { fetchPostsFunction: fetchPosts })(PostList);
