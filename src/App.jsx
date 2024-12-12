import { useState } from "react";
import { UserContext, ThemeContext } from "./context";
import CONSTANTS from "./configs";
import Avatar from "./components/Avatar/index.jsx";
import Header from "./components/Header/index.jsx";
import MouseTracker from "./components/MouseTracker/index.jsx";

function App() {
  const [user, setUser] = useState({
    id: 0,
    firstName: "Petro",
    lastName: "Userenko",
    isMale: true,
    email: "testuser@gmail.com",
    age: 12,
  });
  const [theme, setTheme] = useState(CONSTANTS.THEMES.LIGHT_THEME);
  const [isTrackerShown, setIsTrackerShown] = useState(false);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleLogout = () => {
    setUser(null);
  };

  const handleLogin = () => {
    setUser({
      id: 0,
      firstName: "Petro",
      lastName: "Userenko",
      isMale: true,
      email: "testuser@gmail.com",
      age: 12,
    });
  };

  const toggleTracker = () => {
    setIsTrackerShown(!isTrackerShown);
  };

  const changeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const changeComment = ({ target: { value } }) => {
    setComment(value);
  };

  const submitFrom = (e) => {
    e.preventDefault();

    alert("We will conect with you");
  };

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header handleLogin={handleLogin} handleLogout={handleLogout} />
        <Avatar src="test" alt="test" />
        <form onSubmit={submitFrom}>
          <input
            type="email"
            name="emails"
            value={email}
            onChange={changeEmail}
          />
          <textarea name="comment" value={comment} onChange={changeComment} />
          <button>Send comment</button>
        </form>
        <button onClick={toggleTracker}>toggle tracker</button>
        {isTrackerShown && <MouseTracker />}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
