import React from "react";
import ComponentD from "../D";
import { UserContext, ThemeContext } from "../../../context";
import CONSTANTS from "../../../configs";

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

// function ComponentCWithTheme(props) {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, switchTheme]) => {
//         return (
//           <ComponentC
//             theme={theme}
//             switchTheme={switchTheme}
//             user={props.user}
//           />
//         );
//       }}
//     </ThemeContext.Consumer>
//   );
// }

// class ComponentCWithThemeAndUser extends React.Component {
//   render() {
//     return (
//       <UserContext.Consumer>
//         {(user) => <ComponentCWithTheme user={user} />}
//       </UserContext.Consumer>
//     );
//   }
// }

/*
  Компонент вищого порядку (high order component) КОП/HOC - 

  це функція яка приймає якийсь Компонент1 і повертає інший компонент (Компонент2)
  при чому Компонент2 зазвичай додає якогось функціоналу або даних Компоненту1
*/
function withTheme(Component) {
  class ComponentWithTheme extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {([theme, switchTheme]) => (
            <Component
              theme={theme}
              switchTheme={switchTheme}
              {...this.props}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
  }

  return ComponentWithTheme;
}

function withUser(Component) {
  return function ComponentWithUser(props) {
    return (
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };
}

// Використання КОП (HOC)
const ComponentCWithTheme = withTheme(ComponentC);
const ComponentCWithThemeAndUser = withUser(ComponentCWithTheme);

export default ComponentCWithThemeAndUser;
