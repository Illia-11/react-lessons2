import React, { Component } from 'react';

class UserProfile extends Component {

  render() {
    const { user } = this.props;

    if(user) {
      return (
        <article>
          <h1>{user.firstName} {user.lastName}</h1>
          <p>Gender: {user.isMale ? "Male" : "Female"}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </article>
      );
    } else {
      return <article>
        <h1>Увійдіть щоб переглянути свої дані</h1>
      </article>
    }

  }
}

export default UserProfile;
