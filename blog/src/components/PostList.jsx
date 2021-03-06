import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    const { fetchPostsFunction } = this.props;
    fetchPostsFunction();
  }

  renderList() {
    const { posts } = this.props;
    return posts.map((post) => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    ));
  }

  render() {
    return (<div className="ui relaxed divided list">{this.renderList()}</div>);
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPostsFunction: fetchPostsAndUsers })(PostList);
