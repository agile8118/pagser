import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import util from "../../../lib/forms";
import { ROOT_URL } from "../../../lib/keys";
import Alert from "../../partials/Alert";
import Header from "./Header";

class Draft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: null,
      status: "normal",
      selectedPages: [],
      confirmModalStatus: ""
    };
  }

  componentDidMount() {
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .get(`/api/admin/pages/draft`, config)
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

  onPageClicked(pageId) {
    if (this.state.status === "editing") {
      var selectedPages = this.state.selectedPages;
      if (selectedPages.indexOf(pageId) === -1) {
        selectedPages.push(pageId);
        this.setState({ selectedPages });
      } else {
        var index = selectedPages.indexOf(pageId);
        selectedPages.splice(index, 1);
        this.setState({ selectedPages });
      }
    }
  }

  confirmModal() {
    document.querySelector("#confirmModal").classList.toggle("display-none");
  }

  deleteDraftPages() {
    this.setState({ confirmModalStatus: "loading" });
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .put(
        `/api/admin/pages/delete-draft-pages`,
        { pageIds: this.state.selectedPages },
        config
      )
      .then(response => {
        var newPages = this.state.pages.filter(page => {
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
      );
    } else {
      element = (
        <div className="cupertino-modal__actions">
          <button onClick={this.confirmModal}>Cancel</button>
          <button onClick={this.deleteDraftPages.bind(this)}>Delete</button>
        </div>
      );
    }
    return (
      <div className="cupertino-modal-container display-none" id="confirmModal">
        <div className="cupertino-modal">
          <div className="cupertino-modal__content">
            <h3>Delete selected draft pages?</h3>
            <p>These pages will be deleted entirely. You cannot undo this.</p>
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
        if (this.state.selectedPages.length > 0) {
          var disabled = false;
        } else {
          var disabled = true;
        }
        return (
          <div className="u-two-item-row--2">
            <button
              className="btn-text btn-text--red"
              disabled={disabled}
              onClick={() => {
                this.confirmModal();
              }}
            >
              Delete
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
          <p>No draft page.</p>
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

        if (this.state.status === "normal") {
          var pageClass = "page-thumbnail page-thumbnail-no-photo";
          var pageUrl = `/new-page/initial-step?id=${page._id}`;
        } else if (this.state.status === "editing") {
          if (this.state.selectedPages.indexOf(page._id) !== -1) {
            pageClass =
              "page-thumbnail page-thumbnail-no-photo page-thumbnail--shaking page-thumbnail--selected";
          } else {
            var pageClass =
              "page-thumbnail page-thumbnail-no-photo page-thumbnail--shaking";
          }
          var pageUrl = "javascript:void(0)";
        }

        return (
          <div
            key={page._id}
            className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
          >
            <div
              className={pageClass}
              onClick={e => {
                this.onPageClicked(page._id);
              }}
            >
              <a href={pageUrl} target="_blank">
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
        {this.renderConfirmModal()}
        <div className="row u-two-item-row">
          <h5 className="heading-fifth u-two-item-row--1">Your draft pages:</h5>
          {this.renderActionButton()}
        </div>

        <div className="row">{this.renderPages.apply(this)}</div>
      </div>
    );
  }
}

export default Draft;
