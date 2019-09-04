import React, { Component } from "react";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import { getParameterByName } from "../../lib/util";
import ProgressBar from "../partials/ProgressBar";

class InitialStep extends Component {
  constructor(props) {
    super(props);

    this.state = { type: undefined, loading: false };
  }

  componentDidMount() {
    const pageId = getParameterByName("id", window.location.href) || "id";
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .get(`/api/new-page/initial-step/${pageId}`, config)
      .then(response => {
        this.setState({ type: response.data.type, loading: false });
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=new-page";
        }
      });
  }

  onRadioChange(e) {
    const btn = document.querySelector("button");
    const selectedType = e.target.value;
    this.setState({ type: selectedType });
    btn.classList.remove("btn-disabled");
    btn.disabled = false;
  }

  onNextButtonClicked() {
    this.setState({ loading: true });
    const pageId = getParameterByName("id", window.location.href);
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .patch(
        `/api/new-page/initial-step/${pageId}`,
        { page: { type: this.state.type } },
        config
      )
      .then(response => {
        this.props.history.push(
          `/new-page/page-contents?id=${response.data.id}`
        );
      })
      .catch(response => {
        this.setState({ loading: false });
      });
  }

  // Render the next button, if button get clicked it will render a loading icon
  // instead while loading
  renderButton() {
    if (this.state.loading) {
      return (
        <div>
          <div className="center-content">
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
    } else {
      return (
        <button
          onClick={this.onNextButtonClicked.bind(this)}
          className="btn-normal btn-normal-sm"
          disabled={this.state.type ? this.state.type.length <= 0 : true}
        >
          Next
        </button>
      );
    }
  }

  renderContent() {
    const type = this.state.type;
    if (type === "public" || type === "specific" || type === null) {
      return (
        <div>
          <div className="center-content">
            <h3 className="heading-tertiary">Choose your page type</h3>
          </div>

          <div className="page-new__types">
            <label className="control control--radio">
              Public
              <input
                type="radio"
                value="public"
                name="radio"
                onClick={this.onRadioChange.bind(this)}
                defaultChecked={this.state.type === "public"}
              />
              <div className="control__indicator" />
            </label>
            <div className="page-new__types__details">
              Choose this one if you want your page to be visible to everyone,
              your page can be founded by search engines if you supply it with
              good content. Public pages will be shown in your public profile
              unless you create it anonymously. Spam public pages will be
              deleted.
            </div>
            <label className="control control--radio font-weight-400">
              Specific
              <input
                type="radio"
                value="specific"
                name="radio"
                defaultChecked={this.state.type === "specific"}
                onClick={this.onRadioChange.bind(this)}
              />
              <div className="control__indicator" />
            </label>
            <div className="page-new__types__details">
              Choose this if you want your page to be visible by only a specific
              kind of persons, such as your friends, workmates, students ,etc.
              You can also set a password for it. Your specific pages will not
              been shown on your public profile.
            </div>
          </div>
          <div className="center-content">{this.renderButton()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="center-content">
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

  render() {
    return (
      <div>
        <ProgressBar width={30} />
        <div className="page-new">{this.renderContent()}</div>
      </div>
    );
  }
}

export default InitialStep;
