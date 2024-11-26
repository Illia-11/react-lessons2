import React from "react";

function registerUser(userData) {
  alert("user registered");
}

class RegistrationForm extends React.Component {
  hadnleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    // вивести email в консоль
    console.log(e.target.elements.email.value);

    const newUserData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      nickname: e.target.elements.email.value
    }

    // тут робимо запит на сервер
    registerUser(newUserData)

    // скинути форму
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.hadnleSubmit}>
        <input type="email" name="email" placeholder="Enter email" />
        <input type="password" name="password" placeholder="Enter password" />
        <input type="text" name="nickname" placeholder="Enter nickname" />
        <button>Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
