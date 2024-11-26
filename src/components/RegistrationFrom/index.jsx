import React from "react";

function registerUser(userData) {
  alert("user registered");
}

class RegistrationForm extends React.Component {
  state = {
    email: "",
    password: "",
    nickname: "",
    country: "SWE",
    comment: "",
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

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password, nickname, country, comment } = this.state;
    return (
      <form onSubmit={this.hadnleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="nickname"
          placeholder="Enter nickname"
          value={nickname}
          onChange={this.handleChange}
        />
        <select name="country" value={country} onChange={this.handleChange}>
          <option value="UA">Ukraine</option>
          <option value="UK">United Kingdom</option>
          <option value="SWE">Sweden</option>
          <option value="GE">Georgia</option>
        </select>
        <textarea name="comment" value={comment} onChange={this.handleChange} />
        <button>Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
