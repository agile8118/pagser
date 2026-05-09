import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request, loadingModal, FILE_SIZE_LIMITS } from "@pagser/common";
import { ConfirmModal, UploadAttachFile, Button } from "@pagser/reusable";
import {
  fetchAttachFiles,
  selectLoading,
  selectId,
  selectAttachFiles,
} from "./pageSlice";
import { selectStatus } from "./userSlice";

const AttachFiles = () => {
  const [uploadAttachFilesModalOpen, setUploadAttachFilesModalOpen] =
    useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [confirmModalFileId, setConfirmModalFileId] = useState("");
  const [confirmModalFileName, setConfirmModalFileName] = useState("");

  const pageId = useSelector(selectId);
  const status = useSelector(selectStatus);
  const loading = useSelector(selectLoading);
  const attachFiles = useSelector(selectAttachFiles);

  const dispatch = useDispatch<any>();

  // Render all attach files of the page
  const renderFiles = () => {
    if (status === "owner")
      // If user is the owner of the page
      return attachFiles.map((file) => {
        return (
          <a
            className="file-link"
            key={file.name}
            href={`/api/pages/${pageId}/attach-files/${file.name}`}
          >
            <i className="fa fa-download" />
            {" " + file.name}
            <button
              className="btn-i"
              onClick={(e) => {
                // This will prevent the file from starting to get downloaded
                e.preventDefault();
                setConfirmModalFileId(String(file.id));
                setConfirmModalFileName(file.name);
                setConfirmModalOpen(true);
              }}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </a>
        );
      });

    // If user is not the owner of the page
    return attachFiles.map((file) => {
      return (
        <a
          className="file-link"
          key={file.name}
          href={`/api/pages/${pageId}/attach-files/${file.name}`}
        >
          <i className="fa fa-download" />
          {" " + file.name}
        </a>
      );
    });
  };
  ``;

  // Render the add an attach file button
  const renderButton = () => {
    if (status === "owner" && attachFiles.length < 5)
      // If user is the owner of the page
      return (
        <React.Fragment>
          <Button
            color="blue"
            size="small"
            rounded={true}
            onClick={() => {
              setUploadAttachFilesModalOpen(true);
            }}
          >
            <i className="fa fa-upload button__icon-left" /> Add a File
          </Button>

          <UploadAttachFile
            open={uploadAttachFilesModalOpen}
            header="Add a File"
            text={`You can upload a maximum of 5 files, ${FILE_SIZE_LIMITS.ATTACH_FILE / (1024 * 1024)} MB each, per page.`}
            size={FILE_SIZE_LIMITS.ATTACH_FILE}
            url={`/pages/${pageId}/attach-files`}
            success={() => {
              dispatch(fetchAttachFiles("File uploaded successfully."));
            }}
            onClose={() => {
              setUploadAttachFilesModalOpen(false);
            }}
          />
        </React.Fragment>
      );
    // If viewer is not the owner of the page just return a simple div
    return <div />;
  };

  if (loading) return <div />;

  return (
    <div className="page__attach-files">
      <ConfirmModal
        header="Remove the attach file"
        open={confirmModalOpen}
        onConfirm={async () => {
          setConfirmModalOpen(false);

          loadingModal("Deleting the attach file...");
          await request.delete(
            `/pages/${pageId}/attach-files/${confirmModalFileId}`,
            {
              auth: true,
            }
          );
          dispatch(fetchAttachFiles("File deleted successfully."));
        }}
        onCancel={() => setConfirmModalOpen(false)}
      >
        <p>
          Are you sure you want to delete the file{" "}
          <strong>'{confirmModalFileName}'</strong>? This cannot be undone.
        </p>
      </ConfirmModal>

      <div className="file-links">{renderFiles()}</div>
      {renderButton()}
      {attachFiles.length === 5 && status === "owner" && (
        <em>
          You can only have 5 files per page. To upload a new one, remove an
          existing file first.
        </em>
      )}
    </div>
  );
};

export default AttachFiles;
