import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import PhotoUpload from "./PhotoUpload";

import * as actions from "../../redux/specific-page/actions";

class Photo extends Component {
	render() {
		if (this.props.isPending === false) {
			if (this.props.status === "owner") {
				return <PhotoUpload photo={this.props.photo} pageId={this.props.id} />;
			} else if (
				this.props.status === "spectator" ||
				this.props.status === "authenticated"
			) {
				if (this.props.photo.secure_url.length > 0) {
					return (
						<div className="page__photo" id="js--page-photo">
							<img
								className="margin-top-1"
								src={this.props.photo.secure_url}
								alt="Page featured image"
								onError={e => {
									document.querySelector("#js--page-photo").innerHTML = "";
									document
										.querySelector("#js--page-photo")
										.classList.add("margin-top-2");
								}}
							/>
						</div>
					);
				} else {
					return <div className="form__group" />;
				}
			} else {
				return <div />;
			}
		} else {
			return <div />;
		}
	}
}

const mapStateToProps = state => {
	return {
		id: state.fetchPageData.id,
		photo: state.fetchPageData.photo,
		status: state.fetchPageData.status,
		isPending: state.fetchPageData.isPending
	};
};

export default connect(
	mapStateToProps,
	actions
)(Photo);
