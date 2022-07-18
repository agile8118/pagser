import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import UploadPhoto from "../modals/UploadPhoto";

import { openUploadPhoto } from "actions";

class ProfilePhoto extends Component {
  state = {
    photo: "/images/users/placeholder.png",
  };

  // Is used to avoid memory leak
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    // Get the user photo from server
    axios
      .get(`/api/profile`, config)
      .then((response) => {
        const user = response.data.user;
        if (this._isMounted) {
          this.setState({
            photo: user.photo.secure_url || "/images/users/placeholder.png",
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      });
  }

  // Set the _isMounted as false so that no ajax request will be made after the unmount
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <div className="center-content margin-top-3">
          <h3 className="heading-tertiary" id="photo">
            Photo
          </h3>
          <img
            className="profile__img"
            src={this.state.photo}
            onError={() => {
              this.setState({ photo: "/images/users/placeholder.png" });
            }}
          />
          <br />
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.props.openUploadPhoto();
            }}
            className="btn-text btn-text-underlined"
          >
            Change or upload a new photo
          </a>
        </div>

        <UploadPhoto
          header="Upload a Profile Photo"
          text="Upload a beautiful non-pixled photo of yourself:"
          inputLabelName="Choose your photo"
          url="/api/profile/photo"
          minWidth={250}
          minHeight={250}
          size={5000000}
          aspectRatio={1 / 1}
          success={(photo) => {
            this.setState({ photo });
          }}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { openUploadPhoto }
)(ProfilePhoto);
