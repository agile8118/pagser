import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./Actions";
import Author from "./Author";
import Rating from "./Rating";
import Photo from "./Photo";
import Comments from "./Comments";
import AttachFiles from "./AttachFiles";

import * as actions from "actions";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPrivatePageData();
  }

  renderBody() {
    return <p dangerouslySetInnerHTML={{ __html: this.props.contents.body }} />;
  }

  renderComment() {
    if (this.props.configurations.comments) {
      return <Comments />;
    } else {
      return (
        <p className="normal-paragraph disabled-message-comments center-content">
          Comments are disabled for this page.
        </p>
      );
    }
  }

  renderRating() {
    if (this.props.configurations.rating) {
      return <Rating />;
    } else {
      return (
        <p className="normal-paragraph disabled-message">
          Rating are unabled for this page.
        </p>
      );
    }
  }

  renderAuthor() {
    if (!this.props.configurations.anonymously) {
      return <Author />;
    } else {
      return (
        <p className="normal-paragraph disabled-message">
          This page has been created anonymously.
        </p>
      );
    }
  }

  renderBriefDes = () => {
    if (this.props.contents.briefDes.replace(/ /g, "").length > 0) {
      return (
        <div>
          <strong>What's this page about?</strong>
          {this.props.contents.briefDes}
        </div>
      );
    } else {
      return <div />;
    }
  };

  renderTarget = () => {
    if (this.props.contents.targets.replace(/ /g, "").length > 0) {
      return (
        <div>
          <strong>Who's this page for?</strong>
          {this.props.contents.targets}
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    if (this.props.isPending === false && this.props.id !== "notfound") {
      document.querySelector("title").innerHTML = `${
        this.props.contents.title
      } | Pagher`;
      return (
        <div>
          <div className="row">
            <div className="page">
              <div className="page__header">
                <Actions type="private" />
                <h1 className="page__header__title">
                  {this.props.contents.title}
                </h1>
                <span className="page__header__time">{this.props.date}</span>
              </div>

              <Photo />

              <div className="page__contents">
                <div className="page__information">
                  {this.renderBriefDes()}
                  {this.renderTarget()}
                </div>
                <hr />
                <div className="page__body">{this.renderBody()}</div>

                <AttachFiles />
              </div>

              {this.renderAuthor()}

              {this.renderRating()}
            </div>
          </div>

          {this.renderComment()}
          <br />
          <br />
          <br />
          <div id="snackbar" />
        </div>
      );
    }
    if (this.props.id === "notfound") {
      document.querySelector("body").classList.add("body-grey");
      document.querySelector("title").innerHTML = "Page Not Found | Pagher";
      return (
        <h3 className="a-1 center-content">
          Sorry but no page with this URL werer found. <br /> Maybe the author
          has deleted this page.
        </h3>
      );
    } else {
      return (
        <div>
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

const mapStateToProps = (state) => {
  return {
    id: state.pageData.id,
    viewer: {
      favorited: state.pageData.favorited,
      status: state.pageData.status,
    },
    configurations: state.pageData.configurations,
    date: state.pageData.date,
    contents: state.pageData.contents,
    isPending: state.pageData.isPending,
  };
};

export default connect(
  mapStateToProps,
  actions
)(Index);
