import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";
import { Modal } from "../partials/Modals";

import { closeModal } from "actions";

const ClModal = (props) => {
  return createPortal(
    <Modal
      header="Add to Collection:"
      type="small"
      open={props.collectionMdl}
      onClose={() => {
        props.closeModal();
      }}
    >
      <p>
        Are you really sure that you want to delete your page? All of the
        comments and likes will be deleted.
      </p>
    </Modal>,
    document.querySelector("#modal-root")
  );
};

const mapStateToProps = (state) => {
  return {
    collectionMdl: state.modals.collectionMdl,
    collections: state.collections,
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(ClModal);
