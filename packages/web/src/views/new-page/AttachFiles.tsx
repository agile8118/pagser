import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Loading,
  Button,
  ConfirmModal,
  UploadAttachFile,
} from "@pagser/reusable";
import { util, request, loadingModal, alert, redirectToLogin, PagesAPI, FILE_SIZE_LIMITS } from "@pagser/common";
import ProgressBar from "./ProgressBar";

interface IFile {
  name: string;
  id: number;
}

const AttachFiles = () => {
  const [files, setFiles] = useState<IFile[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [confirmationMdl, setConfirmationMdl] = useState(false);
  const [confirmationMdlDataId, setConfirmationMdlDataId] = useState("");
  const [uploadAttachFileMdl, setUploadAttachFileMdl] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async (msg?: string) => {
    try {
      setLoading(true);
      const response = await request.get<PagesAPI.GetAttachFilesResponse>(
        `/pages/${util.getParameterByName(
          "id",
          window.location.href
        )}/attach-files?type=draft`,
        {
          auth: true,
        }
      );

      setFiles(response.attachFiles);
      setLoading(false);
      if (msg) alert(msg, "success");
    } catch (error: any) {
      if (error.status === 401) {
        redirectToLogin("Please log in to create a new page.");
      } else {
        navigate(`/new-page/initial-step`);
      }
    }
  };

  const renderFiles = () => {
    return files.map((file) => {
      return (
        <a
          className="file-link"
          key={file.name}
          href={`/api/pages/${util.getParameterByName(
            "id",
            window.location.href
          )}/attach-files/${file.name}`}
        >
          <i className="fa fa-download" />
          {" " + file.name}
          <button
            className="btn-i"
            onClick={(e) => {
              // This will prevent the file from starting to get downloaded
              e.preventDefault();
              setConfirmationMdl(true);
              setConfirmationMdlDataId(String(file.id));
            }}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </a>
      );
    });
  };

  const onBackButtonClicked = () => {
    navigate(
      `/new-page/page-thumbnail?id=${util.getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  const onNextButtonClicked = () => {
    navigate(
      `/new-page/final-step?id=${util.getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  const renderContents = () => {
    if (loading)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    return (
      <React.Fragment>
        {/* Back button */}
        <button
          className="button-text button-text--big a-11"
          onClick={() => {
            onBackButtonClicked();
          }}
        >
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back
        </button>

        {/* Stage title */}
        <div className="center-content">
          <h3 className="heading-tertiary">Attach Files</h3>
        </div>

        <p className="a-18">
          Attach files to your page in any format:
        </p>

        <Button
          color="blue"
          size="small"
          rounded={true}
          onClick={() => {
            setUploadAttachFileMdl(true);
          }}
        >
          <i className="fa fa-upload button__icon-left" /> Attach a File
        </Button>

        <ConfirmModal
          header="Remove the attach file"
          open={confirmationMdl}
          message="Are you sure you want to remove this attach file?"
          onConfirm={async () => {
            setConfirmationMdl(false);
            loadingModal("Deleting the attach file...");

            await request.delete(
              `/pages/${util.getParameterByName(
                "id",
                window.location.href
              )}/attach-files/${confirmationMdlDataId}?type=draft`,
              {
                auth: true,
              }
            );
            loadingModal();
            fetchFiles("File deleted successfully.");
          }}
          onCancel={() => setConfirmationMdl(false)}
        />

        <UploadAttachFile
          open={uploadAttachFileMdl}
          header="Attach a File"
          text={`You can upload a maximum of 5 files, up to ${FILE_SIZE_LIMITS.ATTACH_FILE / (1024 * 1024)}MB each.`}
          size={FILE_SIZE_LIMITS.ATTACH_FILE}
          url={`/pages/${util.getParameterByName(
            "id",
            window.location.href
          )}/attach-files?type=draft`}
          success={() => {
            fetchFiles("File uploaded successfully.");
          }}
          onClose={() => {
            setUploadAttachFileMdl(false);
          }}
        />

        <div className="new-page-attach-files__files">{renderFiles()}</div>

        <p className="a-18 italic">
          {files.length
            ? "You can always add or remove attached files after you publish your page."
            : "You can always add or remove attached files after you publish your page. You can also skip this for now and do it later."}
        </p>

        {/* Next button */}
        <div className="u-flex-text-center">
          <Button
            testId="attach-files-next"
            onClick={() => {
              onNextButtonClicked();
            }}
            color={files.length ? "blue" : "default"}
          >
            {files.length ? "Next" : "Skip"}

            <i className="fa fa-arrow-circle-right button__icon-right"></i>
          </Button>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ProgressBar width={80} />
      <div className="page-new">{renderContents()}</div>
    </React.Fragment>
  );
};

export default AttachFiles;
