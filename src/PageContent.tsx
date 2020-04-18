import React, { Component } from "react";
import {ThemeContext} from "./contexts/ThemeContext"
export default class PageContent extends Component {
  static contextType = ThemeContext;
  
  render() {
    const {isDarkMode} = this.context;
    const style = {
      background: isDarkMode?"#4a4747":"white",
      color:isDarkMode?"white":"#4a4747",
      height: "100vh",
      width: "100vw",
    };
    return <div style={style}>{this.props.children}</div>;
  }
}
