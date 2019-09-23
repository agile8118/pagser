import React, { Component } from "react";

class Footer extends Component {
  componentDidMount() {
    if (localStorage.getItem("theme") === "dark") {
      this.changeTheme("dark");
    } else {
      this.changeTheme("light");
    }
  }
  switchThemeChanged = () => {
    if (event.target.checked) {
      this.changeTheme("dark");
    } else {
      this.changeTheme("light");
    }
  };

  changeTheme(theme) {
    if (theme === "dark") {
      var link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "/dark-style.css");
      document.querySelector("head").appendChild(link);
      document.querySelector("#themeSwitch").checked = true;
      localStorage.setItem("theme", "dark");
    }

    if (theme === "light") {
      if (document.querySelectorAll("link[href='/dark-style.css']")[0]) {
        document
          .querySelector("head")
          .removeChild(
            document.querySelectorAll("link[href='/dark-style.css']")[0]
          );
        document.querySelector("#themeSwitch").checked = false;
        localStorage.setItem("theme", "light");
      }
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer className="footer admin__footer">
          <div className="footer__text">Copyright &copy; 2019 Pagher, Inc.</div>
          <ul className="footer__nav">
            <li className="footer__link">
              <a href="javascript:void(0);">Support</a>
            </li>
            <li className="footer__link">
              <a href="javascript:void(0);">Contact us</a>
            </li>
            <li className="footer__link">
              <a href="/terms-of-use">Terms of Use</a>
            </li>
            <li className="footer__link">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
          <div className="footer__right">
            <span className="footer__theme-text">Dark Theme:</span>
            <span className="footer__theme-light" />
            <label className="switch">
              <input
                type="checkbox"
                id="themeSwitch"
                onChange={this.switchThemeChanged}
              />
              <span className="slider round" />
            </label>
            <span className="footer__theme-dark" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
