import React from "react";
import ComponentD from "../D";
import { UserContext, ThemeContext } from "../../../context";
import CONSTANTS from "../../../configs";
import { withTheme, withUser } from "../../../hocs";

const ComponentC = (props) => {
  const { forC, theme, user, ...restOfCProps } = props;

  let currentThemeClass;

  // if (theme === CONSTANTS.THEMES.DARK_THEME) {
  //   currentThemeClass = styles.darkTheme;
  // } else if (theme === CONSTANTS.THEMES.LIGHT_THEME) {
  //   currentThemeClass = styles.lightTheme;
  // }

  // const className = `${styles.container} ${currentThemeClass}`;

  return (
    <article>
      <h2>ComponentC</h2>
      <p>{forC}</p>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>Поточна тема: {theme}</p>
      <ComponentD {...restOfCProps} />
    </article>
  );
};

// Використання КОП (HOC)
const ComponentCWithTheme = withTheme(ComponentC);
const ComponentCWithThemeAndUser = withUser(ComponentCWithTheme);

export default ComponentCWithThemeAndUser;
