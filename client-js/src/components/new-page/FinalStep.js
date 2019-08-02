import React, { Component } from "react";
import { getParameterByName } from "../../lib/util";

import FinalStepPublic from "./FinalStepPublic";
import FinalStepSpecific from "./FinalStepSpecific";

class FinalStep extends Component {
  componentDidMount() {
    const type = getParameterByName("type", window.location.href);
    if (type !== "public" && type !== "specific") {
      this.props.history.push(`/new-page/initial-step`);
    }
  }

  render() {
    const type = getParameterByName("type", window.location.href);
    const componentThis = this;
    if (type === "public") {
      return <FinalStepPublic history={this.props.history} />;
    }

    if (type === "specific") {
      return <FinalStepSpecific history={this.props.history} />;
    }
  }
}

export default FinalStep;
