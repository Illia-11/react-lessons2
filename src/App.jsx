import React from 'react';
import { UserContext, ThemeContext } from './context';
import Header from './components/Header';
import CONSTANTS from './configs';
import MouseTracker from './components/MouseTracker';
import FormMouseTracker from './components/FormMouseTracker';

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
    isTrackerShown: true,
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

  toggleTracker = () => {
    this.setState({
      isTrackerShown: !this.state.isTrackerShown,
    })
  }

  render() {
    const { user, theme, isTrackerShown } = this.state;

    return (
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={[theme, this.switchTheme]}>
          <Header />
          {isTrackerShown && <FormMouseTracker />}
          <button onClick={this.toggleTracker}>toggle Tracker</button>
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
