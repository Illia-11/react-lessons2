import React, { Component } from "react";

class Header extends Component {
  render() {
    const { user, handleLogin, handleLogout } = this.props;

    const fullName = user ? `${user.firstName} ${user.lastName}` : "Guest";

    const logoutBtn = <button onClick={handleLogout}>Вийти</button>;
    const loginBtn = <button onClick={handleLogin}>Увійти</button>;

    return (
      <header>
        <h1>Мій сайт</h1>
        <p>Привіт {fullName}</p>
        {user ? logoutBtn : loginBtn}
      </header>
    );
  }
}

export default Header;
