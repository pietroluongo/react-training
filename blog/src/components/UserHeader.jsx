import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    const { fetchUserFunction, userId } = this.props;
    fetchUserFunction(userId);
  }

  render() {
    const { userId, users } = this.props;
    const user = users.find((u) => u.id === userId);
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { fetchUserFunction: fetchUser })(UserHeader);
