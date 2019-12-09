import React from "react";
import { connect } from "react-redux";

const Author = ({ isPending, author }) => {
  if (isPending) return <div />;

  let userBio = author.biography.length
    ? author.biography
    : "This user has not added a biography.";
  let bioClassName = author.biography.length ? "" : "italic";

  return (
    <div className="page__author">
      <img
        src={author.photo.secure_url}
        id="user-photo"
        alt="Author image"
        onError={() => {
          document.querySelector("#user-photo").src =
            "/images/users/placeholder.png";
        }}
      />
      <div className="page__author__details">
        <a
          href={`/users/${author.username}`}
          target="_blank"
          className="black-link"
        >
          {author.name}
        </a>
        <p className={bioClassName}>{userBio}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ pageData }) => {
  return {
    isPending: pageData.isPending,
    author: pageData.author
  };
};

export default connect(mapStateToProps)(Author);
