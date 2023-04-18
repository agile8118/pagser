import React, { useState, useEffect } from "react";
import { util, request } from "@pagser/common";
import { Loading } from "@pagser/reusable";
import Header from "./Header";

interface IComment {
  id: string;
  text: string;
  date: string;
  reply: {
    name: string;
    username: string;
  };
  page: {
    type: "public" | "private";
    title: string;
    url: string;
    author: {
      username: string;
    };
  };
}

const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(false);

  // Sends a request to server to fetch the list of comments user has written
  const fetchComments = async () => {
    setLoading(true);
    const response = (await request.get(`/comments/history`, {
      auth: true,
    })) as any;

    setComments(response.comments);
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Render list of comments user has written
  const renderComments = () => {
    return comments.map((c) => {
      // Decide what to show for the comment history label
      let labelText;
      if (!c.reply.name)
        labelText = (
          <span>
            You commented on page{" "}
            <strong>
              <a
                href={util.pageUrl(
                  c.page.url,
                  c.page.author.username,
                  c.page.type
                )}
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
        labelText = (
          <span>
            You replied to {name} on page{" "}
            <strong>
              <a
                href={util.pageUrl(
                  c.page.url,
                  c.page.author.username,
                  c.page.type
                )}
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
          <p className="comment-brief__label">{labelText}</p>
          <div className="comment-brief">
            <div>
              {c.text}
              <div className="comment-brief__date">{c.date}</div>
            </div>
            <div>
              <a
                href={util.pageUrl(
                  c.page.url,
                  c.page.author.username,
                  c.page.type
                )}
                className="btn-i comment-brief__go"
              >
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="row">
      <Header />
      {loading && (
        <div className="center-content margin-top-1">
          <Loading />
        </div>
      )}
      {!loading && renderComments()}
    </div>
  );
};

export default Comments;
