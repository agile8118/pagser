import React, { Component } from "react";
import { connect } from "react-redux";
import PageThumbnail from "../partials/PageThumbnail";
import { ConfirmModal } from "../partials/Modals";
import Dropdown from "../partials/Dropdown";

import {
  fetchPages,
  changeStatus,
  selectPage,
  removePages,
} from "../../redux/main/actions";

class ReadLater extends Component {
  state = { confModal: false };

  componentDidMount() {
    this.props.fetchPages("read-later", this.props.filterBy, this.props.sortBy);
  }

  componentWillUnmount() {
    this.props.changeStatus("normal");
  }

  renderDropdowns = () => {
    if (this.props.filterBy === "all" && this.props.pages.length === 0)
      return "";
    if (this.props.status === "normal")
      return (
        <React.Fragment>
          {this.props.pages.length > 1 && (
            <Dropdown
              num="1"
              select={this.props.sortBy}
              onChange={(name) => {
                this.props.fetchPages("read-later", this.props.filterBy, name);
              }}
            >
              <div
                data-role-name="btn-name"
                data-icon-class="fa fa-sort-amount-asc"
              >
                Sort By
              </div>
              <div data-role-name="item" data-name="date-added-asc">
                Date Added - Newest first
              </div>
              <div data-role-name="item" data-name="date-added-desc">
                Date Added - Oldest first
              </div>
              <div data-role-name="item" data-name="date-published-asc">
                Date Published - Newest first
              </div>
              <div data-role-name="item" data-name="date-published-desc">
                Date Published - Oldest first
              </div>
            </Dropdown>
          )}

          <Dropdown
            num="2"
            select={this.props.filterBy}
            onChange={(name) => {
              this.props.fetchPages("read-later", name, this.props.sortBy);
            }}
          >
            <div data-role-name="btn-name" data-icon-class="fa fa-filter">
              Filter By
            </div>
            <div data-role-name="item" data-name="all">
              All Pages
            </div>
            <div data-role-name="item" data-name="private">
              Private Pages
            </div>
            <div data-role-name="item" data-name="public">
              Public Pages
            </div>
          </Dropdown>
        </React.Fragment>
      );
  };

  renderList = () => {
    if (this.props.pages.length > 0) {
      return this.props.pages.map((item) => {
        return (
          <div
            className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
            key={item.id}
          >
            <PageThumbnail
              selected={
                this.props.selectedPages.indexOf(item.id) > -1 ? true : false
              }
              status={this.props.status}
              briefDes={item.contents.briefDes}
              title={item.contents.title}
              image={item.photo.secure_url}
              target="_blank"
              url={item.url}
              type={item.type}
              authorUsername={item.author.username}
              onClick={() => {
                if (this.props.status === "editing")
                  this.props.selectPage(item.id);
              }}
            />
          </div>
        );
      });
    } else {
      if (this.props.filterBy === "public") {
        return (
          <p className="a-13">
            You don't have any public page on your read later list.
          </p>
        );
      }

      if (this.props.filterBy === "private") {
        return (
          <p className="a-13">
            You don't have any private page on your read later list.
          </p>
        );
      }
      return <p className="a-13">Your read later list is empty.</p>;
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
        Remove
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
          header="Remove from the list?"
          open={this.state.confModal}
          onConfirm={() => {
            this.props.removePages("read-later");
            this.setState({ confModal: false });
          }}
          onCancel={() => {
            this.setState({ confModal: false });
          }}
        >
          <p>
            Are you sure that you want to remove the selected page{this.props
              .selectedPages.length > 1
              ? "s"
              : ""}{" "}
            from your read later list? <br /> You have selected{" "}
            {this.props.selectedPages.length} page{this.props.selectedPages
              .length > 1
              ? "s"
              : ""}{" "}
            and you cannot undo the action.
          </p>
        </ConfirmModal>
        <div className="row">
          <div className="header-nav">
            <h3 className="heading-tertiary">Your Read Later List:</h3>
            <div className="header-nav__actions">
              {this.renderDropdowns()}
              {removeBtn}
              {doneBtn}
              {editBtn}
            </div>
          </div>
          {this.renderList()}
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
    sortBy: state.sortBy,
    filterBy: state.filterBy,
  };
};

export default connect(
  mapStateToProps,
  { fetchPages, changeStatus, selectPage, removePages }
)(ReadLater);
