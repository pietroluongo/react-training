import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    const { fetchPostsFunction } = this.props;
    fetchPostsFunction();
  }

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (<div>PostList</div>);
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPostsFunction: fetchPosts })(PostList);
