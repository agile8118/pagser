import React, { Component } from "react";
import { getParameterByName } from "../../lib/util";

import FinalStepPublic from "./FinalStepPublic";
import FinalStepPrivate from "./FinalStepPrivate";

class FinalStep extends Component {
  componentDidMount() {
    const type = getParameterByName("type", window.location.href);
    if (type !== "public" && type !== "private") {
      this.props.history.push(`/new-page/initial-step`);
    }
  }

  render() {
    const type = getParameterByName("type", window.location.href);
    const componentThis = this;
    if (type === "public") {
      return <FinalStepPublic history={this.props.history} />;
    }

    if (type === "private") {
      return <FinalStepPrivate history={this.props.history} />;
    }
  }
}

export default FinalStep;
