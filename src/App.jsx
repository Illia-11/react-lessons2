import React from 'react';
import { UserContext, ThemeContext } from './context';
import Header from './components/Header';
import CONSTANTS from './configs';

class App extends React.Component {
  state = {
    user: {
      id: 0,
      firstName: 'Petro',
      lastName: 'Userenko',
      isMale: true,
      email: 'testuser@gmail.com',
      age: 12,
    },
    theme: CONSTANTS.THEMES.LIGHT_THEME,
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
        firstName: 'User',
        lastName: 'Userenko',
        isMale: true,
        email: 'testuser@gmail.com',
        age: 12,
      },
    });
  };

  switchTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    const { user, theme } = this.state;

    const renderMessages = (state, load) => {
      console.log(state);

      const { data: messages, isLoading, error } = state;

      return (
        <div>
          <button onClick={() => load()}>Load again</button>
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
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={[theme, this.switchTheme]}>
          <Header />

        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
