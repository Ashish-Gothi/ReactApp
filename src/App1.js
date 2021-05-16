import React, {Component} from 'react';

import logo from './logo.svg';

import './App.css';

import "bootstrap/dist/css/bootstrap.css"


export default class App extends Component 
{
 constructor(props) {
    super(props);

    this.state = { "port": "",
      "server": "",
      "database": "",
      "dbUsername": "",
      "dbPasswod": "",
      "adminUsername": "",
      "adminPassword": "",
      "adminConfirmPassword": "",
      "portErrorSection": "",
      "serverErrorSection": "",
      "databaseErrorSection": "",
      "dbUsernameErrorSection": "",
      "dbPasswordErrorSection": "",
      "adminUsernameErrorSection": "",
      "adminPasswordErrorSection": "",
      "adminConfirmPasswordErrorSection": ""

    };

    this.submitEventHandler = this.submitEventHandler.bind(this);
    this.portChangeEventHandler = this.portChangeEventHandler.bind(this);
    this.serverChangeEventHandler = this.serverChangeEventHandler.bind(this);
    this.databaseChangeEventHandler = this.databaseChangeEventHandler.bind(this);
    this.dbUsernameChangeEventHandler = this.dbUsernameChangeEventHandler.bind(this);
    this.dbPasswordChangeEventHandler = this.dbPasswordChangeEventHandler.bind(this);
    this.adminUsernameChangeEventHandler = this.adminUsernameChangeEventHandler.bind(this);
    this.adminPasswordChangeEventHandler = this.adminPasswordChangeEventHandler.bind(this);
    this.adminConfirmPasswordChangeEventHandler = this.adminConfirmPasswordChangeEventHandler.bind(this);
  }

  submitEventHandler(ev) {
    console.log("Validate all the  field");
    if (this.state.port.length == 0) {
      ev.preventDefault();

      this.setState({ "portErrorSection": "port required" });
    }
    if (this.state.server.length == 0) {
      this.setState({ "serverErrorSection": "server required" });
    }
    if (this.state.database.length == 0) {
      this.setState({ "databaseErrorSection": "database required" });
    }
    if (this.state.dbUsername.length == 0) {
      this.setState({ "dbUsernameErrorSection": "Username required" });
    }
    if (this.state.dbPassword.length == 0) {
      this.setState({ "dbPasswordErrorSection": "password required" });
    }
    if (this.state.adminUsername.length == 0) {
      this.setState({ "adminUsernameErrorSection": "username required" });
    }
    if (this.state.adminPassword.length == 0) {
      this.setState({ "adminPasswordErrorSection": "password required" });
    }
    if (this.state.adminConfirmPassword.length == 0) {
      this.setState({ "adminConfirmPasswordErrorSection": "confirm password required" });
    }
  }

  portChangeEventHandler(ev) {
    console.log("port:" + ev.target.value);
    this.setState({ "port": ev.target.value });
  }
  serverChangeEventHandler(ev) {
    console.log("server:" + ev.target.value);
    this.setState({ "server": ev.target.value });
  }
  databaseChangeEventHandler(ev) {
    console.log("database:" + ev.target.value);
    this.setState({ "database": ev.target.value });
  }
  dbUsernameChangeEventHandler(ev) {
    console.log("username:" + ev.target.value);
    this.setState({ "dbUsername": ev.target.value });
  }
  dbPasswordChangeEventHandler(ev) {
    console.log("password:" + ev.target.value);
    this.setState({ "dbPassword": ev.target.value });
  }
  adminUsernameChangeEventHandler(ev) {
    console.log("admin username:" + ev.target.value);
    this.setState({ "adminUsername": ev.target.value });
  }
  adminPasswordChangeEventHandler(ev) {
    console.log("admin password:" + ev.target.value);
    this.setState({ "adminPassword": ev.target.value });
  }
  adminConfirmPasswordChangeEventHandler(ev) {
    console.log("admin confirm password:" + ev.target.value);
    this.setState({ "adminConfirmPassword": ev.target.value });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { className: "h3 align-center" },
        "Database Installation"
      ),
      React.createElement(
        "form",
        { action:"mygroceries"},
        "Port\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
        React.createElement("input", { type: "text", name: "port", value: this.state.port, onChange: this.portChangeEventHandler }),
        React.createElement(
          "span",
          null,
          this.state.portErrorSection
        ),
        " ",
        React.createElement("br", null),
        "Server\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
        React.createElement("input", { type: "text", name: "server", value: this.state.server, onChange: this.serverChangeEventHandler }),
        React.createElement(
          "span",
          null,
          this.state.serverErrorSection
        ),
        React.createElement("br", null),
        "Database\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
        React.createElement("input", { type: "text", name: "database", value: this.state.database, onChange: this.databaseChangeEventHandler }),
        React.createElement(
          "span",
          null,
          this.state.databaseErrorSection
        ),
        React.createElement("br", null),
        "Username\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
        React.createElement("input", { type: "text", name: "dbUsername", value: this.state.dbUsername, onChange: this.dbUsernameChangeEventHandler }),
        React.createElement(
          "span",
          null,
          this.state.dbUsernameErrorSection
        ),
        React.createElement("br", null),
        "Password\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
        React.createElement("input", { type: "text", name: "dbPassword", value: this.state.dbPassword, onChange: this.dbPasswordChangeEventHandler }),
        React.createElement(
          "span",
          null,
          this.state.dbPasswordErrorSection
        ),
        React.createElement("br", null),
        React.createElement(
          "h3",
          { align: "center" },
          "Admin Registration"
        ),
        "username\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
        React.createElement("input", { type: "text", name: "adminUsername", value: this.state.adminUsername, onChange: this.adminUsernameChangeEventHandler }),
        React.createElement(
          "span",
          null,
          this.state.adminUsernameErrorSection
        ),
        React.createElement("br", null),
        "password\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
        React.createElement("input", { type: "text", name: "adminPassword", value: this.state.adminPassword, onChange: this.adminPasswordChangeEventHandler }),
        React.createElement(
          "span",
          null,
          this.state.adminPasswordErrorSection
        ),
        React.createElement("br", null),
        "confirm password",
        React.createElement("input", { type: "text", name: "adminConfirmPassword", value: this.state.adminConfirmPassword, onChange: this.adminConfirmPasswordChangeEventHandler }),
        React.createElement(
          "span",
          null,
          this.state.adminConfirmPasswordErrorSection
        ),
        React.createElement("br", null),
        React.createElement(
          "button",
          { type: "submit", className: "btn btn-primary" },
          "Install"
        )
      )
    );
  }
}