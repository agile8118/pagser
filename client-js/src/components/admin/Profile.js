import React, { Component } from "react";
import axios from "axios";
import Loading from "../partials/Loading";
import { ROOT_URL } from "../../lib/keys";
import { showSnackBar, loadingModal } from "../../lib/util";
import util from "../../lib/forms";
import PhotoUpload from "./PhotoUpload";

class Profile extends Component {
  state = {
    name: "",
    loaded: false,
    btnDisabled: false,
    headline: "",
    biography: "",
    links: {
      website: "",
      twitter: "",
      youtube: "",
      linkedin: "",
      facebook: ""
    }
  };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;

    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .get(`/api/profile`, config)
      .then(response => {
        const user = response.data.user;
        if (this._isMounted) {
          this.setState({
            loaded: true,
            name: user.name,
            headline: user.headline,
            username: user.username,
            biography: user.biography,
            links: {
              website: user.links.website,
              twitter: user.links.twitter,
              youtube: user.links.youtube,
              linkedin: user.links.linkedin,
              facebook: user.links.facebook
            }
          });
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    var name = this.state.name;
    var headline = this.state.headline;
    var biography = this.state.biography;

    // name changes handle
    if (this.state.name !== prevState.name) {
      if (util.isEmpty(name)) {
        util.inputError("name", "You must enter your name.", 2);
      }

      if (!util.isAlpha(name) && !util.isEmpty(name)) {
        util.inputError("name", "Your name should contains only letters.", 2);
      }

      if (!util.len(name, 3, 30) && !util.isEmpty(name)) {
        util.inputError(
          "name",
          "Your name should be between 3 and 30 charecters.",
          2
        );
      }

      if (util.len(name, 3, 30) && !util.isEmpty(name) && util.isAlpha(name)) {
        util.inputNone("name", 2);
      }
    }

    // headline changes handle
    if (this.state.headline !== prevState.headline) {
      if (!util.letterPercentage(this.state.headline, 60)) {
        document
          .querySelector("#headline")
          .children[3].classList.add("display-none");
        util.inputError(
          "headline",
          "More than 60% of your headline must be letters.",
          2
        );
      }

      if (util.letterPercentage(this.state.headline, 60)) {
        util.inputNone("headline", 2);
        document
          .querySelector("#headline")
          .children[3].classList.remove("display-none");
      }

      document.querySelector("#headline").children[3].innerHTML =
        50 - this.state.headline.length;
    }

    // biography changes handle
    if (this.state.biography !== prevState.biography) {
      if (!util.letterPercentage(this.state.biography, 70)) {
        document
          .querySelector("#biography")
          .children[3].classList.add("display-none");
        util.inputError(
          "biography",
          "More than 70% of your biography must be letters.",
          2
        );
      }

      if (util.letterPercentage(this.state.biography, 70)) {
        util.inputNone("biography", 2);
        document
          .querySelector("#biography")
          .children[3].classList.remove("display-none");
      }

      document.querySelector("#biography").children[3].innerHTML =
        250 - this.state.biography.length;
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  checkIfAllOk() {
    var name = this.state.name;
    var headline = this.state.headline;
    var biography = this.state.biography;
    if (
      util.len(name, 3, 30) &&
      !util.isEmpty(name) &&
      util.isAlpha(name) &&
      util.letterPercentage(this.state.headline, 60) &&
      util.letterPercentage(this.state.biography, 70)
    ) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  }

  onSaveClick(e) {
    this.setState({ btnDisabled: true });
    loadingModal("Updating your profile...");
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .patch(
        `/api/profile`,
        {
          name: this.state.name,
          headline: this.state.headline,
          biography: this.state.biography,
          links: this.state.links
        },
        config
      )
      .then(response => {
        loadingModal();
        this.setState(
          (({ name, headline, biography, links }) => ({
            name,
            headline,
            biography,
            links,
            btnDisabled: false
          }))(this.state)
        );
        showSnackBar("Your profile updated successfully.", "success");
        this.forceUpdate();
      })
      .catch(error => {
        loadingModal();
        this.setState({ btnDisabled: false });
        showSnackBar("An unknown error occurred.", "error");
      });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <div className="center-content">
            <h3 className="heading-tertiary" id="information">
              Information
            </h3>
          </div>

          <div className="form__group" id="name">
            <label className="form__label">Name</label>
            <input
              className="form__input"
              value={this.state.name}
              placeholder="Full name"
              onBlur={e => {
                this.checkIfAllOk.apply(this);
              }}
              onChange={event => {
                this.setState({ name: event.target.value });
              }}
            />
            <div className="form__input--message">
              <span />
            </div>
          </div>
          <div className="form__group" id="headline">
            <label className="form__label">Headline</label>
            <input
              maxLength={50}
              onBlur={e => {
                this.checkIfAllOk.apply(this);
              }}
              className="form__input"
              placeholder="Describe yourself in few words"
              value={this.state.headline}
              onChange={event => {
                this.setState({ headline: event.target.value });
              }}
            />
            <div className="form__input--message">
              <span />
            </div>
            <span className="form__len-display">50</span>
          </div>
          <div className="form__group" id="biography">
            <label className="form__label">Biography</label>
            <textarea
              maxLength={250}
              onBlur={e => {
                this.checkIfAllOk.apply(this);
              }}
              className="form__textarea"
              value={this.state.biography}
              onChange={event => {
                this.setState({ biography: event.target.value });
              }}
              placeholder="Add more information about yourself"
              rows="4"
            />
            <div className="form__input--message">
              <span />
            </div>
            <span className="form__len-display">250</span>
          </div>

          <div className="form__group">
            <label className="form__label">Links</label>
            <div className="form__group--sm">
              <input
                type="text"
                maxLength={100}
                placeholder="Website (http://www.example.com)"
                className="form__input"
                value={this.state.links.website}
                onChange={event => {
                  this.setState({
                    links: { ...this.state.links, website: event.target.value }
                  });
                }}
              />
            </div>

            <div className="form__group--sm">
              <div className="input__group">
                <div>https://twitter.com/</div>
                <input
                  maxLength={100}
                  type="text"
                  placeholder="Twitter Profile"
                  value={this.state.links.twitter}
                  className="form__input"
                  onChange={event => {
                    this.setState({
                      links: {
                        ...this.state.links,
                        twitter: event.target.value
                      }
                    });
                  }}
                />
              </div>
            </div>

            <div className="form__group--sm">
              <div className="input__group">
                <div>https://youtube.com/</div>
                <input
                  maxLength={100}
                  type="text"
                  placeholder="Youtube Profile"
                  value={this.state.links.youtube}
                  className="form__input"
                  onChange={event => {
                    this.setState({
                      links: {
                        ...this.state.links,
                        youtube: event.target.value
                      }
                    });
                  }}
                />
              </div>
            </div>

            <div className="form__group--sm">
              <div className="input__group">
                <div>https://linkedin.com/</div>
                <input
                  maxLength={100}
                  type="text"
                  placeholder="LinkedIn Profile"
                  value={this.state.links.linkedin}
                  className="form__input"
                  onChange={event => {
                    this.setState({
                      links: {
                        ...this.state.links,
                        linkedin: event.target.value
                      }
                    });
                  }}
                />
              </div>
            </div>

            <div className="form__group--sm">
              <div className="input__group">
                <div>https://facebook.com/</div>
                <input
                  type="text"
                  maxLength={100}
                  placeholder="Facebook Profile"
                  value={this.state.links.facebook}
                  className="form__input"
                  onChange={event => {
                    this.setState({
                      links: {
                        ...this.state.links,
                        facebook: event.target.value
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="right-content">
            <button
              className="btn-round btn-round-normal"
              disabled={this.state.btnDisabled}
              onClick={e => this.onSaveClick(e)}
            >
              Save
            </button>
          </div>
          <PhotoUpload />
          <br />
          <br />
          <br />
          <div className="right-content">
            <a
              href={`/users/${this.state.username}`}
              target="_blank"
              className="btn-link"
            >
              View public profile <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="center-content">
            <h3 className="heading-tertiary" id="information">
              Information
            </h3>
          </div>
          <br />
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
}

export default Profile;
