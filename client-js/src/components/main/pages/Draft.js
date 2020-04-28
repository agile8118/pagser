import React, { Component } from "react";
import { connect } from "react-redux";
import PageThumbnail from "../../partials/PageThumbnail";
import { ConfirmModal } from "../../partials/Modals";
import Header from "./Header";

import {
  fetchPages,
  changeStatus,
  selectPage,
  removePages,
} from "../../../redux/main/actions";

class Published extends Component {
  state = { confModal: false };

  componentDidMount() {
    this.props.fetchPages("user-pages/draft");
  }

  componentWillUnmount() {
    this.props.changeStatus("normal");
  }

  renderList = () => {
    if (this.props.pages.length > 0) {
      return this.props.pages.map((item) => {
        return (
          <div
            className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
            key={item.id}
          >
            <PageThumbnail
              target="_blank"
              id={item.id}
              noPhoto={true}
              type="draft"
              status={this.props.status}
              selected={
                this.props.selectedPages.indexOf(item.id) > -1 ? true : false
              }
              title={item.contents.title}
              briefDes={item.contents.briefDes}
              onClick={() => {
                if (this.props.status === "editing")
                  this.props.selectPage(item.id);
              }}
            />
          </div>
        );
      });
    } else {
      return <p className="a-13">You don't have any draft page.</p>;
    }
  };

  render() {
    const removeBtn = this.props.status === "editing" && (
      <button
        className="btn-text btn-text-red"
        disabled={this.props.selectedPages.length > 0 ? false : true}
        onClick={() => {
          this.setState({ confModal: true });
        }}
      >
        Delete
      </button>
    );

    const doneBtn = this.props.status === "editing" && (
      <button
        className="btn-text"
        onClick={() => {
          this.props.changeStatus("normal");
        }}
      >
        Done
      </button>
    );

    const editBtn = this.props.pages.length > 0 &&
      this.props.status === "normal" && (
        <button
          className="btn-text"
          onClick={() => {
            this.props.changeStatus("editing");
          }}
        >
          Edit <i className="fa fa-pencil-square" aria-hidden="true" />
        </button>
      );

    return (
      <React.Fragment>
        <ConfirmModal
          header="Delete Draft Pages?"
          open={this.state.confModal}
          btnName="Delete"
          onConfirm={() => {
            this.props.removePages("user-pages/draft");
            this.setState({ confModal: false });
          }}
          onCancel={() => {
            this.setState({ confModal: false });
          }}
        >
          <p>
            Are you sure that you want to delete the selected draft page{this
              .props.selectedPages.length > 1
              ? "s "
              : ""}
            ? <br /> You have selected {this.props.selectedPages.length} draft
            page{this.props.selectedPages.length > 1 ? "s " : ""} and you cannot
            undo the action.
          </p>
        </ConfirmModal>
        <div className="row">
          <Header />
          <div className="header-nav">
            <h3 className="heading-tertiary">Your Draft Pages:</h3>
            <div className="header-nav__actions">
              {removeBtn}
              {doneBtn}
              {editBtn}
            </div>
          </div>
          <div className="row">{this.renderList()}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    selectedPages: state.selectedPages,
    status: state.status,
    filterBy: state.filterBy,
  };
};

export default connect(
  mapStateToProps,
  { fetchPages, changeStatus, selectPage, removePages }
)(Published);
