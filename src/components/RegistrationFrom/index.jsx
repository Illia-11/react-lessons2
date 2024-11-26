import React from "react";

function registerUser(userData) {
  alert("user registered");
}

class RegistrationForm extends React.Component {
  state = {
    email: "",
    password: "",
    nickname: "",
  };

  hadnleSubmit = (e) => {
    const { email, password, nickname } = this.state;
    e.preventDefault();

    console.log(e);

    // вивести email в консоль
    // console.log(e.target.elements.email.value);

    const newUserData = {
      // дістаємо значення з єдиного джерела істини
      email,
      password,
      nickname,
    };

    // тут робимо запит на сервер
    registerUser(newUserData);

    // скинути форму
    e.target.reset();
  };

  hadnleEmailChange = (e) => {
    // console.log(e.target.value);

    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
    });
  };

  handleNicknameChange = ({ target: { value } }) => {
    this.setState({
      nickname: value,
    });
  };

  render() {
    const { email, password, nickname } = this.state;
    return (
      <form onSubmit={this.hadnleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={this.hadnleEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <input
          type="text"
          name="nickname"
          placeholder="Enter nickname"
          value={nickname}
          onChange={this.handleNicknameChange}
        />
        <button>Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
