import React, { Component } from "react";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";

export default ChildComponent => {
	class ComposedComponent extends Component {
		constructor(props) {
			super(props);

			this.state = {
				loggedIn: null
			};
		}

		componentDidMount() {
			const config = {
				headers: {
					authorization: localStorage.getItem("token")
				}
			};
			axios
				.post(`/auth`, null, config)
				.then(response => {
					window.location.href = "/admin";
				})
				.catch(response => {
					this.setState({ loggedIn: false });
				});
		}

		render() {
			if (this.state.loggedIn === false) {
				return <ChildComponent {...this.props} />;
			} else {
				return <div />;
			}
		}
	}

	return ComposedComponent;
};
