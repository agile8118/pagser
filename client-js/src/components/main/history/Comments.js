import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { pageUrl, loadingModal } from "../../../lib/util";
import Header from "./Header";

class Comments extends Component {
  state = { comments: [] };

  async fetchComments() {
    loadingModal("Loading...");
    const { data } = await axios.get(`/api/comments/history`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    this.setState({ comments: data.comments });
    loadingModal();
  }

  componentDidMount() {
    this.fetchComments();
  }

  renderComments() {
    return this.state.comments.map((c) => {
      let message;
      if (!c.reply.name)
        message = (
          <span>
            You commented on page{" "}
            <strong>
              <a
                href={pageUrl(c.page.url, c.page.author.username, c.page.type)}
                target="_blank"
              >
                {c.page.title}
              </a>
            </strong>
          </span>
        );

      if (c.reply.name) {
        let name =
          c.reply.name === "yourself" ? (
            <span>yourself</span>
          ) : (
            <strong>
              <a href={`/users/${c.reply.username}`} target="_blank">
                {c.reply.name}
              </a>
            </strong>
          );
        message = (
          <span>
            You replied to {name} on page{" "}
            <strong>
              <a
                href={pageUrl(c.page.url, c.page.author.username, c.page.type)}
                target="_blank"
              >
                {c.page.title}
              </a>
            </strong>
          </span>
        );
      }

      return (
        <React.Fragment key={c.id}>
          <p className="comment-brief__label">{message}</p>
          <div className="comment-brief">
            <div>
              {c.text}
              <div className="comment-brief__date">{c.date}</div>
            </div>
            <div>
              <a
                href={pageUrl(c.page.url, c.page.author.username, c.page.type)}
                className="btn-i comment-brief__go"
              >
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <Header />
        {this.renderComments()}
      </div>
    );
  }
}

export default connect(null)(Comments);
