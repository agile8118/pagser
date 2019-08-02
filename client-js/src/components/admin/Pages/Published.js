import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import util from "../../../lib/forms";
import { ROOT_URL } from "../../../lib/keys";
import Alert from "../../partials/Alert";
import Header from "./Header";

class Pages extends Component {
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
      .get(`/api/admin/pages/published`, config)
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
          <p>
            You have not created any public or specific page, create one by
            clicking on the red button in the navigation menu
          </p>
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
        if (page.type === "specific") {
          var pageUrl = `/${page.author.username}/${page.url}`;
        } else if (page.type === "public") {
          var pageUrl = `/public-pages/${page.url}`;
        }

        return (
          <div
            className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
            key={page._id}
          >
            <div className="page-thumbnail">
              <a href={pageUrl} target="_blank">
                <div className="page-thumbnail__photo">
                  <img
                    src={page.cropedPhoto.secure_url}
                    onError={e => {
                      e.target.src = "/images/pages/placeholder.svg";
                    }}
                  />
                </div>
                <div className="page-thumbnail__details">
                  <h4>{page.contents.title}</h4>
                  <p>{page.contents.briefDes}</p>
                </div>
                <span className="page-thumbnail__type">{page.type}</span>
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
        <div className="u-two-item-row">
          <h5 className="heading-fifth u-two-item-row--1">
            Pages you have published:
          </h5>
        </div>
        <div className="row">{this.renderPages.apply(this)}</div>
      </div>
    );
  }
}

export default Pages;
