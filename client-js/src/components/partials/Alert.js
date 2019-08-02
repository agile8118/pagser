import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
  }

  // Change the message of the alert, type can be 'error' or 'success'
  changeMessage(message, type, additionalClasses = null) {
    var alert = document.querySelector("#alert");
    this.hide();

    if (additionalClasses) {
      alert.classList.add(additionalClasses);
    }

    switch (type) {
      case "error":
        alert.classList.add("message-box--error");
        break;
      case "success":
        alert.classList.add("message-box--success");
        break;
    }
    alert.childNodes[0].innerHTML = message;
  }

  // Hide the alert
  hide() {
    var alert = document.querySelector("#alert");
    alert.classList.remove("message-box--error");
    alert.classList.remove("message-box--success");
    alert.childNodes[0].innerHTML = "";
  }

  render() {
    return (
      <div id="alert" className={`message-box`}>
        <span />
        <button
          onClick={this.hide.bind(this)}
          type="button"
          className="message-box__dismiss"
        >
          <i className="fa fa-remove" />
        </button>
      </div>
    );
  }
}

export default Alert;
