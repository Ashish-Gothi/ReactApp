class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = { "firstName": "",
      "lastName": "",
      "gender": {
        "male": false,
        "female": false
      },
      "address": "",
      "error": {
        "firstNameError": "",
        "lastNameError": "",
        "genderError": "",
        "addressError": ""
      }
    };
    this.submitEventHandler = this.submitEventHandler.bind(this);
    this.lastNameChangeEventHandler = this.lastNameChangeEventHandler.bind(this);
    this.genderChangeEventHandler = this.genderChangeEventHandler.bind(this);
    this.addressChangeEventHandler = this.addressChangeEventHandler.bind(this);
  }
  submitEventHandler(ev) {
    var error = {
      "firstNameError": "",
      "lastNameError": "",
      "genderError": "",
      "addressError": ""
    };
    if (this.state.firstName.length == 0) {
      error.firstNameError = "firstName length must not be zero";
      console.log("first name error section chala");

      ev.preventDefault();
    }
    if (this.state.lastName.length == 0) {
      error.lastNameError = "lastName length must not be zero";
      console.log("last name error section chala");

      ev.preventDefault();
    }
    if (this.state.gender.male == false && this.state.gender.female == false) {
      error.genderError = "Select gender";
      console.log("gender name error section chala");

      ev.preventDefault();
    }
    if (this.state.address.length == 0) {
      error.addressError = "Address should not be of zero length";
      ev.preventDefault();
    }
    this.setState({ "error": error });
  }
  firstNameChangeEventHandler(ev) {
    this.setState({ "firstName": ev.target.value });
  }
  lastNameChangeEventHandler(ev) {
    this.setState({ "lastName": ev.target.value });
  }
  genderChangeEventHandler(ev) {
    var genderObject = {
      "male": false,
      "female": false
    };
    genderObject[ev.target.value] = ev.target.checked;
    this.setState({ "gender": genderObject });
  }
  addressChangeEventHandler(ev) {
    this.setState({ "address": ev.target.value });
  }
  render() {
    return React.createElement(
      "form",
      { onSubmit: this.submitEventHandler },
      "first name ",
      React.createElement("input", { type: "text", name: "firstName", value: this.state.firstName, onChange: this.firstNameChangeEventHandler.bind(this) }),
      React.createElement(
        "span",
        { name: "firstNameErrorSection" },
        this.state.error["firstNameError"]
      ),
      React.createElement("br", null),
      "last name ",
      React.createElement("input", { type: "text", name: "lastName", value: this.state.lastName, onChange: this.lastNameChangeEventHandler }),
      React.createElement(
        "span",
        { name: "lastNameErrorSection" },
        this.state.error["lastNameError"]
      ),
      React.createElement("br", null),
      "Gender \xA0\xA0\xA0\xA0 Male ",
      React.createElement("input", { type: "radio", name: "gender", value: "male", Checked: this.state.gender["male"], onChange: this.genderChangeEventHandler }),
      "\xA0\xA0\xA0Female ",
      React.createElement("input", { type: "radio", name: "gender", value: "female", Checked: this.state.gender["female"], onChange: this.genderChangeEventHandler }),
      React.createElement(
        "span",
        { name: "genderErrorSection" },
        this.state.error["genderError"]
      ),
      React.createElement("br", null),
      "Address ",
      React.createElement("textarea", { rows: "10", cols: "20", name: "address", onChange: this.addressChangeEventHandler }),
      React.createElement(
        "span",
        { name: "addressErrorSection" },
        this.state.error["addressError"]
      ),
      React.createElement("br", null),
      React.createElement(
        "button",
        null,
        "Save"
      )
    );
  }
}