import React, { Component } from 'react';

class UserProfile extends Component {
  state = {
    user: {
      id: 0,
      firstName: "User",
      lastName: "Userenko",
      isMale: true,
      email: "testuser@gmail.com",
      age: 12,
    },
  }

  render() {
    const { user } = this.state

    return (
      <article>
        <h1>{user.firstName} {user.lastName}</h1>
        <p>Gender: {user.isMale ? "Male" : "Female"}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
      </article>
    );
  }
}

export default UserProfile;
