import React, { Component } from "react";

export default class PageContent extends Component {
  render() {
    const style = {
      background: "white",
      height: "100vh",
      width: "100vw",
    };
    return <div style={style}>{this.props.children}</div>;
  }
}
