import React, { useState } from "react";
import Greeting from "./components/Greeting";
import ProductDashboard from "./components/ProductDashboard";
import Clock from "./components/Clock";
import RegistrationForm from "./components/RegistrationFrom";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import List from "./components/List";
import Avatar from "./components/Avatar";
import GuestAvatar from "./components/GuestAvatar";
import ComponentA from "./components/drillingComponents/A";
import UsersLoader from "./components/UsersLoader";
import MessagesLoader from "./components/MessagesLoader";
import DataLoader from "./components/DataLoader";
import { UserContext } from "./context";

// звичайний елемент у реакті
const elem1 = React.createElement(
  "div",
  { id: "div", title: "div", className: "div" },
  React.createElement(
    "h3",
    { className: "heading", disabled: true },
    "Div title"
  ),
  React.createElement("p", { className: "text" }, "Div text")
);

// JSX версія елементу зверху
const elem2 = (
  <div id="div" title="div" className="div">
    <h3 className="heading">Div title</h3>
    <p className="text">Div text</p>
  </div>
);

// const elem = <p>text</p>;
// const component2 = <MyFunctionalComponent></MyFunctionalComponent>;

// const input = <input />;
// const component = <MyClassComponent />;

// const arr = [];

// const prop1 = (
//   <MyClassComponent id='someId' someNumber={5} array={[]} array2={arr}  />
// );

// const btn1 = React.createElement('button', { disabled: true }, 'click');
// const btn2 = <button disabled>click</button>

// const name = "Test";

// const message = <p>Hello {name}</p>;

// jsx fragment
// const frag = <></>;

class App extends React.Component {
  state = {
    user: {
      id: 0,
      firstName: "Petro",
      lastName: "Userenko",
      isMale: true,
      email: "testuser@gmail.com",
      age: 12,
    },
  };

  handleLogout = () => {
    this.setState({
      user: null,
    });
  };

  handleLogin = () => {
    this.setState({
      user: {
        id: 0,
        firstName: "User",
        lastName: "Userenko",
        isMale: true,
        email: "testuser@gmail.com",
        age: 12,
      },
    });
  };

  render() {
    const { user } = this.state;

    const getMessages = function () {
      const messagesPromise = fetch("/message.json").then((res) => res.json());

      return messagesPromise;
    };

    const renderMessages = (state) => {
      const { data: messages, isLoading, error } = state;

      return (
          <div>
            {isLoading && <div>LOADING ...</div>}
            {error && <div>ERROR: {error.message}</div>}
            {messages &&
              messages.map((message) => (
                <article key={message.id}>
                  <h2>{message.title}</h2>
                  <h3>By {message.author}</h3>
                  <p>{message.text}</p>
                </article>
              ))}
          </div>
      );
    };

    return (
      <>
        <UserContext.Provider value={user}>
        <ComponentA />
        <DataLoader loadData={getMessages} children={renderMessages} />
        <DataLoader loadData={getMessages}>{renderMessages}</DataLoader>
        {/* <MessagesLoader /> */}
        {/* <UsersLoader /> */}
        {/* <ComponentA />
        <Header
          user={user}
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
        />
        <UserProfile user={user} />
        <List listTitle="Покупки в магазині" listType="ordered">
          <li>Пиріг</li>
          <li>Цукерки</li>
          <li>Морозиво</li>
        </List>
        <List listTitle="Чорна пʼятниця 2024" listType="unordered">
          <li>Телефон</li>
          <li>Ноутбук</li>
          <li>Повербанк</li>
          <li>Ще один повербанк</li>
        </List>
        <List listTitle="Користувачі">
          <li>
            <h2>Користувач 1</h2>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPqgJIt7-zvfCQ2MbXA-_wCkNgvnI2OQY7Q&s"
              alt="Користувач 1"
            />
          </li>
          <li>
            <h2>Гість</h2>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMM19ibc2ZGK72i5uLElaeQOu33N02S8xeQ&s"
              alt="Гість"
            />
          </li>
          <li>
            <h2>Гість</h2>
            <GuestAvatar text="bfjsdklvs"/>
          </li>
        </List> */}
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
