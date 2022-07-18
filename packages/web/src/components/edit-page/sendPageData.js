import React, { Component } from "react";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";

export default ChildComponent => {
  class ComposedComponent extends Component {
    state = { page: null, usedUrls: null };

    componentDidMount() {
      var browserUrl = new URL(window.location.href);
      var pageType = browserUrl.searchParams.get("t");

      const config = {
        headers: {
          authorization: localStorage.getItem("token")
        }
      };

      if (pageType === "public") {
        var url = `/api/pages/${window.location.pathname.split("/")[2]}/edit`;
      } else if (pageType === "private") {
        var url = `/api/${window.location.pathname.split("/")[1]}/${
          window.location.pathname.split("/")[2]
        }/edit`;
      }

      axios
        .get(url, config)
        .then(response => {
          this.setState({
            page: response.data.page,
            usedUrls: response.data.urls
          });
        })
        .catch(response => {
          console.log(response);
        });
    }

    render() {
      if (this.state.page) {
        return (
          <ChildComponent
            {...this.props}
            page={this.state.page}
            usedUrls={this.state.usedUrls}
          />
        );
      } else {
        return <div />;
      }
    }
  }

  return ComposedComponent;
};
