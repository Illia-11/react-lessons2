import React from "react";
// styles - обʼєкт, ключі якого це назви селекторів у css
// а значення - згенеровані назви для стилів
import  styles from "./RegistrationForm.module.css";

function registerUser(userData) {
  console.log(userData);
  alert("user regisetered!");
}

const initialState = {
  email: "",
  password: "",
  nickname: "",
  country: "UA",
  comment: "",
  isSubscribed: false,
  gender: "male",
};

class RegistrationForm extends React.Component {
  state = { ...initialState };

  handleSubmit = (e) => {
    const { email, password, nickname } = this.state;

    e.preventDefault();

    console.log(e);

    // вивести email в консоль
    // console.log(e.target.elements.email.value);

    const newUserData = {
      // email: e.target.elements.email.value,
      // дістаємо значення з единого джерела істини
      // email: email,
      // password: password,
      // nickname: nickname,
      email,
      password,
      nickname,
    };

    // тут робимо запит на сервер
    registerUser(newUserData);

    // скинути форму
    // e.target.reset();

    this.setState({ ...initialState });
  };

  handleEmailChange = (e) => {
    console.log(e.target.value);

    console.log(e.target.name);

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

  handleChange = ({ target: { value, name, type, checked } }) => {
    const newValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const {
      email,
      password,
      nickname,
      country,
      comment,
      isSubscribed,
      gender,
    } = this.state;

    // щоб використати стилі з модулю css у className треба закидувати відповідну властивість
    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
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
          <option value="JP">Japan</option>
        </select>
        <textarea name="comment" value={comment} onChange={this.handleChange} />
        <label>
          <input
            type="checkbox"
            name="isSubscribed"
            checked={isSubscribed}
            onChange={this.handleChange}
          />
          <span>Штука, яка зазвичай відповідає за якусь згоду</span>
        </label>
        <fieldset>
          <legend>Your gender</legend>
          <label>
            <input
              type="radio"
              name="gender"
              onChange={this.handleChange}
              checked={gender === "male"}
              value="male"
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              onChange={this.handleChange}
              checked={gender === "female"}
              value="female"
            />{" "}
            Female
          </label>
        </fieldset>
        <button>Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
