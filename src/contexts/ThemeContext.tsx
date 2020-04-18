import React, { Component, createContext } from "react";

type themeState = {
  isDarkMode: boolean;
  toggleTheme: any;
};

export const ThemeContext = createContext<themeState>({
  isDarkMode: false,
  toggleTheme: null,
});

class ThemeProvider extends Component<{}, themeState> {
  state: themeState = {
    isDarkMode: false,
    toggleTheme: null,
  };
  constructor(props: {}) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeProvider;
