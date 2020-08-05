import React, { Component } from "react";
import { convertToUrl } from "../../lib/util";

class ChooseUrl extends Component {
  constructor(props) {
    super(props);
    this.state = { url: this.props.url === null ? null : this.props.url };
    this.errMsg = React.createRef();
  }

  componentDidMount() {
    // Check if the url is valid on component first render, call the onsuccess function
    if (
      this.state.url &&
      this.state.url.length > 0 &&
      this.props.usedUrls.indexOf(this.state.url) === -1
    ) {
      this.props.onSuccess(this.state.url);
    } else if (this.state.url !== null) {
      if (this.props.usedUrls.indexOf(this.state.url) !== -1) {
        this.errMsg.current.innerText = `You have already used "${this.state.url}" url, choose something else.`;
        this.errMsg.current.classList.remove("display-none");
        this.props.onError();
      } else {
        this.errMsg.current.innerText = "Please choose a URL for your page.";
        this.errMsg.current.classList.remove("display-none");
        this.props.onError();
      }
    }
  }

  // Check if the url user's choosing is already existed or not
  checkExistence = () => {
    if (
      this.state.url &&
      this.state.url.length > 0 &&
      this.props.usedUrls.indexOf(this.state.url) === -1
    ) {
      this.errMsg.current.innerText = "";
      this.errMsg.current.classList.add("display-none");
      this.props.onSuccess(this.state.url);
    } else if (this.props.usedUrls.indexOf(this.state.url) !== -1) {
      this.errMsg.current.innerText = `You have already used "${this.state.url}" url, choose something else.`;
      this.errMsg.current.classList.remove("display-none");
      this.props.onError();
    } else {
      this.errMsg.current.innerText = "Please choose a URL for your page.";
      this.errMsg.current.classList.remove("display-none");
      this.props.onError();
    }
  };

  render() {
    return (
      <div>
        <label htmlFor="url" className="form__label">
          URL
        </label>
        <input
          type="text"
          value={this.state.url || ""}
          className="form__input"
          placeholder="Choose a URL for your page"
          onBlur={this.checkExistence}
          onChange={(e) => {
            this.setState({ url: convertToUrl(e.target.value) }, () => {
              // check for URL validation on change
              this.checkExistence();
            });
          }}
        />
        <span ref={this.errMsg} className="a-10 display-none" />
        <p className="url__display">
          pagher.com/{this.props.username}/{this.state.url}
        </p>
        <div className="url__note">
          <strong>Important note about URL:</strong>
          <p>
            This URL will be for your page, please copy this becasue the only
            way other persons can view this page is to have this URL. <br /> You
            should share this URl in order for others to view it.
          </p>
        </div>
      </div>
    );
  }
}

export default ChooseUrl;
