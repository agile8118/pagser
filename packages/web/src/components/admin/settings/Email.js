import React, { Component } from "react";
import axios from "axios";
import { showSnackBar } from "../../../lib/util";

class Email extends Component {
  state = { email: null };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;

    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`/api/settings/email`, config)
      .then((response) => {
        if (this._isMounted) {
          this.setState({
            email: response.data.email,
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onInputFocusOut(value, fieldName) {}

  onInputChange(value, fieldName) {}

  onFormSubmit() {}

  render() {
    if (this.state.email !== null) {
      return (
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.onFormSubmit.apply(this);
          }}
        >
          <div className="form__group">
            <label className="form__label">Change email</label>
            <input
              className="form__input"
              type="text"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
          </div>
          <button
            className="btn btn-blue-o btn-round float-right"
            onClick={() => {
              showSnackBar("Sorry we haven't added this part yet.");
            }}
            type="submit"
          >
            Change Email
          </button>
        </form>
      );
    } else {
      return (
        <div>
          <div className="form__group margin-bottom-0">
            <label className="form__label">Change email</label>
          </div>
          <div className="left-content">
            <div className="lds-css ng-scope">
              <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Email;
