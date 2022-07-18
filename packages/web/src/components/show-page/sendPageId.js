import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    render() {
      if (this.props.isPending === false) {
        return <ChildComponent {...this.props} id={this.props.id} />;
      } else {
        return <div />;
      }
    }
  }

  const mapStateToProps = state => {
    return {
      id: state.pageData.id,
      isPending: state.pageData.isPending
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
