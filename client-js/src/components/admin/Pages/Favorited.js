import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import util from "../../../lib/forms";
import { ROOT_URL } from "../../../lib/keys";
import PageThumbnail from "../../partials/PageThumbnail";
import Loading from "../../partials/Loading";
import Header from "./Header";

class Draft extends Component {
  state = {
    pages: null,
    status: "normal",
    selectedPages: [],
    confirmModalStatus: ""
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
      .get(`/api/admin/pages/favorited`, config)
      .then(response => {
        const pages = response.data.pages;
        if (this._isMounted) {
          this.setState({
            pages
          });
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onPageClicked(pageId) {
    if (this.state.status === "editing") {
      let selectedPages = this.state.selectedPages;
      if (selectedPages.indexOf(pageId) === -1) {
        selectedPages.push(pageId);
        this.setState({ selectedPages });
      } else {
        let index = selectedPages.indexOf(pageId);
        selectedPages.splice(index, 1);
        this.setState({ selectedPages });
      }
    }
  }

  confirmModal() {
    document.querySelector("#confirmModal").classList.toggle("display-none");
  }

  unfavoritePages() {
    this.setState({ confirmModalStatus: "loading" });
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .put(
        `/api/admin/pages/unfavorite-pages`,
        { pageIds: this.state.selectedPages },
        config
      )
      .then(response => {
        let newPages = this.state.pages.filter(page => {
          return this.state.selectedPages.indexOf(page._id) === -1;
        });
        this.setState({
          pages: newPages,
          selectedPages: [],
          confirmModalStatus: ""
        });
        this.confirmModal();
      })
      .catch();
  }

  renderConfirmModal() {
    let element;
    if (this.state.confirmModalStatus === "loading") {
      element = (
        <div className="center-content margin-bottom-1">
          <Loading />
        </div>
      );
    } else {
      element = (
        <div className="cupertino-modal__actions">
          <button onClick={this.confirmModal}>Cancel</button>
          <button onClick={this.unfavoritePages.bind(this)}>Unfavorite</button>
        </div>
      );
    }

    return (
      <div className="cupertino-modal-container display-none" id="confirmModal">
        <div className="cupertino-modal">
          <div className="cupertino-modal__content">
            <h3>Unfavorite selected pages?</h3>
            <p>
              These pages will be removed from your favorited list. You cannot
              undo this.
            </p>
          </div>
          {element}
        </div>
      </div>
    );
  }

  renderActionButton() {
    if (this.state.pages && this.state.pages.length > 0) {
      if (this.state.status === "normal") {
        return (
          <div className="u-two-item-row--2">
            <button
              className="btn-text"
              id="edit-button"
              onClick={() => {
                this.setState({ status: "editing" });
              }}
            >
              Edit
            </button>
          </div>
        );
      } else {
        // If any page was selected make the button active otherwise make it disable
        let disabled = true;
        if (this.state.selectedPages.length > 0) disabled = false;

        return (
          <div className="u-two-item-row--2">
            <button
              className="btn-text btn-text--red"
              disabled={disabled}
              onClick={() => {
                this.confirmModal();
              }}
            >
              Unfavorite
            </button>
            <button
              className="btn-text margin-left-2"
              id="done-button"
              onClick={() => {
                this.setState({ status: "normal", selectedPages: [] });
              }}
            >
              Done
            </button>
          </div>
        );
      }
    } else {
      return <div />;
    }
  }

  renderPages() {
    if (this.state.pages === null) {
      return (
        <div>
          <div className="center-content margin-top-2">
            <Loading />
          </div>
        </div>
      );
    }
    if (this.state.pages.length === 0) {
      return (
        <div className="pages-no-page-message">
          <p>You have not added any page to your favorited list.</p>
        </div>
      );
    }
    if (this.state.pages.length > 0) {
      return this.state.pages.map(page => {
        let target = "";
        let pageClass = "";
        let pageUrl = "";
        if (page.contents.title.length > 25) {
          page.contents.title = page.contents.title.substring(0, 25) + "...";
        }
        if (page.contents.briefDes.length > 35) {
          page.contents.briefDes =
            page.contents.briefDes.substring(0, 35) + "...";
        }

        if (page.type === "specific") {
          pageUrl = `/${page.author.username}/${page.url}`;
        } else if (page.type === "public") {
          pageUrl = `/public-pages/${page.url}`;
        }

        if (this.state.status === "normal") {
          pageClass = "page-thumbnail";
          target = "_blank";
        } else if (this.state.status === "editing") {
          target = "_self";
          if (this.state.selectedPages.indexOf(page._id) !== -1) {
            pageClass =
              "page-thumbnail page-thumbnail--shaking page-thumbnail--selected";
          } else {
            pageClass = "page-thumbnail page-thumbnail--shaking";
          }
          pageUrl = "javascript:void(0)";
        }

        return (
          <div
            className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
            key={page._id}
          >
            <PageThumbnail
              onClick={e => {
                this.onPageClicked(page._id);
              }}
              target={target}
              className={pageClass}
              url={pageUrl}
              image={page.cropedPhoto.secure_url}
              title={page.contents.title}
              briefDes={page.contents.briefDes}
              type={page.type}
            />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderConfirmModal()}
        <div className="row u-two-item-row">
          <h5 className="heading-fifth u-two-item-row--1">
            Pages you have favorited:
          </h5>
          {this.renderActionButton()}
        </div>
        <div className="row">{this.renderPages.apply(this)}</div>
      </div>
    );
  }
}

export default Draft;
