import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import util from "../../../lib/forms";
import { ROOT_URL } from "../../../lib/keys";
import Header from "./Header";

class Draft extends Component {
  constructor(props) {
    super(props);

    this.state = { pages: null };
  }

  componentDidMount() {
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .get(`/api/admin/pages/trash`, config)
      .then(response => {
        const pages = response.data.pages;
        this.setState({
          pages
        });
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      });
  }

  renderPages() {
    if (this.state.pages === null) {
      return (
        <div>
          <div className="center-content margin-top-2">
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
    if (this.state.pages.length === 0) {
      return (
        <div className="pages-no-page-message">
          <p>No deleted page.</p>
        </div>
      );
    }
    if (this.state.pages.length > 0) {
      return this.state.pages.map(page => {
        if (page.contents.title.length > 25) {
          page.contents.title = page.contents.title.substring(0, 25) + "...";
        }
        if (page.contents.briefDes.length > 35) {
          page.contents.briefDes =
            page.contents.briefDes.substring(0, 35) + "...";
        }

        return (
          <div
            className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
            key={page._id}
          >
            <div className="page-thumbnail page-thumbnail-no-photo">
              <a href={null} target="_blank">
                <div className="page-thumbnail__details">
                  <h4>{page.contents.title}</h4>
                  <p>{page.contents.briefDes}</p>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <h5 className="heading-fifth">Pages you have deleted:</h5>
        <div className="row">{this.renderPages.apply(this)}</div>
      </div>
    );
  }
}

export default Draft;
