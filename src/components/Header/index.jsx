import { useContext } from "react";
import { ThemeContext, UserContext } from "../../context";
import styles from "./Header.module.scss";
import CONSTANTS from "../../configs";
import cx from "classnames";

function Header(props) {
  const { handleLogout, handleLogin } = props;

  // useContext приймає обʼєкт контексту та повертає значення яке у ньому знаходиться
  const [theme, switchTheme] = useContext(ThemeContext);
  const user = useContext(UserContext);

  const fullName = user ? `${user.firstName} ${user.lastName}`.trim() : "Guest";

  const logoutBtn = <button onClick={handleLogout}>Вийти</button>;
  const loginBtn = <button onClick={handleLogin}>Увійти</button>;

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === CONSTANTS.THEMES.DARK_THEME,
    [styles.lightTheme]: theme === CONSTANTS.THEMES.LIGHT_THEME,
  });

  return (
    <header className={headerClasses}>
      <h1>Мій сайт</h1>
      <p>Привіт {fullName}</p>
      {user ? logoutBtn : loginBtn}
      <button
        onClick={() => {
          const newTheme =
            theme === CONSTANTS.THEMES.DARK_THEME
              ? CONSTANTS.THEMES.LIGHT_THEME
              : CONSTANTS.THEMES.DARK_THEME;
          switchTheme(newTheme);
        }}
      >
        Змінити тему на {theme === "dark" ? "світлу" : "темну"}
      </button>
    </header>
  );
}
export default Header;
